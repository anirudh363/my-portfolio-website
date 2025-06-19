import { CardHoverEffectDemo } from "./CardHoverEffect";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>

      {/* Subheading */}
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 text-center">
        Projects I’ve started, completed, or left unfinished — but each one has
        taught me valuable lessons and helped shape my journey as a developer.
      </p>

      {/* Project Cards */}
      <CardHoverEffectDemo />
    </div>
  );
};

export default Projects;
