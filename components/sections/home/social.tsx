import Link from "next/link";
import { SOCIALS } from "@/constants/refrences/socials";

export default function Social() {
  const filtered = SOCIALS.filter(
    (item) =>
      item.name === "instagram" ||
      item.name === "telegram" ||
      item.name === "github"
  );

  return (
    <div className="flex flex-col gap-7 justify-center">
      {filtered.map((social, i) => (
        <Link
          key={i}
          href={social.href}
          className="text-xl dark:text-white text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-300 transition"
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
