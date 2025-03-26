import { ArrowRight, Globe, Lightbulb, CheckSquare } from "lucide-react";

export function ContentBlocks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Understanding E-Residency */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Understanding E-Residency
            </h2>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
            E-residency is your gateway to global business opportunities. It
            provides digital entrepreneurs, freelancers, and remote workers with
            a flexible, location-independent business solution. Our platform
            demystifies the process, offering comprehensive support for your
            international business journey.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-amber-500 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              How It Works
            </h2>
          </div>
          <ol className="space-y-4 mt-6">
            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                  Personalized Assessment
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our AI-driven system analyzes your unique business
                  requirements
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                  Country Matching
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Receive tailored recommendations for the most suitable
                  e-residency options
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </span>
              <div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                  Expert Consultation
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Connect with specialized advisors
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </span>
              <div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                  Streamlined Application
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Guided support through every step of the process
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Benefits of E-Residency */}
        <div>
          <div className="flex items-center mb-4">
            <CheckSquare className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Benefits of E-Residency
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              "Establish a EU-based digital business",
              "Simplify international banking and transactions",
              "Access to global market opportunities",
              "Flexible business structure",
              "Minimal physical presence requirements",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
