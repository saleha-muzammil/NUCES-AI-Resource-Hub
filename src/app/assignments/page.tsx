export default function Assignments() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-2 drop-shadow-lg">Assignments</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">Stay on top of your coursework! Assignment details and due dates will appear here.</p>
      </header>
      <main className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-8">
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Assignment 1: <span className="text-gray-500">Coming soon</span></li>
          <li>Assignment 2: <span className="text-gray-500">Coming soon</span></li>
        </ul>
      </main>
    </div>
  );
} 