import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";

export function LeadMagnet() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Free E-Book
              </h3>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              The Ultimate Guide to E-Residency for Global Entrepreneurs
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Download our comprehensive guide and learn everything you need to
              know about establishing your global business through e-residency.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Download Free Guide
              </Button>
            </form>
          </div>
          <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 p-2 rounded-md shadow-lg transform rotate-3">
              <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded border-2 border-slate-200 dark:border-slate-600">
                <h4 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-4">
                  Inside the Guide:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Step-by-step application process",
                    "Country comparison charts",
                    "Tax optimization strategies",
                    "Banking solutions",
                    "Success stories & case studies",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
