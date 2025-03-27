import { Signal, Battery, Wifi } from "lucide-react";

export function StatusBar() {
  // Get current time in iOS format (10:30)
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex justify-between items-center px-5 py-2 bg-transparent text-black dark:text-white">
      <div className="text-sm font-medium">{time}</div>
      <div className="flex items-center space-x-1">
        <Signal className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <Battery className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}
