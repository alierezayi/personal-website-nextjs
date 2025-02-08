import { SOCIALS } from "@/app/blog/constants/data/socials";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col mb-10 gap-5">
      <div className="flex gap-2 items-center text-sm">
        <span className="text-xs">Follow Me</span>
        <span className="w-3 h-[1.5px] bg-gray-300 dark:bg-gray-500 rounded-full" />
        <div className="flex gap-5">
          {SOCIALS.map((social) => (
            <Link
              href={social.href}
              key={social.name}
              className="hover:text-gray-500 transition"
            >
              <social.icon className="text-base" />
            </Link>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-500">
        © 2024 Ali Rezaei. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
