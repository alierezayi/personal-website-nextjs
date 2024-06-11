"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="min-h-screen">
      Intro
    </section>
  );
}
