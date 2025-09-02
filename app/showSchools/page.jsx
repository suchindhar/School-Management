"use client";

import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  async function fetchSchools() {
    const res = await fetch("/api/schools");
    const data = await res.json();
    setSchools(data);
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this school?")) return;
    await fetch("/api/schools", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchSchools(); // refresh list
  }

  async function handleEdit(school) {
    const newName = prompt("Enter new school name:", school.name);
    if (!newName) return;
    await fetch("/api/schools", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...school, name: newName }),
    });
    fetchSchools(); // refresh list
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-10">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Schools List
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {school.image && (
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {school.name}
              </h2>
              <p className="text-gray-600">{school.address}</p>
              <p className="text-gray-600">
                {school.city}, {school.state}
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                📞 {school.contact}
              </p>
              <p className="text-gray-800">✉️ {school.email_id}</p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(school)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(school.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
