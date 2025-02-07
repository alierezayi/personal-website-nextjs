import Link from "next/link";
import { TbSend } from "react-icons/tb";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useActiveSection } from "@/context/active-section-context";

export default function Details() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <div className="flex flex-col justify-center items-center lg:items-start col-span-3 lg:col-span-1 mt-10">
      {/* title */}
      <h1 className="text-4xl font-semibold mb-7">Ali Rezaei</h1>
      {/* subtitle */}
      <h3
        className="relative text-xl font-medium pl-8 lg:pl-20 mb-7 before:absolute before:w-[20px]
               lg:before:w-[70px] before:h-0.5 before:bg-gray-300 dark:before:bg-gray-700 before:left-0
               before:top-3.5 lg:before:top-4 before:rounded-full"
      >
        Web Developer
      </h3>
      {/* description */}
      <div className="w-full text-center md:text-start lg:max-w-[400px] mb-10 lg:mb-12 text-neutral-500 dark:text-gray-400">
        <TextGenerateEffect
          words="I am a crative Web designer based in Iran with a
           passion for creating web apps and dedicated to my work."
        />
      </div>
      {/* go to contact */}
      <Link
        href="#contact"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        className="flex gap-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-white dark:hover:bg-white-200
               py-4 px-6 rounded-2xl w-fit text-white dark:text-black transition duration-500"
      >
        Say Hello
        <TbSend className="text-lg" />
      </Link>
    </div>
  );
}
