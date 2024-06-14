import { Card } from "@/components/ui/card";
import { INFO } from "@/constants/refrences/info";

const Info = () => {
  return (
    <div className="flex justify-between gap-2 md:gap-5 mb-10">
      {INFO.map((item, index) => (
        <Card
          key={index}
          className="flex-1 py-5 flex flex-col items-center gap-2"
        >
          <item.icon className="w-5" />
          <h1 className="text-sm font-medium">
            <span>{item.title}</span>
          </h1>
          <div className="text-xs text-neutral-500 dark:text-gray-500">{item.description}</div>
        </Card>
      ))}
    </div>
  );
};

export default Info;
