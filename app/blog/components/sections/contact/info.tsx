import { CONTACT } from "@/app/blog/constants/data/contact";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Info = () => {
  return (
    <div>
      <h1 className="text-base mb-7 font-medium text-center">Information</h1>
      <div className="flex flex-col justify-between gap-2 md:gap-5 mb-10">
        {CONTACT.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-2 border w-full sm:w-[300px] p-4 rounded-lg"
          >
            <item.icon className="text-xl" />
            <h1 className="text-sm font-medium">
              <span>{item.title}</span>
            </h1>
            <div className="text-xs text-neutral-500 dark:text-gray-400">
              {item.description}
            </div>
            <Link
              href={item.href}
              className="flex items-center text-xs gap-1 hover:translate-x-2 transition"
            >
              contact
              <ArrowRight className="w-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
