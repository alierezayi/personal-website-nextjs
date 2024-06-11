"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  
  return (
    <section ref={ref} id="experience" className="min-h-screen">
      experience
    </section>
  );
}
