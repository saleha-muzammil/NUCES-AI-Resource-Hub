"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaBook, FaCode, FaBrain, FaChartLine, FaSearch, FaLightbulb } from "react-icons/fa";

const aiTrivia = [
  {
    question: "What is the main goal of supervised learning?",
    options: [
      "A) To find hidden patterns in unlabeled data",
      "B) To generate new data from noise",
      "C) To learn a mapping from inputs to known outputs",
      "D) To cluster data into groups without labels",
    ],
    answer: 2,
    explanation: "Correct: C) To learn a mapping from inputs to known outputs",
  },
  {
    question: "Which activation function is commonly used in deep neural networks for its simplicity and effectiveness?",
    options: [
      "A) Sigmoid",
      "B) Tanh",
      "C) ReLU",
      "D) Softmax",
    ],
    answer: 2,
    explanation: "Correct: C) ReLU (Rectified Linear Unit)",
  },
  {
    question: "What does 'overfitting' mean in machine learning?",
    options: [
      "A) The model performs well on new, unseen data",
      "B) The model memorizes the training data and fails to generalize",
      "C) The model is too simple to capture the data's complexity",
      "D) The model uses too few features",
    ],
    answer: 1,
    explanation: "Correct: B) The model memorizes the training data and fails to generalize",
  },
  {
    question: "Which algorithm is commonly used for clustering?",
    options: [
      "A) K-Means",
      "B) Linear Regression",
      "C) Decision Tree",
      "D) Logistic Regression",
    ],
    answer: 0,
    explanation: "Correct: A) K-Means",
  },
  {
    question: "What is the purpose of a loss function in training neural networks?",
    options: [
      "A) To initialize weights",
      "B) To measure the difference between predictions and true values",
      "C) To increase model complexity",
      "D) To select the optimizer",
    ],
    answer: 1,
    explanation: "Correct: B) To measure the difference between predictions and true values",
  },
];

function LearningTrivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = () => setShowAnswer(true);
  const handleNext = () => {
    setCurrent((prev) => prev + 1);
    setSelected(null);
    setShowAnswer(false);
  };
  if (current >= aiTrivia.length) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900 rounded-lg text-gray-900 dark:text-green-100 text-center">
        <FaLightbulb className="inline text-2xl mb-2 text-yellow-500" />
        <div className="text-lg font-semibold mb-2">You've completed the AI/ML Trivia!</div>
        <div className="text-gray-700 dark:text-green-200">Keep exploring the resources above to deepen your knowledge.</div>
      </div>
    );
  }
  const q = aiTrivia[current];
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-lg font-bold text-blue-700 dark:text-yellow-300 mb-2">Trivia Question {current + 1}</div>
      <div className="text-gray-900 dark:text-gray-100 mb-4">{q.question}</div>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={`block w-full text-left px-4 py-2 rounded border transition-colors duration-150 ${selected === i ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-900 dark:text-blue-100' : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100'} hover:bg-blue-50 dark:hover:bg-blue-800`}
            onClick={() => setSelected(i)}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
      {!showAnswer && (
        <button
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Submit
        </button>
      )}
      {showAnswer && (
        <div className="mt-4">
          <div className={`font-semibold ${selected === q.answer ? 'text-green-700 dark:text-green-300' : 'text-red-600 dark:text-red-400'}`}>{q.explanation}</div>
          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default function Learning() {
  const [searchQuery, setSearchQuery] = useState("");

  const cheatsheets = [
    {
      title: "Convolutional Neural Networks",
      description: "Comprehensive guide to CNN architectures, layers, and applications",
      link: "/learning/cnn-cheatsheet",
      icon: <FaBrain className="text-blue-600 dark:text-blue-300" />,
      tags: ["CNN", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Deep Learning",
      description: "Fundamentals of deep learning, architectures, and best practices",
      link: "/learning/deep-learning-cheatsheet",
      icon: <FaBrain className="text-purple-600 dark:text-purple-300" />,
      tags: ["Deep Learning", "Neural Networks", "AI"]
    },
    {
      title: "Recurrent Neural Networks",
      description: "Guide to RNN architectures, LSTM, GRU, and sequence modeling",
      link: "/learning/rnn-cheatsheet",
      icon: <FaChartLine className="text-green-600 dark:text-green-300" />,
      tags: ["RNN", "LSTM", "Sequence Modeling"]
    },
    {
      title: "Activation Functions",
      description: "Key activation functions used in neural networks, including ReLU, Sigmoid, and Tanh",
      link: "/learning/activation-functions-cheatsheet",
      icon: <FaChartLine className="text-orange-500 dark:text-orange-300" />,
      tags: ["Activation", "ReLU", "Sigmoid", "Tanh", "Non-linearity"]
    }
  ];

  const filteredCheatsheets = cheatsheets.filter(sheet => 
    sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sheet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sheet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-200">Learning Resources</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Cheatsheets, tutorials, and interactive resources for neural networks, ML algorithms, and more.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <FaBook className="text-blue-600 dark:text-blue-300" /> Cheatsheets & Guides
            </h2>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 shadow-sm">
              <FaSearch className="text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredCheatsheets.map((sheet, i) => (
              <Link href={sheet.link} key={i} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2">
                    {sheet.icon}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300">{sheet.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{sheet.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sheet.tags.map((tag, j) => (
                      <span key={j} className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <span className="mt-2 text-sm text-blue-600 dark:text-blue-300 flex items-center gap-1">Explore <FaChevronRight className="inline" /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-yellow-300 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Test Your Knowledge: AI/ML Trivia
          </h2>
          <LearningTrivia />
        </section>
      </main>
    </div>
  );
} 