import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/containers/templates/header";
import Footer from "@/containers/templates/footer";
import Provider from "./provider";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

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
          "min-h-screen mx-auto text-sm px-5",
          "sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
          poppins.className
        )}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
