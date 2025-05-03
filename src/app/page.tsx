"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGraduationCap, FaCode, FaChartLine, FaRobot, FaBrain, FaBalanceScale, FaTrophy } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      )}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10 flex items-center justify-between px-4">
        <div className="max-w-7xl mx-auto py-6">
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-200">NUCES AI Hub</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Your comprehensive guide to AI education and opportunities</p>
        </div>
        <ThemeToggle />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Research Opportunities Section */}
          <Link href="/opportunities" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-3xl text-blue-400 group-hover:text-blue-300" />
                <h2 className="text-xl font-semibold text-gray-100">Research & Internship Opportunities</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Discover research opportunities, internships, and industry collaborations for undergraduate students.
              </p>
            </div>
          </Link>

          {/* AI Domains Section */}
          <Link href="/domains" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaBrain className="text-3xl text-pink-400 group-hover:text-pink-300" />
                <h2 className="text-xl font-semibold text-gray-100">AI Domains</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Comprehensive coverage of AI domains including ML, CV, NLP, Ethics, and more.
              </p>
            </div>
          </Link>

          {/* Learning Resources Section */}
          <Link href="/learning" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaCode className="text-3xl text-green-400 group-hover:text-green-300" />
                <h2 className="text-xl font-semibold text-gray-100">Learning Resources</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Cheatsheets, tutorials, and resources for neural networks, ML algorithms, and more.
              </p>
            </div>
          </Link>

          {/* Generative AI Section */}
          <Link href="/generative-ai" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaRobot className="text-3xl text-fuchsia-400 group-hover:text-fuchsia-300" />
                <h2 className="text-xl font-semibold text-gray-100">Generative AI</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Explore how AI models like GPT and diffusion models create text, images, music, and more. Dive into the core concepts and test your knowledge with interactive trivia!
              </p>
            </div>
          </Link>

          {/* Important Papers Section */}
          <Link href="/papers" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaChartLine className="text-3xl text-indigo-400 group-hover:text-indigo-300" />
                <h2 className="text-xl font-semibold text-gray-100">Important Papers</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Curated collection of seminal papers and important research in various AI domains.
              </p>
            </div>
          </Link>

          {/* AI Index Report 2025 Section */}
          <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaChartLine className="text-3xl text-blue-300 group-hover:text-blue-200" />
                <h2 className="text-xl font-semibold text-gray-100">AI Index Report 2025</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Explore the latest trends, data, and insights in artificial intelligence from Stanford HAI comprehensive 2025 AI Index Report.
              </p>
            </div>
          </a>

          {/* Join AI Communities Widget */}
          <Link href="/communities" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaRobot className="text-3xl text-orange-400 group-hover:text-orange-300" />
                <h2 className="text-xl font-semibold text-gray-100">Join AI Communities</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Discover and connect with top AI, ML, and AI Ethics communities around the world.
              </p>
            </div>
          </Link>

          {/* AI Ethics Widget */}
          <Link href="/ai-ethics" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaBalanceScale className="text-3xl text-red-400 group-hover:text-red-300" />
                <h2 className="text-xl font-semibold text-gray-100">AI Ethics</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Explore ethical dilemmas in AI with interactive scenarios on privacy, transparency, and human control.
              </p>
            </div>
          </Link>

          {/* AI Competitions Widget */}
          <Link href="/competitions" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FaTrophy className="text-3xl text-yellow-400 group-hover:text-yellow-300" />
                <h2 className="text-xl font-semibold text-gray-100">AI Competitions</h2>
              </div>
              <p className="mt-4 text-gray-300">
                Discover and participate in prestigious AI competitions, hackathons, and challenges from around the world.
              </p>
            </div>
          </Link>
        </div>

      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Resource Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
