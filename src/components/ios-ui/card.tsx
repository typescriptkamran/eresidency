import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface IOSCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function IOSCard({
  title,
  description,
  imageSrc,
  icon,
  onClick,
}: IOSCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="touch-manipulation"
    >
      <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-slate-200/60 dark:border-slate-700/60 rounded-2xl">
        {imageSrc && (
          <div className="relative w-full h-48">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex items-center gap-3">
            {icon && <div className="text-blue-500">{icon}</div>}
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </CardHeader>
        {description && (
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
