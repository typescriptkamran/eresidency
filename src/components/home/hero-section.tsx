import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Unlock Your Global Business Potential with Hassle-Free E-Residency
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-10">
          Transform Your Professional Life: Secure Digital Residency in Top
          European Countries in Just a Few Clicks
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/consultation">
            Discover Your E-Residency Path → Free Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
}
