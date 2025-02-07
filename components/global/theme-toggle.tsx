"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun1 } from "iconsax-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const light = () => setTheme("light");
  const dark = () => setTheme("dark");

  return (
    <div className="w-14 flex justify-end">
      {theme === "dark" ? (
        <Button
          onClick={light}
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Sun1 className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      ) : (
        <Button
          onClick={dark}
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      )}
    </div>
  );
}
