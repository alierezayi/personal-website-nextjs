"use client";
import { IconType, TimelineEntry } from "@/types/experience";
import { useScroll, useTransform, motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Calendar, Calendar1, Calendar2, Location } from "iconsax-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-fuchsia-500 via-blue-500 to-transparent from-[20%] via-[30%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

function TimelineItem({ item }: { item: TimelineEntry }) {
  const renderDate = (
    date: string | { from: string; to: string | "Present" }
  ): string => {
    const formatDate = (dateStr: string): string =>
      format(dateStr, "MMM yyyy") || dateStr;

    if (typeof date === "string") {
      return formatDate(date);
    }

    const fromDate = formatDate(date.from);
    const toDate = date.to === "Present" ? "Present" : formatDate(date.to);

    return `${fromDate} - ${toDate}`;
  };

  const renderIcon = (icon: IconType | undefined): React.ReactNode => {
    if (!icon) {
      return (
        <div className="size-8 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
      );
    }

    const size = "size-4";
    if (typeof icon === "string") {
      return (
        <Image
          src={icon}
          width={40}
          height={40}
          alt=""
          className={cn(size, "rounded-full")}
        />
      );
    }

    const IconComponent = icon;

    return (
      <div className="size-8 flex justify-center items-center rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
        <IconComponent className={cn(size)} />
      </div>
    );
  };

  return (
    <div className="flex justify-start pt-10 md:pt-28 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start md:max-w-[250px] lg:max-w-xs md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
          {renderIcon(item.icon)}
        </div>
        <div className="md:pl-16 hidden md:block text-neutral-500 dark:text-neutral-500">
          <h3 className="text-xl md:text-xl font-bold">{item.title}</h3>
          <div className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            <span className="text-xs">{renderDate(item.date)}</span>
          </div>
        </div>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <div>
          <div className="md:hidden block text-neutral-500 dark:text-neutral-500 mb-4">
            <h3 className="text-xl text-left font-bold">
              {item.title}
            </h3>
            <div className="flex items-center gap-1">
              <Calendar className="size-3.5" />
              <span className="text-xs">{renderDate(item.date)}</span>
            </div>
          </div>
        </div>
        {item.content}
      </div>
    </div>
  );
}
