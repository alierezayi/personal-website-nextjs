"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, Code2, Globe, Trophy, Building2 } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types/projects";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <motion.div
    //   whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.company.youtubeBanner || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110 aspect-video"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="gap-1 dark:bg-secondary/50"
              >
                <Image src={tech.logo} width={14} height={14} alt="" />
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
            <Calendar className="w-4 h-4" />
            <span>
              {project.startDate} - {project.endDate}
            </span>
          </div>
          {project.rewards && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span>{project.rewards}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
            <Building2 className="w-4 h-4" />
            <div className="flex items-center gap-2">
              <Image src={project.company.logo} width={20} height={20} alt="" />
              {project.company.name}
            </div>
          </div>
          <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">
            Team Members:
          </h4>
          <div className="flex gap-2 mb-4">
            {project.teamMembers?.map((member) => (
              <TooltipProvider key={member.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="bg-secondary dark:bg-secondary/50">
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
          <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4">
            {project.keyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-4 h-4 mr-2" />
              Visit Website
            </a>
          </Button>
          {project.sourceCode !== "private" && (
            <Button variant="outline" asChild>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
