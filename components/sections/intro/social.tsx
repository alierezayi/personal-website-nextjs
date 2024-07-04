import Link from "next/link";
import { SOCIALS } from "@/constants/refrences/socials";

export default function Social() {
  return (
    <div className="flex flex-col gap-7 justify-center">
      {SOCIALS.map((social, i) => (
        <Link
          key={i}
          href={social.href}
          className="dark:text-white text-neutral-700 hover:text-neutral-500
           dark:hover:text-neutral-300 transition"
          target="_blank"
        >
          <social.icon className="text-xl" />
        </Link>
      ))}
    </div>
  );
}
