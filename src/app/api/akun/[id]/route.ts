// // src/app/api/account/[id]/route.ts
// import { NextResponse } from "next/server";
// import { promises as fs } from "fs";
// import path from "path";

// const dataFilePath = path.join(process.cwd(), "src", "data", "registrations.json");

// export async function PATCH(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const id = Number(params.id);
//     const body = await request.json(); // { status: 'approved'|'rejected', adminMessage?: string }

//     if (!['approved', 'rejected', 'pending'].includes(body.status)) {
//       return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
//     }

//     const file = await fs.readFile(dataFilePath, 'utf-8');
//     const regs = JSON.parse(file) as any[];
//     const idx = regs.findIndex(r => r.id === id);
//     if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

//     regs[idx].status = body.status;
//     regs[idx].adminMessage = body.adminMessage ?? null;
//     regs[idx].updatedAt = new Date().toISOString();

//     await fs.writeFile(dataFilePath, JSON.stringify(regs, null, 2), 'utf-8');

//     const safe = { ...regs[idx] }; delete safe.passwordHash;
//     return NextResponse.json({ success: true, data: safe });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// src/app/api/akun/[id]/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const regsPath = path.join(process.cwd(), "src", "data", "registrations.json");
const accountsPath = path.join(process.cwd(), "src", "data", "accounts.json");

async function ensureFile(p: string) {
  try { await fs.access(p); } 
  catch {
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body = await request.json(); // { status, adminMessage? }

    if (!['approved','rejected','pending'].includes(body.status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    await ensureFile(regsPath);
    const raw = await fs.readFile(regsPath, 'utf-8');
    const regs = JSON.parse(raw) as any[];
    const idx = regs.findIndex(r => r.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    regs[idx].status = body.status;
    regs[idx].adminMessage = body.adminMessage ?? null;
    regs[idx].updatedAt = new Date().toISOString();

    // If approving -> ensure accounts.json and create account if not exists
    if (body.status === 'approved') {
      await ensureFile(accountsPath);
      const rawAcc = await fs.readFile(accountsPath, 'utf-8');
      const accounts = JSON.parse(rawAcc) as any[];

      // Avoid duplicate phone in accounts
      const existing = accounts.find(a => a.phone === regs[idx].phone);
      if (!existing) {
        // Take passwordHash from registration (already hashed), or create random if absent
        const passwordHash = regs[idx].passwordHash ?? await bcrypt.hash(Math.random().toString(36).slice(2,10), 10);

        const account = {
          id: Date.now(),
          fullName: regs[idx].fullName ?? null,
          phone: regs[idx].phone,
          company: regs[idx].company ?? null,
          companyDate: regs[idx].companyDate ?? null,
          branchId: regs[idx].branchId ?? null,
          ownerDob: regs[idx].ownerDob ?? null,
          gender: regs[idx].gender ?? null,
          passwordHash,
          createdAt: new Date().toISOString(),
          // additional fields for active accounts
          role: "user",
          active: true
        };

        accounts.push(account);
        await fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), 'utf-8');
      }
    }

    await fs.writeFile(regsPath, JSON.stringify(regs, null, 2), 'utf-8');

    const safe = { ...regs[idx] }; delete safe.passwordHash;
    return NextResponse.json({ success: true, data: safe });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
