"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IOSSegmentedControl } from "./segmented-control";

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface IOSTabViewProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export function IOSTabView({ tabs, defaultTab }: IOSTabViewProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const options = tabs.map((tab) => ({
    label: tab.label,
    value: tab.value,
  }));

  return (
    <div className="space-y-4">
      <IOSSegmentedControl
        options={options}
        defaultValue={activeTab}
        onChange={handleTabChange}
      />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => {
            if (tab.value === activeTab) {
              return (
                <motion.div
                  key={tab.value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
