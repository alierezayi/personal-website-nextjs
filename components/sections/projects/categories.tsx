"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/constants/refrences/projects";
import useCookie from "@/hooks/useCookie";
import { ProjectCategoryType } from "@/lib/types";
import { useProjectCategory } from "@/hooks/useProjectCategory";

export default function Categories() {
  const [cookie, updateCookie] = useCookie("category", "all");
  const { category, setCategory } = useProjectCategory();

  useEffect(() => {
    setCategory(cookie);
    updateCategory(cookie);
  }, [cookie]);

  const updateCategory = (cat: ProjectCategoryType) => {
    setCategory(cat);
    updateCookie(cat);
  };

  return (
    <div className="flex justify-center items-center gap-5 mb-10">
      {CATEGORIES.map((cat, i) => (
        <Button
          variant={cat === category ? "default" : "ghost"}
          key={i}
          className={cn(
            "capitalize w-20",
            cat === category &&
              "bg-neutral-800 hover:bg-neutral-800/95 dark:hover:bg-white-200 dark:bg-white"
          )}
          onClick={() => updateCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
