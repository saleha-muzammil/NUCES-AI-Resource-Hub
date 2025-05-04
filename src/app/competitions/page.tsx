"use client";

import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Competitions() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100">AI Competitions & Hackathons</h1>
          <p className="mt-2 text-lg text-gray-300">Discover and participate in exciting AI challenges and competitions</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Major Competitions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Major AI Competitions</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-300 mb-2">NeurIPS Competitions</h4>
                <p className="text-gray-300 mb-2">Prestigious AI competitions held at the NeurIPS conference, featuring cutting-edge challenges in machine learning and AI.</p>
                <a href="https://neurips.cc/Conferences/2025/CallForCompetitions" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white flex items-center gap-2">
                  View Competitions <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="bg-gray-900 border-l-4 border-purple-500 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Kaggle Competitions</h4>
                <p className="text-gray-300 mb-2">The largest data science and machine learning platform with regular competitions on real-world problems.</p>
                <a href="https://www.kaggle.com/competitions" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white flex items-center gap-2">
                  Explore Competitions <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="bg-gray-900 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="font-semibold text-green-300 mb-2">DrivenData Competitions</h4>
                <p className="text-gray-300 mb-2">Social impact focused competitions that tackle real-world problems using data science and AI.</p>
                <a href="https://www.drivendata.org/competitions/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white flex items-center gap-2">
                  View Challenges <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Hackathons and Other Competitions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Hackathons & Specialized Competitions</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 border-l-4 border-orange-500 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-300 mb-2">Microsoft Imagine Cup</h4>
                <p className="text-gray-300 mb-2">Global student technology competition focusing on AI, machine learning, and mixed reality solutions.</p>
                <a href="https://imaginecup.microsoft.com/en-us" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-white flex items-center gap-2">
                  Learn More <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="bg-gray-900 border-l-4 border-pink-500 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-300 mb-2">AI Song Contest</h4>
                <p className="text-gray-300 mb-2">Unique competition for music enthusiasts to create songs using AI technologies.</p>
                <a href="https://www.aisongcontest.com/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white flex items-center gap-2">
                  View Details <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="bg-gray-900 border-l-4 border-indigo-500 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-300 mb-2">Citadel Datathon</h4>
                <p className="text-gray-300 mb-2">Prestigious data science competition hosted by Citadel, focusing on real-world financial and quantitative challenges.</p>
                <a href="https://www.citadel.com/careers/programs-and-events/datathons/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white flex items-center gap-2">
                  Learn More <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="bg-gray-900 border-l-4 border-teal-500 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-300 mb-2">International Olympiad in AI</h4>
                <p className="text-gray-300 mb-2">Global competition for high school students to showcase their AI and machine learning skills.</p>
                <a href="https://ioai-official.org/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white flex items-center gap-2">
                  Visit Website <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <FaTrophy className="text-2xl text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-100">Start Small</h3>
              </div>
              <p className="text-gray-300">Begin with Kaggle competitions to build your portfolio and gain experience with real-world datasets.</p>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-2xl text-blue-300" />
                <h3 className="text-lg font-semibold text-gray-100">Team Up</h3>
              </div>
              <p className="text-gray-300">Join team competitions to learn from others, share knowledge, and tackle more complex challenges together.</p>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-2xl text-green-300" />
                <h3 className="text-lg font-semibold text-gray-100">Learn from Winners</h3>
              </div>
              <p className="text-gray-300">Study previous winner solutions to understand best practices and innovative approaches to problem-solving.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 