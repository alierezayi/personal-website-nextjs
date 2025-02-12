import About from "@/app/blog/_sections/about/components/containers/main";
import Projects from "@/app/blog/_sections/projects/components/containers/main";
import Contact from "@/app/blog/_sections/contact/components/containers/main";
import Experience from "@/app/blog/_sections/experiences/components/containers/main";
import Intro from "@/app/blog/_sections/intro/components/containers/main";
import Skills from "@/app/blog/_sections/skills/components/containers/main";

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
