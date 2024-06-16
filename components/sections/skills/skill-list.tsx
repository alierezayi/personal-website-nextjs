import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type SkillPartType = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SkillList({ title, children, className }: SkillPartType) {
  return (
    <div className={cn("rounded-2xl px-10 py-10 border", className)}>
      <h3 className="text-base font-semibold mb-7">{title}</h3>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">{children}</div>
    </div>
  );
}
export function SkillItem({ item }: { item: string }) {
  return (
    <div className="flex gap-1 items-center font-medium">
      <CircleCheck className="w-4" />
      <span>{item}</span>
    </div>
  );
}
