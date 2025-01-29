"use client"; // Next.js 13+ (if using App Router)

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const { theme } = useTheme();

  return (
    <div className="">
      <CardHeader>
        <CardTitle>GitHub Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <GitHubCalendar
          style={{
            width: "100%",
          }}
          username="alierezayi" // Replace with your GitHub username
          colorScheme={theme === "dark" ? "dark" : "light"} // Change to "light" if needed
          blockSize={10} // Adjust the size of the squares
          blockMargin={4} // Adjust spacing between blocks
          fontSize={14} // Adjust text size
          showWeekdayLabels={true} // Show weekday labels
        />
      </CardContent>
    </div>
  );
};

export default GitHubStats;
