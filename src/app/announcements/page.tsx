export default function Announcements() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2 drop-shadow-lg">Announcements</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">Stay updated with the latest news and important class announcements.</p>
      </header>
      <main className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-8">
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>No announcements yet. Check back soon!</li>
        </ul>
      </main>
    </div>
  );
} 