import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Unlock Your Global Business Potential Today
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Join thousands of entrepreneurs who have successfully expanded their
          business globally through Global E-Residency programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-blue-700"
          >
            <Link href="/consultation">Schedule Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
          >
            <Link href="/programs">Explore Global E-Residency Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
