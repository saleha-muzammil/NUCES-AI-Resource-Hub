"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaUniversity, FaIndustry, FaGlobe, FaBookOpen, FaLightbulb } from "react-icons/fa";

const conferences = [
  {
    name: "NeurIPS (Conference on Neural Information Processing Systems)",
    url: "https://nips.cc/",
    focus: "ML, AI theory, applications",
    frequency: "Annual (Dec)",
    notes: "Very prestigious, interdisciplinary"
  },
  {
    name: "ICML (International Conference on Machine Learning)",
    url: "https://icml.cc/",
    focus: "Machine Learning",
    frequency: "Annual (June–July)",
    notes: "Premier ML conference"
  },
  {
    name: "ICLR (International Conference on Learning Representations)",
    url: "https://iclr.cc/",
    focus: "Deep Learning, Representation Learning",
    frequency: "Annual (Apr–May)",
    notes: "Strong focus on deep learning"
  },
  {
    name: "AAAI (Association for the Advancement of Artificial Intelligence)",
    url: "https://aaai.org/",
    focus: "Broad AI, Planning, Reasoning",
    frequency: "Annual (Feb)",
    notes: "Long-standing general AI conference"
  },
  {
    name: "CVPR (Computer Vision and Pattern Recognition)",
    url: "https://cvpr2024.thecvf.com/",
    focus: "Computer Vision, Deep Learning",
    frequency: "Annual (June)",
    notes: "Top-tier for vision research"
  },
  {
    name: "ACL (Association for Computational Linguistics)",
    url: "https://www.aclweb.org/portal/",
    focus: "Natural Language Processing",
    frequency: "Annual (varies)",
    notes: "Premier NLP conference"
  },
  {
    name: "EMNLP (Empirical Methods in Natural Language Processing)",
    url: "https://2024.emnlp.org/",
    focus: "NLP, Applied ML",
    frequency: "Annual (varies)",
    notes: "NLP-focused, slightly less formal than ACL"
  }
];

const tips = [
  "Start by reaching out to professors whose work interests you—read their recent papers and email them with a specific question or idea.",
  "Build a strong GitHub portfolio with AI/ML projects and open-source contributions.",
  "Apply early for summer research programs and internships—deadlines are often 6-9 months in advance.",
  "Don't hesitate to apply for global or remote opportunities; many top labs welcome international students.",
  "Join AI communities and attend workshops or hackathons to network and discover hidden opportunities.",
];

export default function Opportunities() {
  const [showPapers, setShowPapers] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero/Intro Section */}
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100">AI Research Opportunities</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl">Explore global AI research tools, top conferences, internships, and the latest papers in machine learning and artificial intelligence. Find your path to impactful research and career growth!</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Global Tools & People in AI */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2"><FaGlobe className="text-blue-400" /> Global Tools & People in AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://hai.stanford.edu/ai-index/global-vibrancy-tool" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <FaGlobe className="text-2xl text-blue-400 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-gray-100">Global AI Vibrancy Tool</h3>
                </div>
                <p className="text-gray-300">Compare AI vibrancy across 36 countries using 42 indicators. Explore global and national AI rankings and trends over time.</p>
                <span className="mt-4 text-blue-300 flex items-center gap-1">Visit Tool <FaExternalLinkAlt className="inline text-xs" /></span>
              </div>
            </a>
            <a href="https://csrankings.org/#/index?ai&vision&mlmining&nlp&inforet&world" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <FaBookOpen className="text-2xl text-indigo-400 group-hover:text-indigo-300" />
                  <h3 className="text-xl font-semibold text-gray-100">People working in AI</h3>
                </div>
                <p className="text-gray-300">We suggest students to reach out to researchers and students working in the AI domain. Explore top faculty and researchers worldwide.</p>
                <span className="mt-4 text-indigo-300 flex items-center gap-1">View on CSRankings <FaExternalLinkAlt className="inline text-xs" /></span>
              </div>
            </a>
          </div>
        </section>

        {/* Research Internships (Global & Pakistan) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2"><FaUniversity className="text-purple-400" /> Research Internships</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex flex-col items-start mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaUniversity className="text-2xl text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-100">Global Research Internships</h3>
            </div>
            <p className="text-gray-300 mb-3">
              While most of the summer internship deadlines have concluded for 2025, we encourage students to work on their profiles and research and apply for these programs in the coming year:
            </p>
            <ul className="list-disc ml-6 text-blue-300 space-y-1 mb-3">
              <li><a href="https://mbzuai.ac.ae/ugrip/" target="_blank" rel="noopener noreferrer" className="hover:underline">MBZUAI Undergraduate Research Internship Program (UAE)</a></li>
              <li><a href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">MITACS Research Program (Canada)</a><br />
                <span className="text-gray-400 text-sm">The Mitacs Globalink Research Internship is a competitive initiative for international undergraduates to participate in 12-week research projects at Canadian universities, with funding, travel, and accommodation support. <a href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Learn more</a>.</span>
              </li>
              <li><a href="https://insait.ai/surf/" target="_blank" rel="noopener noreferrer" className="hover:underline">INSAIT Summer Undergraduate Research Fellowship (Bulgaria)</a></li>
              <li><a href="https://allenai.org/internships" target="_blank" rel="noopener noreferrer" className="hover:underline">Allen Institute for AI (AI2) Internships</a></li>
              <li><a href="https://www.fatimafellowship.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Fatima Fellowship (Global, for students from developing countries)</a></li>
            </ul>
            <h3 className="text-lg font-semibold text-green-300 mt-2 mb-1">Research Internships in AI (Pakistan)</h3>
            <ul className="list-disc ml-6 text-green-300 space-y-1">
              <li><a href="https://vision.seecs.edu.pk/summer-internships/" target="_blank" rel="noopener noreferrer" className="hover:underline">Machine Vision & Intelligent Systems Lab, NUST-SEECS</a></li>
            </ul>
          </div>
        </section>

        {/* Faculty at FAST */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-300 mb-6 flex items-center gap-2"><FaUniversity className="text-pink-400" /> AI Faculty at FAST</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">AI Faculty at FAST-NUCES Lahore</h3>
            <ul className="list-disc ml-6 text-gray-200 space-y-1 mb-3">
              <li>Dr. Aamir Wali</li>
              <li>Dr. Hajra Waheed</li>
              <li>Dr. Kashif Zafar</li>
            </ul>
            <p className="text-gray-400 mb-2">These faculty members are working in the AI research domain and can be reached out for potential research collaborations.</p>
            <h3 className="text-lg font-semibold text-green-300 mb-2">AI Faculty at FAST Islamabad</h3>
            <ul className="list-disc ml-6 text-gray-200 space-y-1">
              <li><a href="http://isb.nu.edu.pk/asif/" target="_blank" rel="noopener noreferrer" className="hover:underline">Dr. Muhammad Asif Naeem</a></li>
              <li><a href="https://scholar.google.com/citations?hl=en&user=dCUDc1oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="hover:underline">Akhtar Jamil</a></li>
            </ul>
            <p className="text-gray-400">These faculty members are actively doing research in AI and can be potentially reached out for collaboration.</p>
          </div>
        </section>

        {/* Top Conferences & Papers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2"><FaBookOpen className="text-blue-400" /> Top Conferences & Papers</h2>
          <button onClick={() => setShowPapers(true)} className="group w-full text-left">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-start">
              <div className="flex items-center gap-3 mb-2">
                <FaBookOpen className="text-2xl text-green-400 group-hover:text-green-300" />
                <h3 className="text-xl font-semibold text-gray-100">Leading AI Research Papers</h3>
              </div>
              <p className="text-gray-300">Find the latest state-of-the-art ML papers, code, datasets, and top conferences in AI research.</p>
              <span className="mt-4 text-green-300 flex items-center gap-1">Explore <FaExternalLinkAlt className="inline text-xs" /></span>
            </div>
          </button>
          {showPapers && (
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">Leading AI Research Papers & Conferences</h2>
              <p className="mb-4 text-gray-300">
                <a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-semibold">Papers with Code</a> is a free resource for researchers and practitioners to find and follow the latest state-of-the-art ML papers, code, and datasets. It is designed for researchers to reproduce state of the art research easily.<br />
                <a href="https://arxiv.org/list/stat.ML/recent" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-semibold">arXiv: Machine Learning (stat.ML)</a> is a preprint server for the latest research papers in machine learning.<br />
                <a href="https://cspapers.org/#query=llm&yearFrom=2015&yearTo=2025&venue=AAAI%2CIJCAI%2CCVPR%2CICCV%2CECCV%2CKDD%2CCIKM%2CICDM%2CICLR%2CICML%2CNeurIPS%2CACL%2CEMNLP%2CNAACL%2CSIGIR%2CWWW&orderBy=score&ascending=false&skip=0&must=" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-semibold">csPapers.org</a> lets you search and explore top AI/ML/LLM papers from major conferences by topic and year.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-800 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-200">Conference</th>
                      <th className="px-4 py-2 text-left text-gray-200">Focus Area</th>
                      <th className="px-4 py-2 text-left text-gray-200">Frequency</th>
                      <th className="px-4 py-2 text-left text-gray-200">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conferences.map((conf, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="px-4 py-2">
                          <a href={conf.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-semibold">{conf.name}</a>
                        </td>
                        <td className="px-4 py-2 text-gray-200">{conf.focus}</td>
                        <td className="px-4 py-2 text-gray-200">{conf.frequency}</td>
                        <td className="px-4 py-2 text-gray-200">{conf.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={() => setShowPapers(false)} className="mt-6 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-gray-200">Close</button>
            </div>
          )}
        </section>

        {/* Tips for Students */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> Tips for Students</h2>
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