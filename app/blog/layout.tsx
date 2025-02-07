import type { Metadata } from "next";
import Footer from "@/app/blog/components/layouts/footer";
import { FloatingNav } from "@/components/global/floating-navbar";
import Provider from "@/app/blog/provider";
import Header from "@/app/blog/components/layouts/header";

export const metadata: Metadata = {
  title: "Blog - Ali Rezayi (Front-End Developer)",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <FloatingNav />
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
