import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import { SkillItem, SkillList } from "@/components/sections/skills/skill-list";
import { SKILLS } from "@/constants/refrences/skills";
import LanguageBox from "@/components/sections/skills/language-box";
import CodingBox from "@/components/sections/skills/coding-box";

export default function Skills() {
  return (
    <Section name="Skills" className="relative">
      <SectionHeading>Skills</SectionHeading>
      <SectionSubTitle>My technical level</SectionSubTitle>
      <SectionContent className="flex flex-col lg:flex-row gap-10 h-fit">
        <div className="flex-1 flex flex-col gap-10">
          {/* front end */}
          <SkillList title="Frontend development">
            {SKILLS.frontend.map((item) => (
              <SkillItem key={item} item={item} />
            ))}
          </SkillList>
          {/* <LanguageBox /> */}
        </div>
        <div className="flex-1 flex flex-col gap-10">
          {/* <CodingBox /> */}
          {/* back end */}
          <SkillList
            title="Backend development"
            className="h-[300px] md:h-[542px]"
          >
            <p className="text-neutral-700 dark:text-gray-400">
              No item here yet. 🎯
            </p>
          </SkillList>
        </div>
      </SectionContent>
    </Section>
  );
}
