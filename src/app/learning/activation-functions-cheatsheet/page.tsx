import React from "react";
import Link from "next/link";

export default function ActivationFunctionsCheatsheet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/learning" className="text-blue-700 hover:text-blue-900 mb-4 inline-block transition-colors duration-200">
            ← Back to Learning Resources
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Activation Functions Cheatsheet</h1>
          <p className="mt-2 text-lg text-gray-600">Activation functions are essential in CNNs as they introduce non-linearity, enabling the network to learn complex feature relationships. Below are the popular activation functions used in CNNs, including their properties, advantages, and limitations.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          <div className="flex justify-center mb-8">
            <img src="/activation-functions.png" alt="Activation Functions" className="rounded-lg shadow max-w-full h-auto" />
          </div>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">ReLU (Rectified Linear Unit)</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Sets negative values to zero, keeps positive values unchanged.</li>
              <li>Promotes sparsity in activations, focusing on relevant features.</li>
              <li>Computationally efficient and facilitates fast convergence during training.</li>
              <li>Limitations: Can suffer from dead neurons and unbounded activations in deeper networks.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sigmoid</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Squashes activations between 0 and 1, suitable for binary classification tasks.</li>
              <li>Captures non-linearity within a limited range.</li>
              <li>Differentiable, enabling efficient backpropagation.</li>
              <li>Limitations: Susceptible to the vanishing gradient problem and may not be ideal for deep networks.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tanh</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Maps activations to the range -1 to 1, capturing non-linearity within a bounded output.</li>
              <li>Has a steeper gradient than sigmoid, useful for learning complex representations.</li>
              <li>Facilitates better gradient flow during backpropagation.</li>
              <li>Limitations: Also faces the vanishing gradient problem.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-700">
              Activation functions are crucial as they introduce non-linearity, enabling CNNs to model complex relationships and capture intricate patterns. Non-linearity allows CNNs to approximate complex functions and tackle tasks like image recognition and object detection. Understanding the properties and trade-offs of activation functions empowers informed choices in designing CNN architectures, leveraging their strengths to unlock the network's full expressive power.
            </p>
            <p className="text-gray-700 mt-2">
              By selecting appropriate activation functions, CNNs can learn rich representations and effectively handle challenging tasks, enhancing their overall performance and capabilities.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 