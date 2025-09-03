// app/api/schools/route.js
import { NextResponse } from "next/server";
import { connect } from "@/lib/db";

export const runtime = "nodejs";

// ------------------ ADD (POST) ------------------
export async function POST(request) {
  let connection;
  try {
    connection = await connect();
    const body = await request.json();
    const { name, address, city, state, contact, image, email } = body;

    const sql = `
      INSERT INTO schools (name, address, city, State, Contact, image, email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      name,
      address,
      city,
      state,
      contact,
      image || null,
      email,
    ];

    const [result] = await connection.execute(sql, params);
    return NextResponse.json(
      { message: "School added", id: result.insertId },
      { status: 201 }
    );
  } catch (err) {
    console.error("DB Error (POST):", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

// ------------------ LIST (GET) ------------------
export async function GET() {
  let connection;
  try {
    connection = await connect();
    const [rows] = await connection.execute(
      "SELECT * FROM schools ORDER BY id DESC"
    );
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    console.error("DB Error (GET):", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

// ------------------ UPDATE (PUT) ------------------
export async function PUT(request) {
  let connection;
  try {
    connection = await connect();
    const body = await request.json();
    const { id, name, address, city, state, contact, image, email } = body;

    const sql = `
      UPDATE schools
      SET name=?, address=?, city=?, State=?, Contact=?, image=?, email=?
      WHERE id=?
    `;
    const params = [
      name,
      address,
      city,
      state,
      contact,
      image || null,
      email,
      id,
    ];

    const [result] = await connection.execute(sql, params);
    return NextResponse.json(
      { message: "School updated", affected: result.affectedRows },
      { status: 200 }
    );
  } catch (err) {
    console.error("DB Error (PUT):", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

// ------------------ DELETE ------------------
export async function DELETE(request) {
  let connection;
  try {
    connection = await connect();
    const body = await request.json();
    const { id } = body;

    const [result] = await connection.execute(
      "DELETE FROM schools WHERE id=?",
      [id]
    );
    return NextResponse.json(
      { message: "School deleted", affected: result.affectedRows },
      { status: 200 }
    );
  } catch (err) {
    console.error("DB Error (DELETE):", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}
