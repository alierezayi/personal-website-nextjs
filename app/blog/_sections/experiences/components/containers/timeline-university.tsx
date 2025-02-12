import { LinkPreview } from "@/components/ui/link-preview";

export default function UniversityTimeline() {
  return (
    <section>
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-semibold">Non-Profit Besat University</h2>
        <p
          className={`tracking-wider leading-relaxed text-black/80 dark:text-white/80 mt-5`}
        >
          I am currently pursuing a degree in Computer Engineering{" "}
          <LinkPreview
            url="https://besat.ac.ir/"
            className="font-semibold text-foreground"
          >
            Besat University
          </LinkPreview>
          , a non-profit institution located in Kerman. My academic journey has
          provided me with a strong foundation in software development,
          algorithms, and system architecture. Beyond my formal education, I am
          a self-taught programmer, continuously expanding my skills through
          independent learning and hands-on projects. My passion for coding
          drives me to explore new technologies, frameworks, and best practices
          to enhance my expertise in the ever-evolving world of software
          development.
        </p>
      </div>
    </section>
  );
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 mb-4">
      <div className="size-2 rounded-full bg-black/80 dark:bg-white/80 mt-[6px]" />
      <p className="flex-1 tracking-wider leading-relaxed text-black/80 dark:text-white/80">
        {children}
      </p>
    </div>
  );
};
