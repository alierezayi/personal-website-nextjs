import About from "@/app/blog/components/containers/sections/about";
import Contact from "@/app/blog/components/containers/sections/contact";
import Experience from "@/app/blog/components/containers/sections/experience";
import Intro from "@/app/blog/components/containers/sections/intro";
import Projects from "@/app/blog/components/containers/sections/projects";
import Skills from "@/app/blog/components/containers/sections/skills";

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
