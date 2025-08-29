// // src/app/api/akun/login/route.ts
// import { NextResponse } from "next/server";
// import path from "path";
// import { promises as fs } from "fs";
// import bcrypt from "bcryptjs";

// const registrationsPath = path.join(process.cwd(), "src", "data", "registrations.json");
// const accountsPath = path.join(process.cwd(), "src", "data", "accounts.json");

// async function ensureFile(p: string) {
//   try { await fs.access(p); } catch {
//     await fs.mkdir(path.dirname(p), { recursive: true });
//     await fs.writeFile(p, JSON.stringify([], null, 2), "utf-8");
//   }
// }

// function normalizePhone(raw?: any) {
//   if (!raw) return "";
//   let s = String(raw).trim();
//   // remove everything except digits and leading +
//   s = s.replace(/[^\d+]/g, "");
//   // handle +62 or 62 prefix -> 0xxx
//   if (s.startsWith("+62")) return "0" + s.slice(3);
//   if (s.startsWith("62")) return "0" + s.slice(2);
//   // keep leading 0 if present
//   return s;
// }

// export async function POST(request: Request) {
//   try {
//     const body = await request.json().catch(() => ({}));
//     const rawPhone = body?.phone ?? "";
//     const password = String(body?.password ?? "");

//     if (!rawPhone || !password) {
//       return NextResponse.json({ ok: false, message: "Missing phone or password" }, { status: 400 });
//     }

//     const phone = normalizePhone(rawPhone);

//     // ensure files exist
//     await ensureFile(registrationsPath);
//     await ensureFile(accountsPath);

//     // try accounts.json first
//     const accRaw = await fs.readFile(accountsPath, "utf-8");
//     const accounts = JSON.parse(accRaw) as any[];

//     const account = accounts.find(a => normalizePhone(a.phone) === phone);

//     if (account) {
//       const hash = account.passwordHash;
//       if (!hash) return NextResponse.json({ ok: false, message: "Password not set" }, { status: 401 });

//       const match = await bcrypt.compare(password, hash);
//       if (!match) {
//         return NextResponse.json({ ok: false, message: "Invalid credentials", code: "INVALID_PASSWORD" }, { status: 401 });
//       }

//       return NextResponse.json({ ok: true, message: "Login success", redirectTo: "/dashboard" });
//     }

//     // if not in accounts, fallback to registrations (but only approved)
//     const regRaw = await fs.readFile(registrationsPath, "utf-8");
//     const regs = JSON.parse(regRaw) as any[];

//     const reg = regs.find(r => normalizePhone(r.phone) === phone && (r.status === "approved"));
//     if (!reg) {
//       return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
//     }

//     const regHash = reg.passwordHash;
//     if (!regHash) return NextResponse.json({ ok: false, message: "Password not set" }, { status: 401 });

//     const matchReg = await bcrypt.compare(password, regHash);
//     if (!matchReg) {
//       return NextResponse.json({ ok: false, message: "Invalid credentials", code: "INVALID_PASSWORD" }, { status: 401 });
//     }

//     // optional: migrate to accounts.json to simplify next logins
//     const existsInAccounts = accounts.find(a => normalizePhone(a.phone) === phone);
//     if (!existsInAccounts) {
//       const newAccount = {
//         id: Date.now(),
//         fullName: reg.fullName ?? null,
//         phone: reg.phone,
//         company: reg.company ?? null,
//         companyDate: reg.companyDate ?? null,
//         branchId: reg.branchId ?? null,
//         ownerDob: reg.ownerDob ?? null,
//         gender: reg.gender ?? null,
//         passwordHash: regHash,
//         createdAt: new Date().toISOString(),
//         role: "user",
//         active: true
//       };
//       accounts.push(newAccount);
//       await fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), "utf-8");
//     }

//     return NextResponse.json({ ok: true, message: "Login success (from registrations)", redirectTo: "/dashboard" });

//   } catch (err) {
//     console.error("LOGIN ERROR:", err);
//     return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import bcrypt from "bcryptjs";

const registrationsPath = path.join(process.cwd(), "src", "data", "registrations.json");
const accountsPath = path.join(process.cwd(), "src", "data", "accounts.json");

async function ensureFile(p: string) {
  try { await fs.access(p); } catch {
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, JSON.stringify([], null, 2), "utf-8");
  }
}

function normalizePhone(raw?: any) {
  if (!raw) return "";
  let s = String(raw).trim();
  s = s.replace(/[^\d+]/g, "");
  if (s.startsWith("+62")) return "0" + s.slice(3);
  if (s.startsWith("62")) return "0" + s.slice(2);
  return s;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawPhone = body?.phone ?? "";
    const password = String(body?.password ?? "");

    if (!rawPhone || !password) {
      return NextResponse.json({ ok: false, message: "Missing phone or password" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);

    // ensure files exist
    await ensureFile(registrationsPath);
    await ensureFile(accountsPath);

    // read both files
    const regRaw = await fs.readFile(registrationsPath, "utf-8");
    const regs = JSON.parse(regRaw) as any[];

    const accRaw = await fs.readFile(accountsPath, "utf-8");
    const accounts = JSON.parse(accRaw) as any[];

    // find registration by phone (if any)
    const reg = regs.find(r => normalizePhone(r.phone) === phone);

    // find account by phone (if any)
    const account = accounts.find(a => normalizePhone(a.phone) === phone);

    // If an account exists but the corresponding registration is present and not approved,
    // block login and instruct client to go to status page.
    if (account && reg && reg.status && reg.status !== "approved") {
      const redirectUrl = `/akun/registrasi/status?phone=${encodeURIComponent(reg.phone)}`;
      return NextResponse.json(
        { ok: false, status: reg.status, message: "Registration not approved", redirectTo: redirectUrl },
        { status: 200 }
      );
    }

    // If account exists (and no blocking registration), authenticate using accounts.json
    if (account) {
      const hash = account.passwordHash;
      if (!hash) return NextResponse.json({ ok: false, message: "Password not set" }, { status: 401 });

      const match = await bcrypt.compare(password, hash);
      if (!match) {
        return NextResponse.json({ ok: false, message: "Invalid credentials", code: "INVALID_PASSWORD" }, { status: 401 });
      }

      return NextResponse.json({ ok: true, message: "Login success", redirectTo: "/dashboard" });
    }

    // If no account, but registered -> handle registrations branch
    if (reg && reg.status && reg.status !== "approved") {
      // registered but not approved -> instruct client to status page
      const redirectUrl = `/akun/registrasi/status?phone=${encodeURIComponent(reg.phone)}`;
      return NextResponse.json(
        { ok: false, status: reg.status, message: "Registration not approved", redirectTo: redirectUrl },
        { status: 200 }
      );
    }

    // If no registration at all -> user not found
    if (!reg) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
    }

    // reg exists and should be approved here -> validate password
    const regHash = reg.passwordHash;
    if (!regHash) return NextResponse.json({ ok: false, message: "Password not set" }, { status: 401 });

    const matchReg = await bcrypt.compare(password, regHash);
    if (!matchReg) {
      return NextResponse.json({ ok: false, message: "Invalid credentials", code: "INVALID_PASSWORD" }, { status: 401 });
    }

    // optional: migrate to accounts.json to simplify next logins
    const existsInAccounts = accounts.find(a => normalizePhone(a.phone) === phone);
    if (!existsInAccounts) {
      const newAccount = {
        id: Date.now(),
        fullName: reg.fullName ?? null,
        phone: reg.phone,
        company: reg.company ?? null,
        companyDate: reg.companyDate ?? null,
        branchId: reg.branchId ?? null,
        ownerDob: reg.ownerDob ?? null,
        gender: reg.gender ?? null,
        passwordHash: regHash,
        createdAt: new Date().toISOString(),
        role: "user",
        active: true
      };
      accounts.push(newAccount);
      await fs.writeFile(accountsPath, JSON.stringify(accounts, null, 2), "utf-8");
    }

    return NextResponse.json({ ok: true, message: "Login success (from registrations)", redirectTo: "/dashboard" });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
