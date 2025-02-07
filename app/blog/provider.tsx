import ActiveSectionProvider from "@/context/active-section-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
