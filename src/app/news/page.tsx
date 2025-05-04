import React from "react";
import Link from "next/link";
import { FaNewspaper, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-purple-800">AI News & Research</h1>
          <p className="mt-2 text-lg text-gray-600">Stay updated with the latest developments, research papers, and events in AI.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Latest News */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaNewspaper className="text-blue-600" />
            Latest News
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>March 15, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Breakthrough in Multimodal AI Models
              </h3>
              <p className="text-gray-600 mb-4">
                Researchers have developed a new approach to training AI models that can understand and generate both text and images simultaneously, achieving state-of-the-art results in several benchmarks.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                Read More <FaExternalLinkAlt />
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>March 10, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                New Framework for Ethical AI Development
              </h3>
              <p className="text-gray-600 mb-4">
                A consortium of leading AI researchers has released a comprehensive framework for developing ethical AI systems, addressing issues of bias, transparency, and accountability.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                Read More <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaNewspaper className="text-purple-600" />
            Recent Research Papers
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>March 12, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Efficient Training of Large Language Models
              </h3>
              <p className="text-gray-600 mb-4">
                This paper introduces a novel approach to training large language models that reduces computational costs by 40% while maintaining model performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NLP</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Efficiency</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Training</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                Read Paper <FaExternalLinkAlt />
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>March 8, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Advancements in Few-Shot Learning
              </h3>
              <p className="text-gray-600 mb-4">
                A new architecture for few-shot learning that achieves human-level performance on several benchmark tasks with minimal training examples.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ML</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Few-Shot</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Architecture</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                Read Paper <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </section>

        {/* Conferences and Events */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-green-600" />
            Upcoming Events
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3 min-w-[100px] text-center">
                  <div className="text-2xl font-bold text-blue-800">15</div>
                  <div className="text-sm text-blue-600">April</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">International Conference on Machine Learning (ICML)</h3>
                  <p className="text-gray-600">Vienna, Austria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3 min-w-[100px] text-center">
                  <div className="text-2xl font-bold text-purple-800">20</div>
                  <div className="text-sm text-purple-600">May</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Conference on Computer Vision and Pattern Recognition (CVPR)</h3>
                  <p className="text-gray-600">Seattle, USA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 