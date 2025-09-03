import { NextResponse } from "next/server";
import { connect } from "@/lib/db";

// ✅ Helper: replace undefined with null
function safe(val) {
  return val === undefined ? null : val;
}

// =======================
// POST → Add new school
// =======================
export async function POST(req) {
  try {
    const { name, address, city, state, contact, email_id, image } =
      await req.json();

    console.log("POST /api/schools → data received:", {
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image,
    });

    const conn = await connect();

    const [result] = await conn.execute(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        safe(name),
        safe(address),
        safe(city),
        safe(state),
        safe(contact),
        safe(email_id),
        safe(image),
      ]
    );

    return NextResponse.json(
      { message: "School added successfully", id: result.insertId },
      { status: 201 }
    );
  } catch (err) {
    console.error("DB Error (POST):", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// =======================
// GET → Fetch all schools
// =======================
export async function GET() {
  try {
    const conn = await connect();
    const [rows] = await conn.execute("SELECT * FROM schools");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB Error (GET):", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// =======================
// PUT → Update school
// =======================
export async function PUT(req) {
  try {
    const { id, name, address, city, state, contact, email_id, image } =
      await req.json();

    console.log("PUT /api/schools → data received:", {
      id,
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image,
    });

    if (!id) {
      return NextResponse.json({ error: "Missing school id" }, { status: 400 });
    }

    const conn = await connect();

    await conn.execute(
      "UPDATE schools SET name=?, address=?, city=?, state=?, contact=?, email_id=?, image=? WHERE id=?",
      [
        safe(name),
        safe(address),
        safe(city),
        safe(state),
        safe(contact),
        safe(email_id),
        safe(image),
        id,
      ]
    );

    return NextResponse.json({ message: "School updated successfully" });
  } catch (err) {
    console.error("DB Error (PUT):", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// =======================
// DELETE → Remove school
// =======================
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    console.log("DELETE /api/schools → id received:", id);

    if (!id) {
      return NextResponse.json({ error: "Missing school id" }, { status: 400 });
    }

    const conn = await connect();

    await conn.execute("DELETE FROM schools WHERE id=?", [id]);

    return NextResponse.json({ message: "School deleted successfully" });
  } catch (err) {
    console.error("DB Error (DELETE):", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
