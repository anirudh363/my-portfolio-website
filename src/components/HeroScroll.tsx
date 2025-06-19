"use client";
import GlowDivider from "./GlowDivider";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Typewriter } from "react-simple-typewriter";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="md:text-8xl text-4xl font-semibold text-black dark:text-white mb-6">
              Anirudh Manjunath Sandilya <br />
              <GlowDivider />
              <span className="text-xl sm:text-2xl md:text-5xl lg:text-[4.5rem] z-50 font-bold mt-1 leading-none">

                <Typewriter
                  words={["Software Developer", "CyberSecurity Enthusiast"]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/assets/comp.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
