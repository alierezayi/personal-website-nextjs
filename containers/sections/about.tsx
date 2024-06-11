"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <section ref={ref} id="about" className="min-h-screen">
      about
    </section>
  );
}
