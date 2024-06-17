import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IoIosExpand } from "react-icons/io";
import ProjectDialog from "../sections/projects/project-dialog";
import { IconType } from "react-icons/lib";

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
        "grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  ...item
}: {
  className?: string;
  title: string;
  tag: string;
  icon: IconType;
  tecnologies: string[];
  images: any[];
  description: string;
  features: string[];
  deployment: string;
  source: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl transition duration-200 shadow-input p-4 dark:bg-slate-950 dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <ProjectDialog data={item}>
        <div className="h-fit w-full p-2 rounded-xl bg-gradient-to-br from-pink-700 to-blue-600 relative group cursor-pointer">
          <div className="absolute inset-0 rounded-xl bg-transparent group-hover:backdrop-blur-md transition duration-300 easin flex justify-center items-center">
            <button className="opacity-0 group-hover:opacity-100 transition p-1 rounded-full border border-neutral-500">
              <IoIosExpand className="w-6 h-6 text-neutral-500 font-medium" />
            </button>
          </div>
          <Image
            src={item.images[0]}
            alt={item.title}
            width={500}
            height={300}
            className="rounded-lg border-gray-200"
          />
        </div>
      </ProjectDialog>
      <div className="transition duration-200">
        <span className="text-neutral-600 dark:text-gray-400">
          <item.icon className="w-5 h-5" />
        </span>
        <div className="font-semibold text-base text-neutral-600 dark:text-neutral-200 mb-2 mt-2 truncate">
          {item.title}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {item.description}
        </div>
        <ProjectDialog data={item}>
          <button className="flex items-center gap-1 text-xs text-neutral-600 dark:text-gray-400 hover:translate-x-2 transition duration-500">
            Show details
            <ArrowRight className="w-3" />
          </button>
        </ProjectDialog>
      </div>
    </div>
  );
};

export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
