"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/components/layouts/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { SKILLS } from "@/app/blog/constants/data/skills";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Icon } from "iconsax-react";
import Image from "next/image";
import { FC, useRef } from "react";
import { Skill, SkillCategory } from "@/types/skills";

// type Skill = {
//   name: string;
//   icon: Icon;
//   level: "Advanced" | "Intermediate" | "Beginner";
//   description: string;
//   subSkills?: { name: string; icon?: string }[];
// };

// type SkillCategory = {
//   title: string;
//   description: string;
//   skills: Skill[];
// };

type SkillsData = Record<string, SkillCategory>;

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillCard: FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);

  const smoothY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  const imageUrl = typeof skill.icon === "string" ? skill.icon : "";
  const icon = typeof skill.icon !== "string" ? skill.icon : undefined;

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y: smoothY,
      }}
    >
      <Card className="transition-all duration-300 overflow-hidden backdrop-blur-sm shadow-none h-full bg-muted/30 border-border/50">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "relative w-12 h-12 rounded-lg flex justify-center items-center",
                typeof skill.icon !== "string"
                  ? "bg-muted dark:bg-muted/50 p-2"
                  : "overflow-hidden"
              )}
            >
              {imageUrl && (
                <Image
                  src={typeof skill.icon === "string" ? skill.icon : ""}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              )}
              {icon?.name && <icon.name className={cn("size-6", icon.color)} />}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">
                {skill.name}
              </CardTitle>
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs font-medium px-2 py-1",
                  skill.level === "Advanced"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                )}
              >
                {skill.level}
              </Badge>
            </div>
          </div>
          <CardDescription className="text-sm text-muted-foreground">
            {skill.description}
          </CardDescription>
        </CardHeader>
        {skill.subSkills && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skill.subSkills.map((subSkill) => (
                <SubSkillBadge key={subSkill.name} subSkill={subSkill} />
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

const SubSkillBadge: FC<{ subSkill: { name: string; icon?: string } }> = ({
  subSkill,
}) => (
  <div className="flex items-center gap-2 bg-muted/30 rounded-lg px-2 py-1 text-xs font-medium">
    <div className="relative size-4">
      <Image
        src={subSkill.icon || "/placeholder.svg"}
        alt={subSkill.name}
        fill
        className="object-contain"
      />
    </div>
    <span>{subSkill.name}</span>
  </div>
);

const Skills: FC = () => {
  return (
    <Section name="Skills" className="relative">
      <SectionHeading>Skills</SectionHeading>
      <SectionSubTitle>My technical level</SectionSubTitle>
      <SectionContent className="flex flex-col lg:flex-row gap-10 h-fit">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-12"
        >
          {Object.entries(SKILLS as SkillsData).map(
            ([categoryKey, category]) => (
              <motion.div
                key={categoryKey}
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-primary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {category.skills.map((skill, i) => (
                    <SkillCard key={i} index={i} skill={skill} />
                  ))}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </SectionContent>
    </Section>
  );
};

export default Skills;
