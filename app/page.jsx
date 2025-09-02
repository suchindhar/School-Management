import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          School Management Made Easy
        </h1>
        <p className="text-xl opacity-90 mb-8">
          Manage your schools seamlessly with our platform
        </p>

        <div className="flex space-x-6">
          <Link href="/addSchool">
            <button className="px-6 py-3 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transition relative overflow-hidden group">
              <span className="relative z-10">Add New School</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
            </button>
          </Link>

          <Link href="/showSchools">
            <button className="px-6 py-3 text-lg font-semibold border-2 border-white rounded-lg shadow-lg transition relative overflow-hidden group">
              <span className="relative z-10">View Schools</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">⚡ Lightning Fast</h3>
            <p className="opacity-80">
              Manage and update school records instantly with smooth performance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">🎨 Easy to Use</h3>
            <p className="opacity-80">
              Clean, modern, and responsive interface designed for all devices.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p className="opacity-80">
              Your school data is safe with top-notch security integration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
