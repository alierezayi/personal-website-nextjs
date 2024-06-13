import Logo from "@/components/modules/logo";
import { ModeToggle } from "@/components/modules/mode-toggle";
import Navbar from "@/components/templates/header-navbar";

function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <Logo />
      <Navbar />
      <ModeToggle />
    </header>
  );
}

export default Header;
