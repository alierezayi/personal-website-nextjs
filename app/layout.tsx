import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Header from "@/containers/templates/header";
import Footer from "@/containers/templates/footer";
import Provider from "./provider";
import { FloatingNav } from "@/components/templates/global/floating-navbar";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen mx-auto text-sm px-5 max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl scrollbar",
          poppins.className
        )}
      >
        <Provider>
          <FloatingNav />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
