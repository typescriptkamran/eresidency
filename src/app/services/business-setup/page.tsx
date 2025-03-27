import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Building, FileText, CreditCard, Users, Shield } from "lucide-react";

export default function BusinessSetupPage() {
  const serviceTiers = [
    {
      name: "Basic Setup",
      price: "€499",
      description: "Essential services to establish your e-resident business",
      features: [
        "Company name reservation",
        "Standard company registration",
        "Registered address (1 year)",
        "Basic legal compliance setup",
        "Email support",
      ],
      recommended: false,
      color: "slate",
    },
    {
      name: "Standard Setup",
      price: "€999",
      description: "Comprehensive business establishment package",
      features: [
        "All Basic Setup features",
        "Expedited company registration",
        "Business bank account assistance",
        "Tax registration",
        "Accounting setup consultation",
        "Digital signature setup",
        "Priority email & chat support",
      ],
      recommended: true,
      color: "blue",
    },
    {
      name: "Premium Setup",
      price: "€1,999",
      description: "End-to-end business launch with ongoing support",
      features: [
        "All Standard Setup features",
        "VIP company registration",
        "Multiple bank account options",
        "Tax optimization consultation",
        "Business plan review",
        "Compliance monitoring (1 year)",
        "Virtual office services",
        "24/7 priority support",
        "Quarterly business review",
      ],
      recommended: false,
      color: "amber",
    },
  ];

  const businessTypes = [
    {
      name: "Private Limited Company (OÜ/UAB/LDA)",
      description: "The most common business entity for e-residents, offering limited liability protection and flexible management.",
      features: [
        "Limited liability protection",
        "Flexible ownership structure",
        "Suitable for most business activities",
        "Relatively low minimum capital requirements",
        "Simplified governance for small companies",
      ],
      icon: Building,
    },
    {
      name: "Sole Proprietorship",
      description: "A simple business structure for individual entrepreneurs with lower compliance requirements.",
      features: [
        "Simple and quick to establish",
        "Lower administrative burden",
        "Direct control over business",
        "Simplified accounting in some jurisdictions",
        "No minimum capital requirements",
      ],
      icon: Users,
    },
    {
      name: "Branch Office",
      description: "An extension of your existing company in the e-residency country, not a separate legal entity.",
      features: [
        "Represents foreign parent company",
        "Not a separate legal entity",
        "Parent company maintains liability",
        "Suitable for testing new markets",
        "Simplified exit if needed",
      ],
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              E-Residency Business Setup Services
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive assistance to establish and launch your business in your chosen e-residency jurisdiction.
            </p>
          </div>

          {/* Service Overview */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Streamlined Business Establishment
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Setting up a business as an e-resident involves navigating unfamiliar legal systems, banking requirements, and compliance obligations. Our expert team handles the complexities so you can focus on growing your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">End-to-End Support:</strong> From company registration to banking setup and compliance, we handle every aspect of your business establishment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">Local Expertise:</strong> Our specialists understand the nuances of each e-residency jurisdiction's business environment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">Time & Cost Efficiency:</strong> Avoid costly mistakes and delays with professional guidance from day one.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">Future-Proof Setup:</strong> We establish your business with scalability and compliance in mind.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Business Setup Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Strategy Consultation</h4>
                      <p className="text-white/80">We analyze your business needs and recommend the optimal structure and jurisdiction.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Company Formation</h4>
                      <p className="text-white/80">We handle all documentation and registration procedures to establish your legal entity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Banking & Financial Setup</h4>
                      <p className="text-white/80">We assist with business account opening and payment processing solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Compliance & Operations</h4>
                      <p className="text-white/80">We ensure your business meets all legal requirements and is ready to operate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Types */}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Business Entity Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {businessTypes.map((type) => (
              <div 
                key={type.name}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {type.name}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {type.description}
                  </p>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Service Tiers */}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Choose Your Business Setup Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border-t-4 ${tier.recommended ? 'border-blue-500 dark:border-blue-400' : `border-${tier.color}-500 dark:border-${tier.color}-400`}`}
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
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                    <span className="text-slate-600 dark:text-slate-400"> one-time</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 ${tier.recommended ? 'text-blue-500' : `text-${tier.color}-500`} mr-2 flex-shrink-0`} />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/consultation"
                    className={`block w-full py-2 px-4 rounded-md font-medium text-center ${tier.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : `bg-${tier.color}-100 dark:bg-${tier.color}-900/20 text-${tier.color}-700 dark:text-${tier.color}-300 hover:bg-${tier.color}-200 dark:hover