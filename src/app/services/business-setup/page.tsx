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
  Globe,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Setup - Global Global E-Residency | Launch Your EU Company Online",
  description:
    "Launch your EU-based business effortlessly with Global Global E-Residency's expert business setup services through Estonia's Global E-Residency program. 100% online, compliant, and cost-effective.",
};

export default function BusinessSetupPage() {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Access to the EU Market",
      description:
        "Operate within the European Union, opening doors to 27 member states and over 450 million consumers.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "100% Online Management",
      description:
        "Register and manage your business remotely using Estonia's secure digital infrastructure.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitive Tax System",
      description:
        "Benefit from Estonia's unique 0% corporate tax on reinvested profits, ideal for growth-focused businesses.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Global Banking Solutions",
      description:
        "Access EU business banking and payment platforms like Stripe and PayPal.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted Reputation",
      description:
        "Estonia ranks among the world's most digitally advanced nations, ensuring credibility for your business.",
    },
  ];

  const services = [
    {
      title: "Company Registration",
      description:
        "We guide you through the entire process of registering your Estonian company, ensuring compliance with local regulations.",
      features: [
        "Choose the optimal company structure (e.g., Private Limited Company, OÜ)",
        "Prepare and submit registration documents online",
        "Obtain a unique company registration code",
        "Set up a legal address in Estonia, required for all businesses",
      ],
    },
    {
      title: "Global E-Residency Application Assistance",
      description:
        "To manage an Estonian company, you'll need an Global E-Residency digital ID. We streamline the application process.",
      features: [
        "Providing step-by-step guidance on required documents",
        "Assisting with application submission to the Estonian authorities",
        "Coordinating the pickup of your Global E-Residency kit at embassies or designated locations",
        "Setting up your digital signature for secure online transactions",
      ],
    },
    {
      title: "Business Banking and Payment Solutions",
      description:
        "Accessing EU banking is a key benefit of Global E-Residency. We help you navigate the banking landscape.",
      features: [
        "Open a business bank account with trusted EU financial institutions",
        "Connect to payment gateways like Stripe, PayPal, and Wise for global transactions",
        "Navigate banking requirements, including KYC (Know Your Customer) processes",
        "Optimize your financial setup for international operations",
      ],
    },
    {
      title: "Tax and Compliance Support",
      description:
        "Estonia's business environment is transparent but requires adherence to EU regulations. We ensure your business stays compliant.",
      features: [
        "Registering your company for VAT (if applicable)",
        "Providing guidance on Estonia's tax system, including e-Tax filing",
        "Offering ongoing compliance support to meet annual reporting requirements",
        "Connecting you with trusted accountants for tailored tax advice",
      ],
    },
    {
      title: "Virtual Office Solutions",
      description:
        "A physical address in Estonia is mandatory for company registration. We provide compliant solutions.",
      features: [
        "A compliant legal address in Estonia",
        "Mail forwarding and scanning services",
        "Optional virtual office packages for professional correspondence",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Book a free consultation to discuss your business goals and needs. We'll tailor a setup plan for you.",
    },
    {
      number: "02",
      title: "Global E-Residency Application",
      description:
        "Apply for your Global E-Residency digital ID with our expert guidance. Approval typically takes 3–6 weeks.",
    },
    {
      number: "03",
      title: "Company Registration",
      description:
        "Once approved, we register your Estonian company online, usually within 1–3 business days.",
    },
    {
      number: "04",
      title: "Banking Setup",
      description:
        "Open your EU business bank account and connect to payment platforms with our support.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "Access our tools and consultancy services to manage compliance, taxes, and growth.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Our team has helped thousands of entrepreneurs from over 100 countries establish their EU businesses.",
    },
    {
      title: "Time-Saving Process",
      description:
        "We handle the paperwork and logistics, so you can focus on growing your business.",
    },
    {
      title: "AI-Powered Efficiency",
      description:
        "Our platform, optimized for iOS and Android, streamlines applications and document management.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees—just clear, affordable packages tailored to your needs.",
    },
    {
      title: "Global Network",
      description:
        "Join a community of over 20,000 e-residents for collaboration and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Business Setup Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Business Setup with Global Global E-Residency
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Launch your EU-based business effortlessly with Global
              Global E-Residency's expert business setup services. Through Estonia's
              innovative Global E-Residency program, we help digital nomads,
              freelancers, and entrepreneurs establish and manage a
              location-independent company entirely online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estonia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Set Up a Business in Estonia?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Estonia's Global E-Residency program is designed for global
              entrepreneurs, offering a transparent, digital-first business
              environment.
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
              Our Business Setup Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Global Global E-Residency provides comprehensive support to make your EU
              business setup simple, fast, and cost-effective.
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

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Starting your EU business with Global Global E-Residency is
              straightforward. Follow these steps to get up and running:
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefits of Choosing Global Global E-Residency
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
              Ready to Start Your EU Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward building your global,
              location-independent business today. With Global Global E-Residency,
              you're not just setting up a company—you're unlocking a world of
              opportunities in the EU and beyond.
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
                Download Our Free Guide
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
