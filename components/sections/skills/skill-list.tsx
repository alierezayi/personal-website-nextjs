import { BgGridSmall } from "@/components/ui/backgrounds";
import { cn } from "@/lib/utils";
import { Squircle } from "lucide-react";


type SkillListType = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SkillList({ title, children, className }: SkillListType) {
  return (
    <div className={cn("rounded-2xl px-10 py-10 border relative", className)}>
      <BgGridSmall />
      <h3 className="text-base font-semibold mb-7">{title}</h3>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">{children}</div>
    </div>
  );
}

export function SkillItem({ item }: { item: string }) {
  return (
    <div className="flex gap-1.5 items-center">
      <Squircle className="w-3.5" />
      <span className="font-medium">{item}</span>
    </div>
  );
}
