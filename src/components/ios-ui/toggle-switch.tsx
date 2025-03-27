"use client";

import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface IOSToggleSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function IOSToggleSwitch({
  label,
  defaultChecked = false,
  onChange,
}: IOSToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
    onChange?.(checked);
  };

  return (
    <div className="flex items-center justify-between space-x-2">
      {label && <Label htmlFor="ios-switch">{label}</Label>}
      <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
        <Switch
          id="ios-switch"
          checked={checked}
          onCheckedChange={handleChange}
          className="h-6 w-11 bg-slate-200 data-[state=checked]:bg-blue-500"
        />
      </motion.div>
    </div>
  );
}
