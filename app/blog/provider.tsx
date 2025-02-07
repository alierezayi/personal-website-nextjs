import ActiveSectionProvider from "@/context/active-section-context";

export default function BlogProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
