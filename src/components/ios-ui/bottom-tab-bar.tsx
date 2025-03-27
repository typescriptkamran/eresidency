"use client";

import { motion } from "framer-motion";
import { Home, Search, Bell, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export function BottomTabBar() {
  const pathname = usePathname();

  const tabs: TabItem[] = [
    {
      icon: <Home className="h-6 w-6" />,
      label: "Home",
      href: "/",
    },
    {
      icon: <Search className="h-6 w-6" />,
      label: "Discover",
      href: "/programs",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      label: "Notifications",
      href: "/notifications",
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "Profile",
      href: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isActive ? -5 : 0 }}
                className={`flex flex-col items-center justify-center ${isActive ? "text-blue-500" : "text-slate-500 dark:text-slate-400"}`}
              >
                {tab.icon}
                <span className="text-xs mt-1">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
