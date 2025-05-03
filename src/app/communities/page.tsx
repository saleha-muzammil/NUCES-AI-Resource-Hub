"use client";

import React from "react";
import Link from "next/link";
import { FaUsers, FaGlobe, FaComments, FaUserGraduate, FaUserFriends, FaDiscord, FaReddit, FaTwitter, FaSlack, FaFacebook, FaLinkedin } from "react-icons/fa";

const globalCommunities = [
  {
    name: "DeepLearning.AI Community",
    description: "A global community for learners and practitioners of deep learning, founded by Andrew Ng.",
    link: "https://community.deeplearning.ai/",
    icon: <FaGlobe className="text-blue-300 text-xl" />,
  },
  {
    name: "r/MachineLearning (Reddit)",
    description: "The largest online forum for ML research, news, and discussion.",
    link: "https://www.reddit.com/r/MachineLearning/",
    icon: <FaReddit className="text-orange-300 text-xl" />,
  },
  {
    name: "AI Alignment Forum",
    description: "A hub for technical AI safety and alignment research.",
    link: "https://www.alignmentforum.org/",
    icon: <FaGlobe className="text-blue-300 text-xl" />,
  },
  {
    name: "Kaggle Community",
    description: "Kaggle's forums and Discord for data science competitions and learning.",
    link: "https://www.kaggle.com/discussion",
    icon: <FaComments className="text-green-300 text-xl" />,
  },
  {
    name: "AI Stack Exchange",
    description: "Q&A for researchers and practitioners in AI.",
    link: "https://ai.stackexchange.com/",
    icon: <FaComments className="text-fuchsia-300 text-xl" />,
  },
];

const studentCommunities = [
  {
    name: "AI4ALL College Pathways",
    description: "Programs and a supportive community for students from underrepresented groups in AI.",
    link: "https://ai-4-all.org/programs/",
    icon: <FaUserGraduate className="text-yellow-300 text-xl" />,
  },
  {
    name: "Women in Machine Learning (WiML)",
    description: "A global network supporting women in ML research and careers.",
    link: "https://wimlworkshop.org/",
    icon: <FaUserFriends className="text-pink-300 text-xl" />,
  },
  {
    name: "Women in AI (WAI)",
    description: "A global community for women in AI, with local chapters and events.",
    link: "https://www.womeninai.co/",
    icon: <FaUserFriends className="text-pink-300 text-xl" />,
  },
  {
    name: "AI Students Global Community",
    description: "A student-run network for AI learners worldwide.",
    link: "https://www.aistudents.org/",
    icon: <FaUserGraduate className="text-yellow-300 text-xl" />,
  },
];

const socialChannels = [
  {
    name: "Kaggle Discord",
    description: "Active Discord server for Kaggle competitions and data science chat.",
    link: "https://discord.gg/kaggle",
    icon: <FaDiscord className="text-indigo-300 text-xl" />,
  },
  {
    name: "Deep Learning AI Discord",
    description: "Community-run Discord for deep learning discussions and help.",
    link: "https://discord.gg/deeplearningai",
    icon: <FaDiscord className="text-indigo-300 text-xl" />,
  },
  {
    name: "AI Twitter/X",
    description: "Follow #MachineLearning, #AI, and top researchers for real-time news and threads.",
    link: "https://twitter.com/search?q=%23machinelearning%20OR%20%23ai&src=typed_query",
    icon: <FaTwitter className="text-blue-400 text-xl" />,
  },
  {
    name: "AI Slack Communities",
    description: "Slack groups for ML, data science, and AI ethics (search for invites).",
    link: "https://datascienceslack.com/",
    icon: <FaSlack className="text-pink-300 text-xl" />,
  },
];

const localCommunities = [
  {
    name: "FAST NUCES AI Society",
    description: "Student-led AI society at FAST NUCES, organizing talks, workshops, and competitions.",
    link: "https://www.facebook.com/fastaisociety/",
    icon: <FaFacebook className="text-blue-300 text-xl" />,
  },
  {
    name: "Pakistan.AI",
    description: "A community for AI professionals and students in Pakistan.",
    link: "https://pakistan.ai/",
    icon: <FaGlobe className="text-green-300 text-xl" />,
  },
  {
    name: "Columbia AI & ML Club",
    description: "Student club at Columbia University for AI/ML learning and networking.",
    link: "https://www.facebook.com/ColumbiaAIML/",
    icon: <FaFacebook className="text-blue-300 text-xl" />,
  },
  {
    name: "LinkedIn: AI & Machine Learning Network",
    description: "Professional networking group for AI/ML on LinkedIn.",
    link: "https://www.linkedin.com/groups/8566277/",
    icon: <FaLinkedin className="text-blue-400 text-xl" />,
  },
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100 flex items-center gap-2"><FaUsers className="text-blue-400" /> AI Communities</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl">Connect with global, student, and local AI communities to learn, collaborate, and grow your network. Find support, mentorship, and opportunities in AI, ML, and data science.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Global AI Communities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2"><FaGlobe className="text-blue-400" /> Top Global AI Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalCommunities.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex gap-4 items-start hover:shadow-lg hover:border-blue-400 transition">
                <div>{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{c.name}</h3>
                  <p className="text-gray-300 mb-2">{c.description}</p>
                  <span className="text-blue-300 text-sm underline">Visit</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Student & Women in AI Groups */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2"><FaUserGraduate className="text-yellow-300" /> Student & Women in AI Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentCommunities.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex gap-4 items-start hover:shadow-lg hover:border-yellow-300 transition">
                <div>{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{c.name}</h3>
                  <p className="text-gray-300 mb-2">{c.description}</p>
                  <span className="text-yellow-200 text-sm underline">Visit</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Social/Discussion Channels */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fuchsia-300 mb-6 flex items-center gap-2"><FaComments className="text-fuchsia-300" /> Social & Discussion Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialChannels.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex gap-4 items-start hover:shadow-lg hover:border-fuchsia-300 transition">
                <div>{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{c.name}</h3>
                  <p className="text-gray-300 mb-2">{c.description}</p>
                  <span className="text-fuchsia-200 text-sm underline">Visit</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Local/Regional Communities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-2"><FaGlobe className="text-green-300" /> Local & Regional Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localCommunities.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 flex gap-4 items-start hover:shadow-lg hover:border-green-300 transition">
                <div>{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{c.name}</h3>
                  <p className="text-gray-300 mb-2">{c.description}</p>
                  <span className="text-green-200 text-sm underline">Visit</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 