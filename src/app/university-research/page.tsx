import React from "react";
import Link from "next/link";
import { FaUniversity, FaUserGraduate, FaFlask, FaCalendarAlt } from "react-icons/fa";

export default function UniversityResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-purple-800">NUCES Research in AI</h1>
          <p className="mt-2 text-lg text-gray-600">Explore research opportunities within your university</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Research Labs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaUniversity className="text-blue-600" />
            Research Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI and Machine Learning Lab</h3>
              <p className="text-gray-600 mb-4">
                Focuses on developing novel machine learning algorithms and applications in various domains.
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold">Research Areas:</p>
                <ul className="list-disc list-inside">
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                  <li>Reinforcement Learning</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Robotics and Autonomous Systems Lab</h3>
              <p className="text-gray-600 mb-4">
                Research in robotics, autonomous systems, and human-robot interaction.
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold">Research Areas:</p>
                <ul className="list-disc list-inside">
                  <li>Robot Learning</li>
                  <li>Motion Planning</li>
                  <li>Human-Robot Collaboration</li>
                  <li>Autonomous Navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Members */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaUserGraduate className="text-purple-600" />
            Faculty Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Professor of Computer Science</p>
              <p className="text-gray-600 mb-4">
                Research focus: Deep Learning, Computer Vision, and Medical Image Analysis
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Michael Chen</h3>
              <p className="text-gray-600 mb-4">Associate Professor of AI</p>
              <p className="text-gray-600 mb-4">
                Research focus: Natural Language Processing and Machine Learning
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NLP</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ML</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-gray-600 mb-4">Assistant Professor of Robotics</p>
              <p className="text-gray-600 mb-4">
                Research focus: Robot Learning and Human-Robot Interaction
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Robotics</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">HRI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Programs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaFlask className="text-green-600" />
            Research Programs
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>Summer 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Undergraduate Research Program</h3>
              <p className="text-gray-600 mb-4">
                A 10-week intensive research program for undergraduate students interested in AI and machine learning.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Duration: June 1 - August 10, 2024</li>
                <li>• Stipend: $5000</li>
                <li>• Application Deadline: March 15, 2024</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Research</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Summer</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Undergraduate</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Learn More and Apply →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 