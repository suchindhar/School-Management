import { NextResponse } from "next/server";
import { connect } from "@/lib/db";

// ------------------ ADD ------------------
export async function POST(request) {
  let connection;
  try {
    connection = await connect();
    const body = await request.json();
    const { name, address, city, state, contact, image, email_id } = body;

    const query = `
      INSERT INTO schools (name, address, city, state, contact, image, email_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, address, city, state, contact, image || null, email_id];

    const [result] = await connection.execute(query, values);
    return NextResponse.json({ message: "School added", id: result.insertId }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

// ------------------ GET ------------------
export async function GET() {
  let connection;
  try {
    connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM schools ORDER BY id DESC");
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

// ------------------ PUT ------------------
export async function PUT(request) {
  let connection;
  try {
    connection = await connect();
    const body = await request.json();
    const { id, name, address, city, state, contact, image, email_id } = body;

    const query = `
      UPDATE schools 
      SET name=?, address=?, city=?, state=?, contact=?, image=?, email_id=?
      WHERE id=?
    `;
    const values = [name, address, city, state, contact, image || null, email_id, id];

    const [result] = await connection.execute(query, values);
    return NextResponse.json({ message: "School updated", affected: result.affectedRows });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
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

    const query = `DELETE FROM schools WHERE id=?`;
    const [result] = await connection.execute(query, [id]);
    return NextResponse.json({ message: "School deleted", affected: result.affectedRows });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
