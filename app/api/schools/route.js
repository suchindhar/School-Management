// app/api/schools/route.js
import { NextResponse } from "next/server";

let dummySchools = [
  {
    id: 1,
    name: "Green Valley School",
    address: "123 Main Street",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "9876543210",
    image: null,
    email: "contact@gvs.com",
  },
  {
    id: 2,
    name: "Sunrise Public School",
    address: "456 Park Avenue",
    city: "Bangalore",
    state: "Karnataka",
    contact: "9123456789",
    image: null,
    email: "info@sunrise.edu",
  },
];

// GET (list schools - always works)
export async function GET() {
  return NextResponse.json(dummySchools, { status: 200 });
}

// POST (just pushes to dummy array)
export async function POST(request) {
  const body = await request.json();
  const newSchool = { id: Date.now(), ...body };
  dummySchools.push(newSchool);
  return NextResponse.json({ message: "School added", school: newSchool }, { status: 201 });
}

// PUT (update dummy)
export async function PUT(request) {
  const body = await request.json();
  dummySchools = dummySchools.map((s) =>
    s.id === body.id ? { ...s, ...body } : s
  );
  return NextResponse.json({ message: "School updated" }, { status: 200 });
}

// DELETE (remove dummy)
export async function DELETE(request) {
  const body = await request.json();
  dummySchools = dummySchools.filter((s) => s.id !== body.id);
  return NextResponse.json({ message: "School deleted" }, { status: 200 });
}
