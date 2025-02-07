import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Provider from "./provider";
import { poppins } from "@/configs/font";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ali Rezaei | Front-End | React - Next.js",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen mx-auto text-sm px-5 max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl scrollbar antialiased",
          poppins.className
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
