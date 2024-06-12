"use client";

import BgGrid from "@/components/ui/bg-grid";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="relative min-h-screen">
      <BgGrid />
    </section>
  );
}
