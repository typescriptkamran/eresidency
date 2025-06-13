import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Calculator,
  FileText,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Tax Services - Global E-Residency | Estonian Tax Management for EU Businesses",
  description:
    "Expert tax services for EU-based businesses in Estonia. Navigate Estonia's 0% corporate tax system with Global E-Residency's comprehensive tax support and compliance services.",
};

export default function TaxServicesPage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "0% Corporate Tax on Reinvested Profits",
      description:
        "Pay no corporate income tax until profits are distributed, ideal for startups and growth-focused businesses.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Transparent e-Tax System",
      description:
        "File taxes online with Estonia's user-friendly digital platform, saving time and reducing paperwork.",
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Competitive VAT Structure",
      description:
        "Benefit from clear VAT rules within the EU, with support for registration and compliance.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Compatibility",
      description:
        "Estonia's tax system aligns with international standards, making it easy to operate across borders.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Double Taxation",
      description:
        "Estonia has tax treaties with over 60 countries, minimizing tax liabilities for global businesses.",
    },
  ];

  const services = [
    {
      title: "Tax Consultation and Planning",
      description:
        "We help you understand Estonia's tax system and plan for success.",
      features: [
        "Personalized consultations to assess your business's tax obligations",
        "Guidance on tax optimization strategies, leveraging Estonia's 0% corporate tax on reinvested profits",
        "Advice on structuring your business to minimize tax liabilities",
        "Insights into international tax treaties to avoid double taxation",
      ],
    },
    {
      title: "VAT Registration and Compliance",
      description:
        "If your business operates within the EU, VAT registration may be required.",
      features: [
        "Determining if VAT registration is necessary based on your business activities",
        "Registering your company for VAT with the Estonian Tax and Customs Board",
        "Preparing and filing VAT returns, ensuring compliance with EU regulations",
        "Advising on VAT exemptions and cross-border transactions",
      ],
    },
    {
      title: "e-Tax Filing Support",
      description:
        "Estonia's digital e-Tax platform makes tax filing efficient, and we make it even easier.",
      features: [
        "Step-by-step guidance on using the e-Tax system with your e-Residency digital ID",
        "Assistance with preparing and submitting annual tax reports",
        "Support for filing corporate income tax, VAT, and other required declarations",
        "Troubleshooting technical issues to ensure timely submissions",
      ],
    },
    {
      title: "Ongoing Compliance Monitoring",
      description:
        "Staying compliant with Estonian and EU tax laws is critical.",
      features: [
        "Monitoring deadlines for tax filings and reporting requirements",
        "Providing reminders for annual financial statements and tax obligations",
        "Ensuring compliance with EU anti-money laundering (AML) and reporting standards",
        "Offering updates on changes to Estonian tax regulations",
      ],
    },
    {
      title: "Accounting and Bookkeeping Referrals",
      description:
        "For businesses needing detailed financial management, we connect you with trusted partners.",
      features: [
        "Referrals to certified accountants familiar with e-Residency businesses",
        "Guidance on selecting bookkeeping software compatible with Estonian tax requirements",
        "Support for integrating accounting tools with the e-Tax platform",
        "Advice on maintaining accurate financial records for audits",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Book a free consultation to discuss your business and tax needs. We'll create a tailored tax plan.",
    },
    {
      number: "02",
      title: "Tax Setup",
      description:
        "We assist with VAT registration (if needed) and set up your e-Tax account using your e-Residency digital ID.",
    },
    {
      number: "03",
      title: "Filing Support",
      description:
        "We guide you through preparing and submitting tax returns, ensuring accuracy and compliance.",
    },
    {
      number: "04",
      title: "Ongoing Assistance",
      description:
        "Access our expertise for compliance monitoring, accounting referrals, and tax optimization.",
    },
    {
      number: "05",
      title: "Growth Planning",
      description:
        "We provide ongoing advice to align your tax strategy with your business expansion goals.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Our team specializes in Estonia's tax system, ensuring accurate and up-to-date advice.",
    },
    {
      title: "Time Savings",
      description:
        "We handle the complexities of tax compliance, so you can focus on your business.",
    },
    {
      title: "Digital Efficiency",
      description:
        "Leverage our AI-powered platform, optimized for iOS and Android, to streamline tax management.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Transparent pricing with no hidden fees, tailored to your business needs.",
    },
    {
      title: "Peace of Mind",
      description:
        "Stay compliant with Estonian and EU regulations, avoiding penalties and surprises.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Tax Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Tax Services with Global E-Residency
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Navigating taxes for your EU-based business doesn't have to be
              complicated. At Global E-Residency, we provide expert tax services
              to help digital nomads, freelancers, and entrepreneurs manage
              their obligations in Estonia's transparent and business-friendly
              tax system. Our goal is to ensure compliance while maximizing the
              benefits of Estonia's unique tax structure, so you can focus on
              growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Tax Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estonia's Tax System Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Estonia's Tax System?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Estonia's tax environment is designed to support global
              entrepreneurs through simplicity and innovation. Key advantages
              include:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-blue-200 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Tax Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Global E-Residency offers comprehensive tax support tailored to
              e-Residents, ensuring your business stays compliant and optimized.
              Our services include:
            </p>

            <div className="space-y-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {index + 1}. {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Managing your taxes with Global E-Residency is simple and
              stress-free. Follow these steps to stay compliant:
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefits of Our Tax Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Taxes?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take control of your business taxes with Global E-Residency. Our
              expert services make it easy to leverage Estonia's innovative tax
              system, giving you more time to grow your global business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Download Our Free Tax Guide
              </Button>
            </div>
            <p className="mt-6 opacity-75">
              Have questions?{" "}
              <span className="underline cursor-pointer">Contact Us</span> for
              personalized support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
