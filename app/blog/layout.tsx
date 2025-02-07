import type { Metadata } from "next";
import Header from "@/containers/templates/header";
import Footer from "@/containers/templates/footer";
import { FloatingNav } from "@/components/templates/global/floating-navbar";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Ali Rezaei | Front-End | React - Next.js",
  description: "",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <FloatingNav />
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
