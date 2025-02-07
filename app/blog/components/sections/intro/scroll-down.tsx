import { useActiveSection } from "@/context/active-section-context";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ScrollDown() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { theme } = useTheme();

  return (
    <div className="flex justify-center lg:justify-start">
      <Link
        href="#about"
        onClick={() => {
          setActiveSection("About");
          setTimeOfLastClick(Date.now());
        }}
        className="flex items-center gap-2"
      >
        <svg
          width="28px"
          height="28px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          }}
        >
          <path
            className="animate-scroll-down"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: theme === "dark" ? "#fff" : "#000",
              strokeWidth: "20px",
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: theme === "dark" ? "#fff" : "#000",
              strokeWidth: "20px",
            }}
          />
        </svg>
        <span>Scroll down</span>
        <ArrowDown className="w-4" />
      </Link>
    </div>
  );
}
