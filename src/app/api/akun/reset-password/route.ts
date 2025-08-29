// src/app/api/akun/reset-password/route.ts
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
    const newPassword = String(body?.newPassword ?? "");

    if (!rawPhone || !newPassword) {
      return NextResponse.json({ ok: false, message: "Missing phone or newPassword" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ ok: false, message: "Password minimal 6 karakter" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);

    // ensure data files exist
    await ensureFile(registrationsPath);
    await ensureFile(accountsPath);

    // read both files
    const [regsRaw, accsRaw] = await Promise.all([
      fs.readFile(registrationsPath, "utf-8"),
      fs.readFile(accountsPath, "utf-8"),
    ]);
    const regs = (regsRaw.length ? JSON.parse(regsRaw) : []) as any[];
    const accs = (accsRaw.length ? JSON.parse(accsRaw) : []) as any[];

    // find matches (use normalized comparison)
    const accIdx = accs.findIndex(a => normalizePhone(a.phone) === phone);
    const regIdx = regs.findIndex(r => normalizePhone(r.phone) === phone);

    if (accIdx === -1 && regIdx === -1) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
    }

    // hash new password
    const saltRounds = 10;
    const hashed = await bcrypt.hash(newPassword, saltRounds);

    let wroteAcc = false;
    let wroteReg = false;

    if (accIdx !== -1) {
      accs[accIdx].passwordHash = hashed;
      accs[accIdx].updatedAt = new Date().toISOString();
      wroteAcc = true;
    }

    if (regIdx !== -1) {
      regs[regIdx].passwordHash = hashed;
      regs[regIdx].updatedAt = new Date().toISOString();
      wroteReg = true;
    }

    // write back only those changed (do both to keep files consistent)
    const writes: Promise<void>[] = [];
    if (wroteAcc) writes.push(fs.writeFile(accountsPath, JSON.stringify(accs, null, 2), "utf-8"));
    if (wroteReg) writes.push(fs.writeFile(registrationsPath, JSON.stringify(regs, null, 2), "utf-8"));

    await Promise.all(writes);

    return NextResponse.json({ ok: true, message: "Password updated" });
  } catch (err) {
    console.error("RESET-PASSWORD ERROR:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
