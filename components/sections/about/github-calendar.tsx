"use client"; // Next.js 13+ (if using App Router)

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
            username="alierezayi" // Replace with your GitHub username
            colorScheme={theme === "dark" ? "dark" : "light"} // Change to "light" if needed
            blockSize={13} // Adjust the size of the squares
            blockMargin={4} // Adjust spacing between blocks
            fontSize={14} // Adjust text size
            showWeekdayLabels={true} // Show weekday labels
          />
        </Card>
      </div>
    </div>
  );
};

export default GitHubStats;
