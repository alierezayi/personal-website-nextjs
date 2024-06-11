"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  return (
    <section ref={ref} id="contact" className="min-h-screen">
      contact
    </section>
  );
}
