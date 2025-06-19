import { IconCloudDemo } from "./IconCloud";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      {/* Paragraph */}
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">

        I’m Anirudh Manjunath Sandilya, a software developer with a strong background in full-stack web development, automation, and AI systems. 
        I’ve engineered scalable backend architectures and intuitive user interfaces to solve real-world problems effectively. 
        While my journey began with development and systems design, 
        I’m now expanding into cybersecurity to better align my skills with challenges in critical sectors and defense technologies. 
        I’m especially driven by opportunities at the intersection of technology and national security—where precision, resilience, and innovation truly matter.
      </p>

      {/* Skill List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">
          Technical Skills
        </h2>
        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 grid grid-cols-2 md:grid-cols-3 gap-y-1">
          <li>JavaScript / TypeScript</li>
          <li>Linux / Bash</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Python / Flask</li>
          <li>C / C++</li>
          <li>Dart / Flutter / Android</li>
          <li>PostgreSQL / MongoDB / Firebase</li>
          <li>Docker / Git / GitHub / GitLab</li>
          <li>TensorFlow / AI Tools</li>
          <li>Jest / Testing Library</li>
          <li>Spring Boot / Java</li>
        </ul>
      </div>

      {/* Education Card */}
      <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 shadow-lg rounded-xl w-full max-w-md mx-auto mb-10 border dark:border-neutral-700">
        <img
        src="/assets/pu.png"
        alt="Presidency University Logo"
        width={64}
        height={64}
        className="rounded-md"
        />

        <div>
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-white">
            Presidency University, Bangalore
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            B.Tech in Computer Science & Engineering <br />
            Class of 2025
          </p>
        </div>
      </div>

      {/* Skill Cloud Visual */}
      <div className="flex justify-center">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default About;
