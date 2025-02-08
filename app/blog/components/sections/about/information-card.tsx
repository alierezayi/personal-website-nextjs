import { INFO } from "@/app/blog/constants/data/info";

const Info = () => {
  return (
    <div className="flex justify-between gap-2 md:gap-5 mb-10">
      {INFO.map((item, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center gap-2 border py-4 px-2 rounded-lg"
        >
          <item.icon className="w-5" />
          <h1 className="text-sm font-medium">
            <span>{item.title}</span>
          </h1>
          <div className="text-xs text-neutral-500 dark:text-gray-400">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
