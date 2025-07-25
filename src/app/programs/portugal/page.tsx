import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";

export default function PortugalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/programs"
              className="flex items-center text-amber-600 dark:text-amber-500 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Programs
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                Portugal Global E-Residency Program
              </h1>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Gateway to European Lifestyle & Business
                  </h2>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    Portugal's Global E-Residency program combines digital business
                    opportunities with a pathway to physical residency. With its
                    favorable tax regime, excellent quality of life, and
                    strategic location, Portugal offers entrepreneurs a unique
                    blend of digital and physical presence options.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Benefits
                  </h3>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Digital & Physical Options
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Unique program offering both digital business presence
                          and potential pathway to physical residency.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Non-Habitual Resident Tax Regime
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Potential tax benefits for new residents, including
                          reduced rates on certain income types.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          EU Market Access
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Establish an EU-based business with access to the
                          European single market.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Digital Nomad Friendly
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Excellent infrastructure and dedicated visa options
                          for remote workers and digital entrepreneurs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Startup Ecosystem
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Vibrant startup scene with government incentives and
                          support programs.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Application Process
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Apply through Portugal's digital residency portal</li>
                    <li>Pay the application fee (€100-150)</li>
                    <li>
                      Submit required documentation and undergo verification
                    </li>
                    <li>Receive digital identity credentials</li>
                    <li>
                      Register your business through Portugal's simplified
                      company formation process
                    </li>
                    <li>
                      Optional: Apply for physical residency through
                      complementary programs
                    </li>
                  </ol>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Requirements
                  </h3>

                  <ul className="list-disc list-inside space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Valid passport or government-issued ID</li>
                    <li>Digital photo</li>
                    <li>Business plan or purpose statement</li>
                    <li>Payment method for application fee</li>
                    <li>Clean criminal record</li>
                    <li>Proof of income (for physical residency options)</li>
                  </ul>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 sticky top-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      Ready to Get Started?
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      Our team of experts can guide you through the entire
                      Portuguese Global E-Residency application process and help set up
                      your business.
                    </p>

                    <Link
                      href="/consultation"
                      className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-md font-medium text-center mb-4"
                    >
                      Schedule a Consultation
                    </Link>

                    <Link
                      href="/services/application"
                      className="block w-full bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 py-3 px-4 rounded-md font-medium text-center mb-6"
                    >
                      Application Assistance
                    </Link>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                        Resources
                      </h4>

                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/resources/ebooks"
                            className="flex items-center text-amber-600 dark:text-amber-500 hover:underline"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Portugal Global E-Residency Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center text-amber-600 dark:text-amber-500 hover:underline"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Application Checklist
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Compare with Other Global E-Residency Programs
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Not sure if Portugal is the right fit for your business needs?
              Compare with other available programs.
            </p>
            <Link
              href="/comparisons"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium"
            >
              View Comparisons
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
