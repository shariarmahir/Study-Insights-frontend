import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.fullName || !body.email || !body.phone) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: persist to database once storage is provisioned.
  return NextResponse.json({ ok: true }, { status: 201 });
}
