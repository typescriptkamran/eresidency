"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SegmentOption {
  label: string;
  value: string;
}

interface IOSSegmentedControlProps {
  options: SegmentOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function IOSSegmentedControl({
  options,
  defaultValue,
  onChange,
}: IOSSegmentedControlProps) {
  const [selected, setSelected] = useState(defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  // Find the index of the selected option
  const selectedIndex = options.findIndex(
    (option) => option.value === selected,
  );

  return (
    <div className="relative flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
      {/* Background indicator */}
      <motion.div
        className="absolute top-1 bottom-1 rounded-md bg-white dark:bg-slate-700 shadow-sm z-0"
        initial={false}
        animate={{
          left: `calc(${selectedIndex * (100 / options.length)}% + 4px)`,
          right: `calc(${100 - (selectedIndex + 1) * (100 / options.length)}% + 4px)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Options */}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={`relative z-10 flex-1 py-1.5 text-sm font-medium text-center transition-colors duration-200 ${selected === option.value ? "text-black dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
