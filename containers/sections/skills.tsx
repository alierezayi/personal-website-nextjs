"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import { SkillItem, SkillList } from "@/components/sections/skills/skill-list";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SKILLS } from "@/constants/refrences/skills";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Section name="Skills" className="relative">
      <SectionHeading>Skills</SectionHeading>
      <SectionSubTitle>My technical level</SectionSubTitle>
      <SectionContent className="flex flex-col lg:flex-row gap-10 h-fit">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-12"
        >
          {Object.entries(SKILLS).map(([categoryKey, category]) => (
            <motion.div key={categoryKey} variants={item} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="group"
                  >
                    <Card className="transition-all duration-300 overflow-hidden bg-background/50 backdrop-blur-sm md:border-none shadow-none">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary dark:bg-muted/20 p-2 flex justify-center items-center">
                            {typeof skill.icon === "string" ? (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            ) : (
                              <skill.icon className="size-6" />
                            )}
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-lg">
                              {skill.name}
                            </CardTitle>
                            <Badge
                              variant="secondary"
                              className={cn(
                                "transition-colors",
                                skill.level === "Advanced"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-yellow-500/10 text-yellow-500"
                              )}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription className="text-sm">
                          {skill.description}
                        </CardDescription>
                      </CardHeader>
                      {skill.subSkills && (
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {skill.subSkills.map((subSkill) => (
                              <div
                                key={subSkill.name}
                                className="flex items-center space-x-2 bg-muted/30 rounded-full px-3 py-1"
                              >
                                <div className="relative w-5 h-5">
                                  <Image
                                    src={subSkill.icon || "/placeholder.svg"}
                                    alt={subSkill.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <span className="text-xs font-medium">
                                  {subSkill.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionContent>
    </Section>
  );
}
