"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const { theme } = useTheme();

  return (
    <div className="">
      <div className="mb-6">
        <CardTitle>GitHub Contributions</CardTitle>
      </div>
      <div className="">
        <Card className="p-5 w-full overflow-x-auto scrollbar">
          <GitHubCalendar
            username="alierezayi"
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={13}
            blockMargin={4}
            fontSize={14}
            showWeekdayLabels={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default GitHubStats;
