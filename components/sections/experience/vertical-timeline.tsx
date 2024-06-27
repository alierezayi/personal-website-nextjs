type VerticalTimelineItemType = {
  icon: React.ReactNode;
  date: string;
  title: string;
  location: string;
  description: string;
};

const VerticalTimelineItem = ({
  icon,
  date,
  title,
  location,
  description,
}: VerticalTimelineItemType) => {
  return (
    <div className="relative after:table after:clear-both group mb-14 last:mb-9">
      <span className="absolute top-0 left-0 w-10 h-10 rounded-full text-xl flex justify-center items-center border md:w-12 md:h-12 md:left-[calc(50%-22.5px)] bg-white dark:bg-slate-950">
        {icon}
      </span>
      <div className="relative ml-14 md:ml-0 md:w-[44%] md:group-even:float-right after:table after:clear-both group-last:hidden md:border rounded-xl px-3 py-0 md:px-6 md:py-5">
        <h3 className="text-base font-medium mb-2">{title}</h3>
        <p className="mb-2.5 text-xs font-medium">{location}</p>
        <p className="text-neutral-500 dark:text-gray-400 mb-2.5 md:mb-0">
          {description}
        </p>
        <span className="md:absolute w-full top-4 md:group-odd:left-[124%] md:group-even:left-auto md:group-even:text-right md:group-even:right-[124%] text-xs">
          {date}
        </span>
      </div>
    </div>
  );
};

const VerticalTimeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative before:absolute before:top-0 before:h-full before:left-[18px] before:w-1 before:rounded-full before:bg-gray-200 before:dark:bg-gray-700 before:md:left-1/2 after:table after:clear-both pt-5 pb-7">
      {children}
    </div>
  );
};

export { VerticalTimeline, VerticalTimelineItem };
