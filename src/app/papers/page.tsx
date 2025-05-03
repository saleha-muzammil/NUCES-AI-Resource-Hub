"use client";

import React from "react";
import Link from "next/link";
import { FaBookOpen, FaExternalLinkAlt, FaLightbulb } from "react-icons/fa";

const papers = [
  {
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    authors: "Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton",
    year: 2012,
    description: "A landmark paper that introduced AlexNet, demonstrating the power of deep convolutional neural networks on the ImageNet dataset and sparking the deep learning revolution.",
    link: "https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
  },
  {
    title: "Attention is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, et al.",
    year: 2017,
    description: "Introduced the Transformer architecture, which relies entirely on attention mechanisms, revolutionizing NLP and enabling models like BERT and GPT.",
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "Playing Atari with Deep Reinforcement Learning",
    authors: "Volodymyr Mnih, Koray Kavukcuoglu, David Silver, et al.",
    year: 2013,
    description: "Demonstrated the use of deep Q-networks (DQN) to play Atari games directly from pixels, a milestone in deep reinforcement learning.",
    link: "https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"
  },
  {
    title: "Generative Adversarial Nets",
    authors: "Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, et al.",
    year: 2014,
    description: "Introduced GANs, a framework for training generative models via adversarial processes, leading to breakthroughs in image synthesis.",
    link: "https://arxiv.org/abs/1406.2661"
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    year: 2018,
    description: "Presented BERT, a transformer-based model pre-trained on large corpora, achieving state-of-the-art results on a wide range of NLP tasks.",
    link: "https://arxiv.org/abs/1810.04805"
  },
  {
    title: "Mastering the Game of Go with Deep Neural Networks and Tree Search",
    authors: "David Silver, Aja Huang, Chris J Maddison, et al.",
    year: 2016,
    description: "Describes AlphaGo, the first computer program to defeat a world champion in Go, combining deep neural networks and Monte Carlo tree search.",
    link: "https://www.nature.com/articles/nature16961"
  },
  {
    title: "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter",
    authors: "Victor Sanh, Lysandre Debut, Julien Chaumond, Thomas Wolf",
    year: 2019,
    description: "Introduced DistilBERT, a smaller and faster version of BERT, making transformer models more accessible for practical applications.",
    link: "https://arxiv.org/abs/1910.01108"
  },
  {
    title: "YOLOv1: You Only Look Once: Unified, Real-Time Object Detection",
    authors: "Joseph Redmon, Santosh Divvala, Ross Girshick, Ali Farhadi",
    year: 2016,
    description: "Proposed YOLO, a real-time object detection system that reframes detection as a single regression problem, enabling fast and accurate detection.",
    link: "https://arxiv.org/abs/1506.02640"
  }
];

const tips = [
  "Start by reading the abstract and conclusion to get the main idea.",
  "Skim the introduction and figures to understand the motivation and results.",
  "Focus on the methods and experiments sections for technical details.",
  "Don't get stuck on every equation—try to grasp the intuition first.",
  "Take notes and summarize each section in your own words.",
  "Look up unfamiliar terms or references as you go.",
  "Discuss the paper with peers or mentors to deepen your understanding."
];

export default function Papers() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100 flex items-center gap-2"><FaBookOpen className="text-blue-400" /> Important Papers in AI</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl">A curated collection of seminal papers that have shaped the field of artificial intelligence, machine learning, and deep learning.</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-12">
          <div className="grid grid-cols-1 gap-6">
            {papers.map((paper, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                  <h2 className="text-xl font-semibold text-blue-300">{paper.title}</h2>
                  <span className="text-sm text-gray-400">{paper.year}</span>
                </div>
                <div className="text-gray-300 text-sm mb-1">{paper.authors}</div>
                <div className="text-gray-200 mb-2">{paper.description}</div>
                {paper.link && (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline flex items-center gap-1 text-sm">
                    Read Paper <FaExternalLinkAlt className="inline text-xs" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> Tips for Reading Research Papers</h2>
          <div className="mb-6">
            <a
              href="https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 border border-blue-400 rounded-lg text-blue-200 hover:bg-blue-800 hover:text-white font-semibold shadow transition mb-4"
            >
              <FaExternalLinkAlt className="inline text-sm" />
              Read this insightful guide: <span className="underline">How to Read a Paper (Stanford)</span>
            </a>
            <p className="text-gray-300 text-sm mt-2">This article is highly recommended for students new to reading research papers. It provides a practical, step-by-step approach to understanding and analyzing academic work.</p>
          </div>
          <ul className="space-y-4">
            {tips.map((tip, i) => (
              <li key={i} className="bg-gray-900 border-l-4 border-blue-400 rounded-r-lg p-4 text-gray-200 flex gap-3 items-start">
                <FaLightbulb className="text-yellow-400 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
} 