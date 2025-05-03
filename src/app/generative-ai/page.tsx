"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRobot, FaExternalLinkAlt, FaLightbulb } from "react-icons/fa";

const triviaQuestions = [
  {
    question: "Which component of the transformer architecture allows it to process input sequences in parallel instead of sequentially?",
    options: [
      "A) Recurrent Units",
      "B) Self-attention mechanism",
      "C) Convolutional Layers",
      "D) Feed-forward layers",
    ],
    answer: 1,
    explanation: "Correct: B) Self-attention mechanism",
  },
  {
    question: "In a transformer model, the scaled dot-product attention mechanism computes the attention scores between queries, keys, and values. What is the purpose of scaling the dot product?",
    options: [
      "A) To normalize the attention scores",
      "B) To increase the attention computation speed",
      "C) To introduce regularization",
      "D) To prevent the gradients from vanishing",
    ],
    answer: 0,
    explanation: "Correct: A) To normalize the attention scores",
  },
  {
    question: "In the context of GPT-style autoregressive models, what does it mean for the model to generate text in a 'causal' manner?",
    options: [
      "A) The model generates words based on future context as well as past context",
      "B) The model generates each word by considering the entire sentence",
      "C) The model generates words one-by-one, considering only previous words",
      "D) The model generates entire paragraphs based on one prompt",
    ],
    answer: 2,
    explanation: "Correct: C) The model generates words one-by-one, considering only previous words",
  },
  {
    question: "When training a diffusion model, why is the process of adding noise to an image important?",
    options: [
      "A) It creates more training data from fewer examples",
      "B) It allows the model to learn how to gradually reconstruct the original image",
      "C) It speeds up the model's learning process",
      "D) It helps the model avoid overfitting",
    ],
    answer: 1,
    explanation: "Correct: B) It allows the model to learn how to gradually reconstruct the original image",
  },
  {
    question: "Which of the following techniques is commonly used to handle the large memory requirements of large generative models like GPT-3 during training?",
    options: [
      "A) Knowledge distillation",
      "B) Weight sharing",
      "C) Gradient checkpointing",
      "D) Quantization",
    ],
    answer: 2,
    explanation: "Correct: C) Gradient checkpointing",
  },
  {
    question: "In generative adversarial networks (GANs), what is the primary function of the discriminator?",
    options: [
      "A) To create synthetic data",
      "B) To assess the quality of the generator's output",
      "C) To filter noise in generated images",
      "D) To generate labels for training",
    ],
    answer: 1,
    explanation: "Correct: B) To assess the quality of the generator's output",
  },
  {
    question: "In the context of text-to-image models like DALL·E, what is a CLIP model primarily used for?",
    options: [
      "A) Generating images from scratch",
      "B) Aligning images with their textual descriptions",
      "C) Performing object detection in generated images",
      "D) Ranking different image generation methods",
    ],
    answer: 1,
    explanation: "Correct: B) Aligning images with their textual descriptions",
  },
  {
    question: "How do variational autoencoders (VAEs) and diffusion models differ in the way they generate new data?",
    options: [
      "A) VAEs use a learned distribution over data, while diffusion models use a denoising process to generate data",
      "B) VAEs work with text data, while diffusion models are only for images",
      "C) VAEs are autoregressive, while diffusion models use recurrent neural networks",
      "D) VAEs cannot handle noisy data, while diffusion models are optimized for noisy inputs",
    ],
    answer: 0,
    explanation: "Correct: A) VAEs use a learned distribution over data, while diffusion models use a denoising process to generate data",
  },
  {
    question: "What is the primary advantage of fine-tuning a pre-trained transformer model like GPT-3 on a specialized task or dataset?",
    options: [
      "A) It allows the model to generate longer text passages",
      "B) It helps the model retain general language capabilities while adapting to specific requirements",
      "C) It reduces the need for computational resources during inference",
      "D) It enables the model to work with multiple languages at once",
    ],
    answer: 1,
    explanation: "Correct: B) It helps the model retain general language capabilities while adapting to specific requirements",
  },
  {
    question: "In the context of AI-driven art, what is the role of the latent space in a Generative Adversarial Network (GAN) or a variational autoencoder (VAE)?",
    options: [
      "A) It contains the noise from which the generator learns to create images",
      "B) It stores high-level features and semantic information used by the discriminator",
      "C) It serves as a space for random initialization of weights in the model",
      "D) It is where the model learns the final pixel-level output",
    ],
    answer: 1,
    explanation: "Correct: B) It stores high-level features and semantic information used by the discriminator",
  },
];

function Trivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = () => {
    setShowAnswer(true);
  };
  const handleNext = () => {
    setCurrent((prev) => prev + 1);
    setSelected(null);
    setShowAnswer(false);
  };
  if (current >= triviaQuestions.length) {
    return (
      <div className="p-6 bg-green-900 rounded-lg text-green-100 text-center">
        <FaLightbulb className="inline text-2xl mb-2 text-yellow-400" />
        <div className="text-lg font-semibold mb-2">You've completed the Generative AI Trivia!</div>
        <div className="text-green-200">Want to learn more? Explore the resources and articles linked above.</div>
      </div>
    );
  }
  const q = triviaQuestions[current];
  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-md">
      <div className="text-lg font-bold text-fuchsia-300 mb-2">Trivia Question {current + 1}</div>
      <div className="text-gray-100 mb-4">{q.question}</div>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={`block w-full text-left px-4 py-2 rounded border transition-colors duration-150 ${selected === i ? 'bg-fuchsia-900 border-fuchsia-400 text-fuchsia-100' : 'bg-gray-800 border-gray-700 text-gray-100'} hover:bg-fuchsia-950`}
            onClick={() => setSelected(i)}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
      {!showAnswer && (
        <button
          className="mt-2 px-6 py-2 bg-fuchsia-700 text-white rounded shadow hover:bg-fuchsia-800 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Submit
        </button>
      )}
      {showAnswer && (
        <div className="mt-4">
          <div className={`font-semibold ${selected === q.answer ? 'text-green-300' : 'text-red-400'}`}>{q.explanation}</div>
          <button
            className="mt-4 px-6 py-2 bg-fuchsia-700 text-white rounded shadow hover:bg-fuchsia-800"
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default function GenerativeAI() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-fuchsia-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-fuchsia-200 flex items-center gap-2"><FaRobot className="text-fuchsia-400" /> Generative AI</h1>
          <p className="mt-2 text-lg text-gray-200 max-w-2xl">
            Generative AI refers to artificial intelligence models that can create new content—like writing, images, music, video, or code—rather than just analyzing existing data.<br /><br />
            These systems are trained on huge datasets and learn patterns well enough to produce original (but statistically learned) outputs. You give them a prompt (like "Write a story about a robot dog"), and they generate a coherent, creative response.
          </p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 flex items-center gap-2">
            <FaExternalLinkAlt className="text-fuchsia-400" />
            Learn More: <a href="https://jalammar.github.io/illustrated-gpt2/" target="_blank" rel="noopener noreferrer" className="ml-2 underline text-fuchsia-300 hover:text-fuchsia-100">The Illustrated GPT-2 (Jay Alammar)</a>
          </h2>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Core Concepts</h2>
          <div className="mb-6 text-gray-200">
            <h3 className="text-xl font-semibold mb-2">Transformers</h3>
            <p className="mb-2">
              Transformers are the foundation of most modern generative AI models, including GPT. They were introduced in 2017 in the groundbreaking paper <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer" className="underline text-fuchsia-300 hover:text-fuchsia-100">"Attention is All You Need"</a>. Unlike earlier neural networks that processed information sequentially (one word at a time), transformers use a mechanism called <b>self-attention</b> to look at all words in a sentence simultaneously. This allows them to understand context more deeply—for example, distinguishing between "bank" as a financial institution vs. the side of a river.
            </p>
            <p className="mb-2">
              Transformers are trained to predict the next word in a sentence, given all the previous ones. When scaled up and trained on massive datasets, they can generate paragraphs of text, write code, answer questions, or summarize articles—all by learning statistical patterns in language.
            </p>
            <p>
              For a visual, intuitive explanation, see <a href="https://jalammar.github.io/illustrated-gpt2/" target="_blank" rel="noopener noreferrer" className="underline text-fuchsia-300 hover:text-fuchsia-100">The Illustrated GPT-2</a> by Jay Alammar.
            </p>
          </div>
          <div className="mb-6 text-gray-200">
            <h3 className="text-xl font-semibold mb-2">Diffusion Models</h3>
            <p>
              Diffusion models are behind many image and video generation tools (like DALL·E 2 and Stable Diffusion). These models start with a completely noisy image—like TV static—and gradually remove the noise in a step-by-step process to reveal a clean, realistic image that matches a given text prompt (e.g., "a red panda riding a skateboard").
            </p>
            <p>
              They're trained to do the opposite of adding noise: to recover the original image. During training, the model sees many images gradually noised, learns how to reverse that process, and finally can generate images from scratch by starting with noise.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fuchsia-200 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-yellow-400" /> Test Your Knowledge: Generative AI Trivia
          </h2>
          <Trivia />
        </section>
      </main>
    </div>
  );
} 