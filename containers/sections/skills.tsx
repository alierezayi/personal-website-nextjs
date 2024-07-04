import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import { SkillItem, SkillList } from "@/components/sections/skills/skill-list";
import { SKILLS } from "@/constants/refrences/skills";

export default function Skills() {
  return (
    <Section name="Skills" className="relative">
      <SectionHeading>Skills</SectionHeading>
      <SectionSubTitle>My technical level</SectionSubTitle>
      <SectionContent className="flex flex-col lg:flex-row gap-10 h-fit">
        {/* front end */}
        <SkillList title="Frontend development" className="flex-1">
          {SKILLS.frontend.map((item) => (
            <SkillItem key={item} item={item} />
          ))}
        </SkillList>
        {/* back end */}
        <SkillList
          title="Backend development"
          className="flex-1 hidden lg:block"
        >
          <p className="text-neutral-700 dark:text-gray-400">
            No item here yet. 🎯
          </p>
        </SkillList>
      </SectionContent>
    </Section>
  );
}
