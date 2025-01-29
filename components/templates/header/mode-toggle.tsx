"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun1 } from "iconsax-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-14 flex justify-end">
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Sun1 className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
