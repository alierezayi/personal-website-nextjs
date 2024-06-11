import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/containers/templates/header";
import Footer from "@/containers/templates/footer";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen container bg-gray-900 text-white font-light text-base",
          poppins.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
