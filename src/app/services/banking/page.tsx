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
  CreditCard,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Banking Services - Global E-Residency | EU Business Banking Solutions",
  description:
    "Open an Estonian business bank account with Global E-Residency. Access EU banking, global payment platforms, and digital financial solutions for e-Residents worldwide.",
};

export default function BankingServicesPage() {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "EU Banking Access",
      description:
        "Manage transactions within the European Union's single market, with SEPA (Single Euro Payments Area) compatibility.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Global Payment Solutions",
      description:
        "Connect to platforms like Stripe, PayPal, and Wise for effortless international payments.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Digital Convenience",
      description:
        "Control your finances online or via mobile apps, optimized for iOS and Android.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted Financial Ecosystem",
      description:
        "Estonia's transparent and secure banking environment supports businesses of all sizes.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability",
      description:
        "From startups to established companies, Estonian banking solutions grow with your business.",
    },
  ];

  const services = [
    {
      title: "Pre-Application Preparation",
      description:
        "We start by assessing your business needs to recommend the best banking options.",
      features: [
        "Reviews your company structure and e-Residency status to ensure eligibility",
        "Advises on suitable banks or fintech solutions (e.g., traditional banks, EMIs like Wise, or neobanks)",
        "Guides you on preparing essential documents, such as your e-Residency digital ID, company registration details, and business plan",
        "Provides tips to strengthen your application, especially for non-EU residents",
      ],
    },
    {
      title: "Navigating KYC Requirements",
      description:
        "Know Your Customer (KYC) processes are mandatory for opening a bank account. We simplify this step.",
      features: [
        "Explaining KYC requirements specific to each bank or financial institution",
        "Assisting with document collection, including proof of identity, address, and business activities",
        "Ensuring your application meets anti-money laundering (AML) and compliance standards",
        "Offering support for virtual or in-person KYC interviews, if required",
      ],
    },
    {
      title: "Bank Account Application Support",
      description:
        "We streamline the application process to save you time and reduce rejections.",
      features: [
        "Submitting your application to trusted Estonian banks or fintech providers",
        "Coordinating with financial institutions to track your application status",
        "Providing guidance on account types (e.g., multi-currency accounts, business accounts)",
        "Helping you set up online banking and mobile access once approved",
      ],
    },
    {
      title: "Payment Platform Integration",
      description:
        "Beyond traditional banking, we help you connect to global payment solutions essential for digital businesses.",
      features: [
        "Setting up accounts with payment gateways like Stripe, PayPal, and Wise",
        "Configuring payment systems to accept international transactions",
        "Optimizing your financial setup for low fees and efficient cross-border payments",
        "Troubleshooting integration issues to ensure smooth operations",
      ],
    },
    {
      title: "Ongoing Banking Support",
      description: "Our support continues after your account is opened.",
      features: [
        "Guidance on managing your account remotely using Estonia's digital tools",
        "Assistance with compliance, such as reporting requirements for tax authorities",
        "Advice on scaling your banking setup as your business grows",
        "Access to our network of financial experts for personalized consultancy",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Book a free consultation to discuss your banking needs and business goals. We'll recommend the best solutions for you.",
    },
    {
      number: "02",
      title: "Document Preparation",
      description:
        "We help you gather and organize required documents, ensuring compliance with KYC and bank requirements.",
    },
    {
      number: "03",
      title: "Application Submission",
      description:
        "We submit your application to your chosen bank or fintech provider and monitor its progress.",
    },
    {
      number: "04",
      title: "Account Activation",
      description:
        "Once approved, we guide you through setting up online banking, payment platforms, and digital tools.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "Access our expertise to manage your account, optimize finances, and stay compliant.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Navigation",
      description:
        "Our team has extensive experience helping e-Residents open accounts, even in complex cases.",
    },
    {
      title: "Time Efficiency",
      description:
        "We handle the paperwork and coordination, so you can focus on running your business.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We match you with banks or fintechs that suit your business model, whether you're a freelancer or a startup.",
    },
    {
      title: "Global Reach",
      description:
        "Connect to payment platforms that support transactions in over 150 countries.",
    },
    {
      title: "Secure and Compliant",
      description:
        "We ensure your application meets Estonia's strict regulatory standards for peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Banking Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Banking Services with Global E-Residency
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Opening a business bank account in Estonia is a critical step for
              e-Residents looking to operate an EU-based company. At Global
              E-Residency, we simplify the process, helping digital nomads,
              freelancers, and entrepreneurs access trusted EU banking solutions
              and global payment platforms. Our expert guidance ensures you can
              manage your finances seamlessly, no matter where you are in the
              world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Banking Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estonian Banking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Estonian Banking?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Estonia's digital-first economy and e-Residency program make it an
              ideal hub for international business banking. By opening a bank
              account in Estonia, you gain:
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
              How We Help You Open a Bank Account
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Global E-Residency provides end-to-end support to make opening an
              Estonian business bank account straightforward and efficient. Our
              services are tailored to the unique needs of e-Residents, ensuring
              compliance and minimizing delays.
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
              The Process: Step by Step
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Opening a business bank account with Global E-Residency is
              designed to be fast and hassle-free. Here's how it works:
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
              Benefits of Our Banking Services
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
              Ready to Open Your Estonian Bank Account?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Unlock the power of EU banking with Global E-Residency. Whether
              you're launching a startup, freelancing globally, or expanding
              your business, our banking services make it easy to manage your
              finances from anywhere.
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
                Download Our Free Banking Guide
              </Button>
            </div>
            <p className="mt-6 opacity-75">
              Need assistance?{" "}
              <span className="underline cursor-pointer">Contact Us</span> for
              personalized support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
