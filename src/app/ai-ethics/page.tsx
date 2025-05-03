"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBalanceScale, FaLock, FaChartLine, FaUserShield } from "react-icons/fa";

// Placeholder slider component
function Slider({ label, value, setValue, min = 0, max = 100, step = 1, tooltip }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-gray-100">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-xs text-gray-300 mt-1">{tooltip}</div>
      <div className="text-sm text-blue-300 mt-1">{value}</div>
    </div>
  );
}

// Placeholder chart component
function SimpleBar({ label, value, min, max, color }) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded">
        <div
          className="h-3 rounded"
          style={{ width: `${percent}%`, background: color || "#3b82f6" }}
        />
      </div>
    </div>
  );
}

function ReflectionBox({ prompts, choices, onReflect }) {
  const [reflection, setReflection] = useState("");
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded">
      {prompts.map((prompt, i) => (
        <div key={i} className="mb-2">
          <div className="font-semibold mb-1 text-gray-900">{prompt}</div>
          {choices && choices[i] ? (
            <select
              className="border rounded px-2 py-1 text-gray-900"
              onChange={e => setReflection(e.target.value)}
              value={reflection}
            >
              <option value="">Select...</option>
              {choices[i].map((c, j) => (
                <option key={j} value={c}>{c}</option>
              ))}
            </select>
          ) : (
            <textarea
              className="border rounded w-full px-2 py-1 text-gray-900"
              rows={2}
              value={reflection}
              onChange={e => setReflection(e.target.value)}
            />
          )}
        </div>
      ))}
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => onReflect(reflection)}
      >
        Submit Reflection
      </button>
    </div>
  );
}

function ScenarioCriminalJustice() {
  // Sliders
  const [aiAutonomy, setAiAutonomy] = useState(50);
  const [humanOverride, setHumanOverride] = useState(50);
  // Outputs (simple formulas for illustration)
  const speed = 1 + aiAutonomy / 50; // 1x to 3x
  const bias = 0.35 - (aiAutonomy / 100) * 0.23; // 0.35 to 0.12
  const publicTrust = 52 + (humanOverride / 2) * 0.46; // 52 to 75
  const legalRisk = aiAutonomy > 80 ? "High" : aiAutonomy > 60 ? "Medium" : "Low";
  // Reflection
  const [reflected, setReflected] = useState(false);
  return (
    <div className="mb-10 p-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl text-gray-100 font-bold mb-2">Human Control vs. Automation in Criminal Justice AI</h2>
      <p className="mb-4 text-gray-300 font-normal">You're building an AI risk assessment tool used in bail hearings. The system predicts the likelihood of reoffending. Judges can rely on the system completely or use it as a supporting tool. Too much automation may strip human judgment. Too little, and bias may creep back in.</p>
      <Slider label="Decision Automation" value={aiAutonomy} setValue={setAiAutonomy} tooltip="Higher values allow the AI to fully recommend or decide bail outcomes." />
      <Slider label="Judicial Discretion" value={humanOverride} setValue={setHumanOverride} tooltip="Higher values ensure judges have full control, reducing reliance on AI." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SimpleBar label="Speed of Bail Hearings (x faster)" value={speed.toFixed(2)} min={1} max={3} color="#f59e42" />
        <SimpleBar label="Bias in Outcomes (lower is better)" value={bias.toFixed(2)} min={0.12} max={0.35} color="#a3e635" />
        <SimpleBar label="Public Perception Score (%)" value={publicTrust.toFixed(0)} min={52} max={75} color="#60a5fa" />
        <div className="flex flex-col justify-between">
          <div className="font-semibold">Legal Challenge Risk:</div>
          <div className={`font-bold ${legalRisk === "High" ? "text-red-600" : legalRisk === "Medium" ? "text-yellow-600" : "text-green-600"}`}>{legalRisk}</div>
        </div>
      </div>
      {!reflected && (
        <ReflectionBox
          prompts={["If the AI is more accurate than humans, should it make the final call?", "What's more dangerous in this context?"]}
          choices={[null, ["A biased human decision.", "A non-transparent AI ruling.", "A delayed hearing.", "Legal liability from AI mistakes."]]}
          onReflect={() => setReflected(true)}
        />
      )}
      {reflected && (
        <div className="mt-4 p-4 bg-green-50 rounded text-gray-900">⚖️ <b>Key Insight:</b> AI can assist justice—but it cannot replace it. Balancing human authority and AI efficiency is a core ethical challenge in public-sector automation.</div>
      )}
    </div>
  );
}

function ScenarioHealthcare() {
  const [privacy, setPrivacy] = useState(50);
  const [utility, setUtility] = useState(50);
  // Outputs
  const accuracy = 65 + (utility / 100) * 27 - (privacy / 100) * 20; // 65-92%
  const alertDelay = 3 - (utility / 100) * 2 + (privacy / 100) * 2; // 1-5 days
  const privacyRisk = privacy > 70 ? "Low" : privacy > 40 ? "Medium" : "High";
  const trust = 40 + (privacy / 100) * 45; // 40-85%
  const [reflected, setReflected] = useState(false);
  return (
    <div className="mb-10 p-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl text-gray-100 font-bold mb-2">Privacy vs. Utility in Healthcare AI</h2>
      <p className="mb-4 text-gray-300 font-normal">You're designing an AI system to detect disease outbreaks early using patient health records. The more data the system has, the better it can predict future health risks—but greater data access means less privacy for patients. How do you balance public health and personal privacy?</p>
      <Slider label="Patient Privacy Protection" value={privacy} setValue={setPrivacy} tooltip="Higher values mean stronger anonymization and stricter access controls (e.g., differential privacy, limited retention)." />
      <Slider label="Model Effectiveness" value={utility} setValue={setUtility} tooltip="Higher values mean more granular, complete data—leading to more accurate predictions but lower privacy." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SimpleBar label="Disease Detection Accuracy (%)" value={accuracy.toFixed(0)} min={65} max={92} color="#f59e42" />
        <SimpleBar label="Time to Outbreak Alert (days)" value={alertDelay.toFixed(1)} min={1} max={5} color="#a3e635" />
        <SimpleBar label="Privacy Risk Index" value={privacyRisk} min={0} max={100} color="#f87171" />
        <SimpleBar label="Estimated Public Trust (%)" value={trust.toFixed(0)} min={40} max={85} color="#60a5fa" />
      </div>
      {!reflected && (
        <ReflectionBox
          prompts={["How would you justify a decision to prioritize either patient privacy or public safety?", "Would your decision change if the data were from a global pandemic?", "Which is more ethically important in this scenario?"]}
          choices={[null, null, ["Saving lives as quickly as possible.", "Respecting patient autonomy and consent.", "Building long-term public trust.", "Complying with privacy regulations."]]}
          onReflect={() => setReflected(true)}
        />
      )}
      {reflected && (
        <div className="mt-4 p-4 bg-green-50 rounded text-gray-900">🔍 <b>Key Insight:</b> In health AI, greater data utility can save lives—but at what ethical cost to privacy? Responsible AI considers both immediate and long-term societal impacts.</div>
      )}
    </div>
  );
}

function ScenarioTransparency() {
  const [complexity, setComplexity] = useState(50);
  const [explain, setExplain] = useState(50);
  // Outputs
  const accuracy = 78 + (complexity / 100) * 11; // 78-89%
  const explainTime = complexity > 70 ? 10 : 1; // mins
  const compliance = explain > 60 ? "Low" : "High";
  const trust = 64 + (explain / 100) * 19; // 64-83%
  const [reflected, setReflected] = useState(false);
  return (
    <div className="mb-10 p-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl text-gray-100 font-bold mb-2">Transparency vs. Performance in AI Decision-Making</h2>
      <p className="mb-4 text-gray-300 font-normal">You are developing an AI to determine loan eligibility. A complex model (like a neural network) gives better predictions, but is hard to interpret. A simpler model is easier to explain—but slightly less accurate. Regulators and consumers are demanding transparency.</p>
      <Slider label="Model Power" value={complexity} setValue={setComplexity} tooltip="Higher complexity uses deep learning, boosting accuracy but reducing interpretability." />
      <Slider label="Transparency Preference" value={explain} setValue={setExplain} tooltip="Higher explainability ensures stakeholders can understand and audit AI decisions." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SimpleBar label="Prediction Accuracy (%)" value={accuracy.toFixed(0)} min={78} max={89} color="#f59e42" />
        <SimpleBar label="Time to Explain a Decision (mins)" value={explainTime} min={1} max={10} color="#a3e635" />
        <SimpleBar label="Regulatory Compliance Risk" value={compliance} min={0} max={100} color={compliance === "Low" ? "#f87171" : "#60a5fa"} />
        <SimpleBar label="User Trust Index (%)" value={trust.toFixed(0)} min={64} max={83} color="#60a5fa" />
      </div>
      {!reflected && (
        <ReflectionBox
          prompts={["If a user is denied a loan, how important is it that they understand why?", "What would you prioritize if you worked at a startup vs. a government agency?", "Would you accept a decision from a black-box AI with 95% accuracy?"]}
          choices={[null, null, ["Yes", "No"]]}
          onReflect={() => setReflected(true)}
        />
      )}
      {reflected && (
        <div className="mt-4 p-4 bg-green-50 rounded text-gray-900">⚖️ <b>Key Insight:</b> In some high-stakes domains, explainability may be more important than raw accuracy. But how much understanding is "enough" is an ethical—and contextual—question.</div>
      )}
    </div>
  );
}

export default function AIEthics() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-red-300 hover:text-white mb-4 inline-block transition-colors duration-200">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-100 flex items-center gap-2"><FaBalanceScale className="text-red-400" /> AI Ethics</h1>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl">AI ethics is the study and practice of making responsible choices in the design, deployment, and use of artificial intelligence. It is crucial because AI systems increasingly impact society, raising questions about fairness, privacy, transparency, accountability, and human well-being. Explore the scenarios below to see how ethical trade-offs play out in real-world AI applications.</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-10">
          {/* Render scenario components, each in a dark card */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6">
            <ScenarioCriminalJustice />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6">
            <ScenarioHealthcare />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6">
            <ScenarioTransparency />
          </div>
        </div>
        {/* AI Ethics Terms Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">Key AI Ethics Terms</h2>
          <ul className="space-y-3 text-gray-300">
            <li><b>Bias:</b> Systematic and unfair discrimination by an AI model, often inherited from training data.</li>
            <li><b>Fairness:</b> Ensuring that AI outcomes do not favor or harm groups unjustly. Can vary by definition (e.g., equal opportunity, demographic parity).</li>
            <li><b>Discrimination:</b> When AI treats individuals or groups differently based on attributes like race, gender, or disability.</li>
            <li><b>Accountability:</b> The idea that someone (person or organization) must take responsibility for AI outcomes.</li>
            <li><b>Transparency:</b> The degree to which AI decision-making is understandable to humans.</li>
            <li><b>Explainability:</b> The ability to interpret and explain how an AI system arrived at a decision.</li>
            <li><b>Consent:</b> Users agreeing to their data being used, especially in contexts like health, surveillance, or personalization.</li>
            <li><b>Human-in-the-Loop:</b> Keeping humans involved in critical AI decisions to prevent over-reliance on automation.</li>
            <li><b>Value-Sensitive Design:</b> Designing AI with explicit consideration of human values like equity, autonomy, and dignity.</li>
            <li><b>Differential Privacy:</b> A technique to share data insights while preserving individual privacy.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-300 mt-8 mb-2">Learn More About AI Ethics</h3>
          <ul className="list-disc ml-6 text-red-300 space-y-1">
            <li><a href="https://www.sap.com/resources/what-is-ai-ethics" target="_blank" rel="noopener noreferrer" className="hover:underline">What is AI Ethics? (SAP Resource)</a></li>
            <li><a href="https://www.kaggle.com/learn/intro-to-ai-ethics" target="_blank" rel="noopener noreferrer" className="hover:underline">Kaggle: Intro to AI Ethics</a></li>
            <li><a href="https://www.kdnuggets.com/an-introduction-to-explainable-ai-xai" target="_blank" rel="noopener noreferrer" className="hover:underline">An Introduction to Explainable AI (KDnuggets)</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
} 