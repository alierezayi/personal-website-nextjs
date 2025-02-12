import ActiveSectionProvider from "@/app/blog/_context/active-section-context";

export default function BlogProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
