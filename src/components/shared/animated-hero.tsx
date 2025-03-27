"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: string;
  overlayColor?: string;
  textColor?: string;
  alignment?: "left" | "center" | "right";
}

export function AnimatedHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "md:h-96",
  overlayColor = "from-slate-900/80 to-slate-900/40",
  textColor = "text-white",
  alignment = "center",
}: AnimatedHeroProps) {
  const textAlignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const alignmentClass = textAlignmentClasses[alignment];

  return (
    <div
      className={`relative w-full ${height} overflow-hidden rounded-lg mb-12`}
    >
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${overlayColor} z-10`}
      ></div>

      {/* Content */}
      <div className="relative z-20 h-full w-full px-6 sm:px-12 flex flex-col justify-center">
        <div className={`max-w-4xl mx-auto flex flex-col ${alignmentClass}`}>
          <motion.h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className={`text-lg md:text-xl ${textColor} max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
