"use client";
import ArrowForward from "@/components/svgs/arrow-forward"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          alt="Global business cityscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Unlock Your Global Business Potential with Hassle-Free E-Residency
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform Your Professional Life: Secure Digital Residency in Top
          European Countries in Just a Few Clicks
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/consultation">
              Discover Your E-Residency Path 
                <ArrowForward className="size-6 mx-2"/>
                Free Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
