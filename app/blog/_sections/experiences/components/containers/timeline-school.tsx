export default function SchoolTimeline() {
  const images = [
    "/images/projects/crm/cover.png",
    "/images/projects/crm/image-1.png",
    "/images/projects/crm/image-2.png",
    "/images/projects/crm/image-3.png",
  ];

  return (
    <section>
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-semibold">
          Dr. Ali Shariati&rsquo;s High school
        </h2>
        <p
          className={`tracking-wider leading-relaxed text-black/80 dark:text-white/80 mt-5`}
        >
          After 3 years of study, I received a diploma in mathematics at Dr. Ali
          Shariati&rsquo;s High school.
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
