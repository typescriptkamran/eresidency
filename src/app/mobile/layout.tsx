import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS 15 Mobile Experience | E-Residency Experts",
  description:
    "Experience our e-residency information in an iOS 15-inspired mobile interface",
};

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-md mx-auto bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
      {children}
    </div>
  );
}
