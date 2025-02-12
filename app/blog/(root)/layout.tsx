import type { Metadata } from "next";
import { FloatingNav } from "@/app/blog/_components/layouts/floating-navbar";
import Provider from "@/app/blog/(root)/provider";
import Header from "@/app/blog/_components/layouts/header";
import Footer from "@/app/blog/_components/layouts/footer";

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
