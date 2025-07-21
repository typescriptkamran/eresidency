import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Clock,
  Users,
  Shield,
} from "lucide-react";

export default function ApplicationAssistancePage() {
  const serviceTiers = [
    {
      name: "Basic",
      price: "€299",
      description: "Essential support for your Global E-Residency application",
      features: [
        "Document review and preparation",
        "Application form guidance",
        "Basic eligibility assessment",
        "Email support",
        "Application submission assistance",
      ],
      recommended: false,
      color: "slate",
    },
    {
      name: "Standard",
      price: "€499",
      description: "Comprehensive support throughout the application process",
      features: [
        "All Basic tier features",
        "Dedicated application specialist",
        "Document translation assistance",
        "Priority email & chat support",
        "Application tracking and updates",
        "Post-approval guidance",
      ],
      recommended: true,
      color: "blue",
    },
    {
      name: "Premium",
      price: "€899",
      description: "End-to-end concierge service for a seamless experience",
      features: [
        "All Standard tier features",
        "VIP application handling",
        "Expedited processing (where available)",
        "24/7 priority support",
        "Video consultations",
        "Personalized application strategy",
        "Post-approval setup assistance",
        "1-year advisory support",
      ],
      recommended: false,
      color: "amber",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Global E-Residency Application Assistance
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Expert guidance and support to streamline your Global E-Residency
              application process and maximize your chances of approval.
            </p>
          </div>

          {/* Service Overview */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Why Choose Our Application Assistance?
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Navigating the Global E-Residency application process can be complex
                  and time-consuming. Our expert team provides personalized
                  guidance to ensure a smooth, efficient application experience
                  with the highest chance of success.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">
                        Expert Guidance:
                      </strong>{" "}
                      Our specialists have helped hundreds of applicants
                      successfully obtain Global E-Residency.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">
                        Time-Saving:
                      </strong>{" "}
                      We handle the complex paperwork and requirements so you
                      can focus on your business.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">
                        Higher Success Rate:
                      </strong>{" "}
                      Our clients enjoy approval rates significantly above
                      average.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">
                        Personalized Support:
                      </strong>{" "}
                      Tailored assistance based on your specific situation and
                      needs.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Initial Consultation
                      </h4>
                      <p className="text-white/80">
                        We assess your needs and eligibility, then recommend the
                        best Global E-Residency program for your situation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Document Preparation
                      </h4>
                      <p className="text-white/80">
                        Our team helps you prepare and review all necessary
                        documentation to ensure completeness and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Application Submission
                      </h4>
                      <p className="text-white/80">
                        We guide you through the submission process and ensure
                        all requirements are met.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Tracking & Follow-up
                      </h4>
                      <p className="text-white/80">
                        We monitor your application status and handle any
                        additional requests or clarifications needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Tiers */}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Choose Your Service Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border-t-4 ${tier.recommended ? "border-blue-500 dark:border-blue-400" : `border-${tier.color}-500 dark:border-${tier.color}-400`}`}
              >
                {tier.recommended && (
                  <div className="bg-blue-500 text-white text-center py-1 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                      {tier.price}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      one-time
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className={`h-5 w-5 ${tier.recommended ? "text-blue-500" : `text-${tier.color}-500`} mr-2 flex-shrink-0`}
                        />
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/consultation"
                    className={`block w-full py-2 px-4 rounded-md font-medium text-center ${tier.recommended ? "bg-blue-600 hover:bg-blue-700 text-white" : `bg-${tier.color}-100 dark:bg-${tier.color}-900/20 text-${tier.color}-700 dark:text-${tier.color}-300 hover:bg-${tier.color}-200 dark:hover:bg-${tier.color}-900/30`}`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Countries Covered */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Global E-Residency Programs We Support
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/programs/estonia"
                className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    EE
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Estonia
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Pioneer Global E-Residency program
                  </p>
                </div>
              </Link>
              <Link
                href="/programs/lithuania"
                className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    LT
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Lithuania
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Fintech-friendly environment
                  </p>
                </div>
              </Link>
              <Link
                href="/programs/portugal"
                className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">
                    PT
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Portugal
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Digital & physical residency
                  </p>
                </div>
              </Link>
              <Link
                href="/programs/ukraine"
                className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                    UA
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Ukraine
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    IT-focused framework
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      MK
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Michael K.
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Digital Nomad, USA
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "The application assistance service saved me countless hours
                  of research and stress. My Estonian Global E-Residency was approved
                  in just 3 weeks, and now I can run my business from anywhere!"
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      SL
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Sarah L.
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Fintech Entrepreneur, Singapore
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "After my first application was rejected, I turned to
                  Global E-Residency. Their team identified the issues, helped
                  me reapply, and I was approved for Lithuanian Global E-Residency.
                  Worth every penny!"
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      JP
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      João P.
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Software Developer, Brazil
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "The Premium package was exactly what I needed. My dedicated
                  specialist handled everything, from document translation to
                  expedited processing. Now I have both Portuguese Global E-Residency
                  and a path to physical residency."
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/stories"
                className="text-blue-600 dark:text-blue-500 font-medium hover:underline inline-flex items-center"
              >
                Read more success stories
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Global E-Residency Journey?
            </h2>
            <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto">
              Our experts are ready to guide you through every step of the
              process. Schedule a free consultation to discuss your needs and
              goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-md font-medium"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/faq"
                className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
