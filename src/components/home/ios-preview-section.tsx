import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export function IOSPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <Smartphone className="h-4 w-4 mr-2" />
              New Experience
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Try Our iOS 15-Inspired <br />
              Mobile Experience
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              We've created a beautiful, intuitive mobile interface using the
              iOS 15 design language. Experience our e-residency information in
              a touch-friendly, animated environment optimized for mobile
              devices.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/mobile">
                  Try Mobile Version <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] bg-slate-900 rounded-[40px] border-4 border-slate-800 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-10"></div>
              <iframe
                src="/mobile"
                className="w-full h-full"
                title="iOS Mobile Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
