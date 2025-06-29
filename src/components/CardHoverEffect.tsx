import { HoverEffect } from "./ui/card-hover-effect";

import { projects } from "@/constants";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
