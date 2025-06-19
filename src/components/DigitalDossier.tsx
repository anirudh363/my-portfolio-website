import { useState } from "react";
import { cn } from "@/lib/utils"; // optional utility for classNames


type TabKey = "Bio" | "Skills" | "Projects" | "Work" | "Contact";

const tabs: TabKey[] = ["Bio", "Skills", "Projects", "Work", "Contact"];

const DigitalDossier = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("Bio");

    const renderTabContent = () => {
        switch (activeTab) {
            case "Bio":
                return (
                    <div>
                        <h3 className="text-red-500 font-bold text-lg">[CLASSIFIED BIO]</h3>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-10 relative">

  {/* 📱 Mobile Background Document */}
  <div className="absolute inset-0 md:hidden flex justify-center items-center opacity-80 blur-[0.1rem] z-0">
    <div className="relative w-48 h-64 border-4 border-green-500 bg-black rounded-lg p-4 shadow-lg">
      {/* Encrypted lines */}
      <div className="space-y-2 relative">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded ${i % 2 === 0 ? 'bg-red-600' : 'bg-green-500'} w-${Math.floor(
              Math.random() * 20 + 20
            )}`}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500" />
      <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-green-400" />

      {/* ENCRYPTED label */}
      <div className="absolute bottom-4 right-4 text-xs text-green-400 font-mono opacity-60 rotate-12">
        ENCRYPTED
      </div>

      {/* CLASSIFIED Stamp */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-red-700 bg-black text-3xl font-extrabold tracking-widest opacity-90 rotate-[-30deg] border-2 border-red-700 px-4 py-1">
          CLASSIFIED
        </span>
      </div>
    </div>
  </div>

  {/* 📝 Left side: Classified bio */}
  <div className="relative z-10 mt-2 text-green-600 md:pl-20 text-left space-y-6 md:w-1/2 ">
    <p className="bg-black/75 px-3 py-2 rounded">
      <span className="font-bold text-red-800 ">NAME:</span> Anirudh Manjunath Sandilya
    </p>
    <p className="bg-black/75 px-3 py-2 rounded">
      <span className="font-bold text-red-800">ROLE:</span> Full-stack Dev | AI & Cybersecurity Enthusiast
    </p>
    <p className="bg-black/75 px-3 py-2 rounded">
      <span className="font-bold text-red-800">ALIGNMENT:</span> National Security & Tech Innovation
    </p>
    <p className="bg-black/75 px-3 py-2 rounded"> 
      <span className="font-bold text-red-800">CLEARANCE LEVEL:</span> Unknown
    </p>
  </div>

  {/* 💻 Right side: Document – only on medium and up */}
  <div className="hidden md:flex justify-center items-center w-full md:w-1/2 blur-[0.15rem]">
    <div className="relative w-48 h-64 border-4 border-green-500 bg-black rounded-lg p-4 shadow-lg">
      {/* Encrypted lines */}
      <div className="space-y-2 relative">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded ${i % 2 === 0 ? 'bg-red-600' : 'bg-green-500'} w-${Math.floor(
              Math.random() * 20 + 20
            )}`}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 z-20" />
      <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-green-400 z-20" />

      {/* ENCRYPTED label */}
      <div className="absolute bottom-4 right-4 text-xs text-green-400 font-mono opacity-60 rotate-12 z-20">
        ENCRYPTED
      </div>

      {/* CLASSIFIED Stamp */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-red-700 bg-black text-3xl z-50 font-extrabold tracking-widest opacity-90 rotate-[-30deg] border-2 border-red-700 px-4 py-1">
          CLASSIFIED
        </span>
      </div>
    </div>
  </div>

</div>



                    </div>
                );
            case "Skills":
  return (
    <div className="flex flex-col justify-center items-center text-green-600 text-center">
      <ul className="list-disc list-inside space-y-2">
        <li>React / Next.js / TypeScript</li>
        <li>Python / Flask / Automation</li>
        <li>Linux / Bash / Docker</li>
        <li>Machine Learning / TensorFlow</li>
        <li>Cybersecurity Fundamentals</li>
      </ul>
    </div>
  );

            case "Projects":
                return (
                    <div className="space-y-2 flex flex-col justify-center items-center text-green-600 text-center">
                        <p>• Timetable Generator - AI + Optimization</p>
                        <p>• Agile Performance Predictor - ML + Jira</p>
                        <p>• CNN Bias Detection - Deep Learning</p>
                    </div>
                );
            case "Work":
                return (
                    <div className="flex flex-col justify-center items-center text-green-600 text-center">
                        <p>☑ Gladwell Academy — Agile Tooling + Random Forest</p>
                        <p>☑ Confido Health — LLM, RPA, Testing</p>
                    </div>
                );
            case "Contact":
                return (
                    <div className="flex flex-col justify-center items-center text-green-600 text-center">
                        <p>Email: <span className="text-red-500">anirudhsandilya363@gmail.com</span></p>
                        <p>GitHub: <span className="text-red-500">github.com/anirudh363</span></p>
                        <p>Location: CLASSIFIED / Mission: Global</p>
                    </div>
                );
        }
    };

    return (
        <div className="bg-black text-green-600 border-1 border-red-900 rounded-lg p-6 max-w-4xl mx-auto shadow-lg font-mono tracking-wide">
            <h2 className="text-2xl text-center text-red-500 font-extrabold mb-4 uppercase">
                Digital Dossier | STATUS: ACTIVE
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-4 py-2 rounded-md border border-green-600 hover:bg-green-700 hover:text-black transition-colors duration-300",
                            activeTab === tab && "bg-green-600 text-black font-bold"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-neutral-900 border border-green-700 rounded-md p-4 min-h-[450px] flex justify-center text-center">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default DigitalDossier;
