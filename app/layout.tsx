import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/containers/templates/header";
import Footer from "@/containers/templates/footer";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import Provider from "./provider";

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
          "min-h-screen container font-light text-base",
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
