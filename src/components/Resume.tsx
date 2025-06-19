import { Download, Eye } from "lucide-react"; // using lucide icons
import DigitalDossier from "./DigitalDossier";

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto my-24 px-4 py-12 text-center">
      {/* Title & Subheading */}
      <h1 className="text-4xl font-bold mb-2 tracking-widest">
        My Resume
      </h1>
      <p className="text-md mb-12 font-mono text-neutral-600 dark:text-neutral-400">
        Access and Download the official file, preview it through my dossier below.
      </p>

      {/* Digital Dossier Preview */}
      <DigitalDossier />

      {/* Button Row */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        {/* Download Resume */}
        <a
          href="/assets/resume/Anirudh_Resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white border-2 font-semibold px-6 py-3 rounded-md shadow transition"
        >
          <Download className="w-5 h-5" />
          Download Resume (PDF)
        </a>

        {/* View on Google Drive */}
        <a
          href="https://drive.google.com/file/d/1M_zpTwXYWFYt3Jnd3gATS_dHc_EVISwv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 dark:bg-green-600 dark:text-black dark:hover:text-green-500 dark:hover:bg-black dark:hover:border-green-500 border-2 font-semibold px-6 py-3 rounded-md shadow transition"
        >
          <Eye className="w-5 h-5" />
          View Resume Online
        </a>
      </div>
    </div>
  );
};

export default Resume;
