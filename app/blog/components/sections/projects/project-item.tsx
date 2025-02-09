"use client";

import Image from "next/image";
import { Project } from "@/types/projects";
import Link from "next/link";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import useDevice from "@/hooks/useDevice";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageSlider from "./image-slider";

export function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { isMobile, isDesktop } = useDevice();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? 200 : -200, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x: isDesktop ? x : 0,
        scale: isMobile ? scale : 1,
      }}
      className="w-full shadow-2xl rounded-2xl aspect-video relative overflow-hidden group bg-muted dark:bg-background"
    >
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-background dark:via-black/60 to-transparent z-[2] transition-opacity duration-300" />
      <ImageSlider
        animationType="fade"
        animationSpeed={0.5}
        images={project.images}
      />
      <div className="z-[3] absolute inset-0 p-4 md:p-8 flex flex-col justify-end gap-1 md:gap-6">
        <div className="flex items-center gap-2 md:gap-4 group-hover:-translate-y-0 group-hover:translate-x-5 group-hover:scale-105 transition-transform duration-300">
          {project.logo && (
            <Image
              src={project.logo}
              alt={project.title}
              width={70}
              height={70}
              className="size-6 md:size-12 object-contain hidden md:inline-block"
            />
          )}
          <div>
            <CardTitle className="truncate flex-1 ">
              <Link href={`/blog/projects/${project.slug}`}>
                {project.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-foreground">
              {project.role}
            </CardDescription>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs font-medium"
              >
                <div className="relative size-4">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain rounded-sm"
                  />
                </div>
                <span className="hidden md:inline-block">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="-space-x-2">
            {project.teamMembers?.map((member) => (
              <TooltipProvider key={member.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="bg-secondary dark:bg-white border shadow size-6 md:size-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {member.name}: {member.role}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
