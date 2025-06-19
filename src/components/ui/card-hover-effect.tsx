import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
  {hoveredIndex === idx && (
    <motion.span
  className={cn(
    "absolute inset-0 h-full w-full block rounded-3xl",
    idx % 2 === 0
      ? "bg-green-500/10"
      : "bg-red-500/10"
  )}
  layoutId="hoverBackground"
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { duration: 0.2 },
  }}
  exit={{
    opacity: 0,
    transition: { duration: 0.15, delay: 0.1 },
  }}
/>

  )}
</AnimatePresence>

          <Card index={idx}>
  <CardTitle index={idx}>{item.title}</CardTitle>
  <CardDescription>{item.description}</CardDescription>
</Card>

        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border relative z-20 group transition-all duration-300",
        // Default border (very thin)
        "border-transparent dark:border-white/10",

        // Bright glow on hover with thinner 1px border and glow via shadow
        {
          "hover:border-green-500 hover:shadow-[0_0_12px_2px_rgba(34,197,94,0.6)]": isEven,
          "hover:border-red-500 hover:shadow-[0_0_12px_2px_rgba(239,68,68,0.6)]": !isEven,
        },
        className
      )}
    >
      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
};


export const CardTitle = ({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <h4
      className={cn(
        "text-xl font-bold tracking-wide mt-4",
        {
          "text-green-400": !isEven,
          "text-red-400": isEven,
        },
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-sm text-zinc-400 leading-relaxed tracking-normal",
        className
      )}
    >
      {children}
    </p>
  );
};
