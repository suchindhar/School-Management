let schools = []; // temporary storage

export async function GET() {
  return Response.json(schools);
}

export async function POST(req) {
  const data = await req.json();
  const newSchool = { id: Date.now(), ...data };
  schools.push(newSchool);
  return Response.json({ message: "School added", school: newSchool });
}

export async function PUT(req) {
  const data = await req.json();
  schools = schools.map((s) => (s.id === data.id ? { ...s, ...data } : s));
  return Response.json({ message: "School updated" });
}

export async function DELETE(req) {
  const { id } = await req.json();
  schools = schools.filter((s) => s.id !== id);
  return Response.json({ message: "School deleted" });
}
