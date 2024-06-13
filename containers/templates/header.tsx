"use client";

import Logo from "@/components/templates/header/logo";
import { ModeToggle } from "@/components/templates/header/mode-toggle";
import Navbar from "@/components/templates/header/header-navbar";
import { useSectionInView } from "@/hooks/useSectionInView";

function Header() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <header
      ref={ref}
      id="home"
      className="flex items-center justify-between h-20"
    >
      <Logo />
      <Navbar />
      <ModeToggle />
    </header>
  );
}

export default Header;
