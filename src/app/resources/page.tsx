export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 drop-shadow-lg">AI Resources</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">Curated links, tutorials, datasets, and tools to help you master AI. More coming soon!</p>
      </header>
      <main className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-8">
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Resource 1: <a href="#" className="text-blue-600 underline">Coming soon</a></li>
          <li>Resource 2: <a href="#" className="text-blue-600 underline">Coming soon</a></li>
        </ul>
      </main>
    </div>
  );
} 