import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="E-Residency Program Comparisons"
            subtitle="Compare different e-residency programs side by side to find the best option for your business needs"
            imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80"
            imageAlt="Comparison of different business options"
            height="md:h-[350px]"
          />
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            Compare different e-residency programs side by side to find the best
            option for your business needs. Our comprehensive comparison tool
            helps you evaluate key factors like tax benefits, setup costs, and
            ongoing requirements.
          </p>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Compare Key Features
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="p-4 text-left border-b border-slate-200 dark:border-slate-600">
                      Features
                    </th>
                    <th className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Estonia
                    </th>
                    <th className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Lithuania
                    </th>
                    <th className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Portugal
                    </th>
                    <th className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Ukraine
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-slate-200 dark:border-slate-600 font-medium">
                      Application Fee
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      €100-120
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      €90-150
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      €75-100
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      €50-80
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-200 dark:border-slate-600 font-medium">
                      Processing Time
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      2-4 weeks
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      3-6 weeks
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      4-8 weeks
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      1-3 weeks
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-200 dark:border-slate-600 font-medium">
                      Corporate Tax
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      0% on reinvested profits
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      15% standard rate
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      21% standard rate
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      18% standard rate
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-200 dark:border-slate-600 font-medium">
                      Digital Infrastructure
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Excellent
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Very Good
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Good
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Developing
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-200 dark:border-slate-600 font-medium">
                      Banking Options
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Extensive
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Excellent
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Good
                    </td>
                    <td className="p-4 text-center border-b border-slate-200 dark:border-slate-600">
                      Limited
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Tax Benefits Comparison
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Different e-residency programs offer varying tax advantages.
                Estonia's 0% corporate tax on reinvested profits stands out,
                while Lithuania offers attractive tax incentives for startups
                and tech companies.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/tax-guide">View Detailed Tax Guide</Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Setup Process Comparison
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The complexity and timeline for setting up your business varies
                by country. Estonia offers the most streamlined process, while
                Portugal may require more documentation and in-person visits.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/setup-guide">View Setup Guide</Link>
              </Button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Need Help Choosing the Right Program?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              Our e-residency experts can provide personalized guidance based on
              your specific business needs and goals.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/consultation">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
