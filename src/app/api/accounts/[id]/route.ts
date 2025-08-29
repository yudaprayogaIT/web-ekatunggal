// src/app/api/accounts/[id]/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import bcrypt from "bcryptjs";

const accountsPath = path.join(process.cwd(), "src", "data", "accounts.json");

async function ensureFile(p: string) {
  try { await fs.access(p); } catch {
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    await ensureFile(accountsPath);
    const raw = await fs.readFile(accountsPath, 'utf-8');
    const accounts = JSON.parse(raw) as any[];
    const id = Number(params.id);
    const idx = accounts.findIndex(a => a.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const body = await request.json();
    // body may contain: { fullName?, company?, branchId?, newPassword? }

    if (body.newPassword) {
      if (String(body.newPassword).length < 6) {
        return NextResponse.json({ error: 'Password minimal 6 karakter' }, { status: 400 });
      }
      const hashed = await bcrypt.hash(String(body.newPassword), 10);
      accounts[idx].passwordHash = hashed;
    }

    // fields update (whitelist)
    const updatable = ['fullName','company','companyDate','branchId','ownerDob','gender'];
    for (const k of updatable) {
      if (k in body) accounts[idx][k] = body[k];
    }

    accounts[idx].updatedAt = new Date().toISOString();
    await fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), 'utf-8');

    const safe = { ...accounts[idx] }; delete safe.passwordHash;
    return NextResponse.json({ success: true, data: safe });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
