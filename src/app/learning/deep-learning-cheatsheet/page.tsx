import React from "react";
import Link from "next/link";

export default function DeepLearningCheatsheet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/learning" className="text-blue-700 hover:text-blue-900 mb-4 inline-block transition-colors duration-200">
            ← Back to Learning Resources
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Deep Learning Cheatsheet</h1>
          <p className="mt-2 text-lg text-gray-600">A comprehensive guide to Deep Learning fundamentals and architectures</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="w-full h-[80vh]">
            <object
              data="/cheatsheet-deep-learning-tips-tricks.pdf"
              type="application/pdf"
              className="w-full h-full rounded-lg border border-gray-200"
            >
              <p className="text-center text-gray-600">
                Unable to display PDF file. 
                <a 
                  href="/cheatsheet-deep-learning-tips-tricks.pdf" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a> instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  );
} 