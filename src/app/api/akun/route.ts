// src/app/api/akun/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import bcrypt from "bcryptjs";

const dataFilePath = path.join(process.cwd(), "src", "data", "registrations.json");

async function ensureDataFile() {
  try {
    await fs.access(dataFilePath);
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function GET(request: Request) {
  await ensureDataFile();
  try {
    const url = new URL(request.url);
    const number = url.searchParams.get("number");
    const file = await fs.readFile(dataFilePath, "utf-8");
    const regs = JSON.parse(file) as any[];

    if (!number) {
      // return all (be careful in production)
      const safeAll = regs.map(r => {
        const s = { ...r };
        delete s.passwordHash;
        return s;
      });
      return NextResponse.json({ data: safeAll });
    }

    const reg = regs.find(r => r.phone === number);
    if (!reg) return NextResponse.json({ exists: false });

    const safe = { ...reg };
    delete safe.passwordHash;
    return NextResponse.json({ exists: true, data: safe });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to read registrations" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await ensureDataFile();
  try {
    const body = await request.json();
    if (!body.fullName || !body.phone || !body.password) {
      return NextResponse.json({ error: "fullName, phone, and password are required" }, { status: 400 });
    }

    const file = await fs.readFile(dataFilePath, "utf-8");
    const regs = JSON.parse(file) as any[];

    if (regs.some(r => r.phone === body.phone)) {
      return NextResponse.json({ error: "Nomor sudah terdaftar" }, { status: 409 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    const newReg = {
      id: Date.now(),
      fullName: body.fullName,
      phone: body.phone,
      company: body.company ?? null,
      companyDate: body.companyDate ?? null,
      branchId: body.branchId ?? null,
      ownerDob: body.ownerDob ?? null,
      gender: body.gender ?? null,
      passwordHash: hashedPassword,
      status: "pending",
      adminMessage: null,
      createdAt: new Date().toISOString(),
    };

    regs.push(newReg);
    await fs.writeFile(dataFilePath, JSON.stringify(regs, null, 2), "utf-8");

    const safe = { ...newReg };
    delete safe.passwordHash;
    return NextResponse.json({ success: true, data: safe }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
