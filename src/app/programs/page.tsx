import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="E-Residency Programs"
            subtitle="Explore detailed information about e-residency programs from various countries"
            imageSrc="https://images.unsplash.com/photo-1524055988636-436cfa46e59e?w=1200&q=80"
            imageAlt="Global e-residency programs"
            height="md:h-[350px]"
          />
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            Explore detailed information about e-residency programs from various
            countries. Compare benefits, requirements, and application processes
            to find the best fit for your business needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Estonia</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The pioneer of e-residency programs, offering a fully digital
                  business environment with access to the EU market.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      100% online company management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Digital signatures recognized across EU
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      0% corporate tax on reinvested profits
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Lithuania</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  A rapidly growing fintech hub offering e-residency with strong
                  banking infrastructure and EU market access.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Fintech-friendly regulatory environment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Fast company registration process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Excellent banking options for businesses
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Need help choosing the right e-residency program for your specific
              needs?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
