import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css-3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "vscode",
  "androidstudio",
  "python",
  "flask",
  "linux",
  "c",
  "c++",
  "tailwindcss",
  "mongodb",
  "tensorflow",
  "uipath",
  "springboot"
];

// Remove duplicate entries if needed
const uniqueSlugs = [...new Set(slugs)];

export function IconCloudDemo() {
  const images = uniqueSlugs.map((slug) => `/assets/icons/${slug}.svg`);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
