import { cn } from "@/lib/utils";
import { ArrowRight, Expand } from "lucide-react";
import Image from "next/image";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
}: {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl transition duration-200 shadow-input p-4 dark:bg-slate-950 dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="h-fit w-full p-5 rounded-xl bg-gradient-to-br from-pink-700 to-blue-600 relative group cursor-pointer">
        <div className="absolute inset-0 rounded-xl bg-transparent group-hover:backdrop-blur-md transition duration-300 easin flex justify-center items-center">
          <button className="opacity-0 group-hover:opacity-100 transition p-1 rounded-full border border-gray-500">
            <IoIosExpand className="w-6 h-6 text-gray-500 font-medium" />
          </button>
        </div>
        <Image
          src={image!}
          alt={title!}
          width={500}
          height={300}
          className="rounded-lg shadow-sm border-gray-200"
        />
      </div>
      <div className="transition duration-200">
        <span className="">{icon}</span>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 truncate">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <button className="flex items-center gap-1 text-xs text-neutral-600 dark:text-gray-400 hover:translate-x-2 transition duration-500">
          Show details
          <ArrowRight className="w-3" />
        </button>
      </div>
    </div>
  );
};

export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
