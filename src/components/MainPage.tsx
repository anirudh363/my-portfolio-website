import { HeroScrollDemo } from "./HeroScroll"
import { NavbarDemo } from "./Navbar"
import { ThemeToggle } from "./ThemeToggle";
import { ScrollProgress } from "./magicui/scroll-progress";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Experience from "./Experience";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div className="relative">
          <ScrollProgress />
          <NavbarDemo />
          <HeroScrollDemo />

          <div id="about" className="scroll-mt-36">
            <About />
          </div>

          <div id="projects" className="scroll-mt-36">
            <Projects />
          </div>

          <div id="experience" className="scroll-mt-36">
            <Experience />
          </div>

          <div id="resume" className="scroll-mt-36">
            <Resume />
          </div>

          <div id="contact" className="scroll-mt-36">
            <Contact />
          </div>



          <ThemeToggle />
          <footer className=" border-t border-neutral-300 dark:border-neutral-700 py-4 pb-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Anirudh Sandilya. All rights reserved.
            </footer>

        </div>
  )
}

export default MainPage