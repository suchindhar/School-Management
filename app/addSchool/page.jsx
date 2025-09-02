"use client";

import { useState, useRef } from "react";
import {
  FaSchool,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaImage,
} from "react-icons/fa";
import { MdLocationCity, MdAccountBalance } from "react-icons/md";

export default function AddSchool() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    const res = await fetch("/api/schools", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 flex items-center justify-center gap-3">
          <FaSchool className="text-indigo-300" /> Add School
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          {/* School Name */}
          <div>
            <label className="flex items-center gap-2 font-semibold">
              <FaSchool className="text-indigo-300" /> School Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter the school name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 font-semibold">
              <FaMapMarkerAlt className="text-pink-400" /> Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter the full address"
              value={form.address}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none placeholder-gray-400"
              required
            />
          </div>

          {/* City + State */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-semibold">
                <MdLocationCity className="text-green-400" /> City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={form.city}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-semibold">
                <MdAccountBalance className="text-yellow-400" /> State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={form.state}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Contact + Email */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-semibold">
                <FaPhoneAlt className="text-blue-400" /> Contact Number
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Enter contact number"
                value={form.contact}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-semibold">
                <FaEnvelope className="text-red-400" /> Email ID
              </label>
              <input
                type="email"
                name="email_id"
                placeholder="Enter email address"
                value={form.email_id}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="flex items-center gap-2 font-semibold">
              <FaImage className="text-purple-300" /> School Image
            </label>

            {/* Hidden input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Custom Upload Button */}
            <button
              type="button"
              onClick={handleUploadClick}
              className="mt-3 px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-md transition"
            >
              Upload Image
            </button>

            {/* Preview */}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full h-48 object-cover rounded-lg border border-white/30 shadow-md"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-lg font-semibold hover:scale-105 transform transition duration-300"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
}
