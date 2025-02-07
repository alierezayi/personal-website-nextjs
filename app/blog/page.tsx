import { BorderBeam } from "@/components/ui/border-beam";
import About from "@/containers/sections/about";
import Contact from "@/containers/sections/contact";
import Experience from "@/containers/sections/experience";
import Intro from "@/containers/sections/intro";
import Projects from "@/containers/sections/projects";
import Skills from "@/containers/sections/skills";

export default function BlogPage() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
