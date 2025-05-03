import React from "react";
import Link from "next/link";
import { FaRobot, FaBrain, FaLanguage, FaEye, FaBalanceScale, FaChartPie, FaExternalLinkAlt } from "react-icons/fa";

export default function Domains() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100">AI Domains</h1>
          <p className="mt-2 text-lg text-gray-300">Explore the diverse landscape of Artificial Intelligence</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Machine Learning */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaBrain className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">Machine Learning</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Algorithms that learn patterns from data to make predictions or decisions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Supervised Learning</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Unsupervised Learning</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Reinforcement Learning</span>
            </div>
          </div>

          {/* Natural Language Processing */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaLanguage className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">Natural Language Processing</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Understanding and generating human language through AI systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Text Generation</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Sentiment Analysis</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Translation</span>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaEye className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">Computer Vision</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Enabling computers to interpret and understand visual information.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Object Detection</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Image Classification</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Facial Recognition</span>
            </div>
          </div>

          {/* Robotics */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaRobot className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">Robotics</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Creating intelligent machines that can interact with the physical world.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Autonomous Systems</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Motion Planning</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Human-Robot Interaction</span>
            </div>
          </div>

          {/* AI Ethics */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaBalanceScale className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">AI Ethics</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Addressing the moral implications and responsible development of AI.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Bias & Fairness</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Privacy</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Transparency</span>
            </div>
          </div>

          {/* AI Applications */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-900 text-blue-300">
                <FaChartPie className="text-2xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">AI Applications</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Real-world implementations of AI across various industries.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">Healthcare</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Finance</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">Education</span>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Learning Resources</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Free Online Courses</h3>
                <div className="space-y-4">
                  <div className="bg-blue-950 border border-blue-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Deep Learning Specialization</h4>
                    <p className="text-gray-300 mb-2">Master the fundamentals of deep learning and break into AI</p>
                    <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white flex items-center gap-2">
                      Enroll Now <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                  <div className="bg-green-950 border border-green-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">Machine Learning</h4>
                    <p className="text-gray-300 mb-2">Learn the foundations of machine learning and AI</p>
                    <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white flex items-center gap-2">
                      Enroll Now <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                  <div className="bg-purple-950 border border-purple-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-300 mb-2">AI For Everyone</h4>
                    <p className="text-gray-300 mb-2">Perfect for beginners - understand AI without technical background</p>
                    <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white flex items-center gap-2">
                      Enroll Now <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                  <div className="bg-orange-950 border border-orange-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-300 mb-2">Reinforcement Learning Specialization</h4>
                    <p className="text-gray-300 mb-2">Master reinforcement learning and its applications</p>
                    <a href="https://www.coursera.org/specializations/reinforcement-learning" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-white flex items-center gap-2">
                      Enroll Now <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400 italic">* These courses are free for students when you mention in your application</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Recommended Books</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• "Deep Learning" by Ian Goodfellow</li>
                  <li>• "Pattern Recognition and Machine Learning" by Christopher Bishop</li>
                  <li>• "Artificial Intelligence: A Modern Approach" by Stuart Russell</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 