import { Metadata } from "next";
import {
  CreditCard,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { HeroSection } from "@/components/services/hero-section";
import { BenefitsGrid } from "@/components/services/benefits-grid";
import { ServicesSection } from "@/components/services/services-section";
import { ProcessSteps } from "@/components/services/process-steps";
import { BenefitsList } from "@/components/services/benefits-list";
import { CTASection } from "@/components/services/cta-section";

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
      <HeroSection
        badge="Banking Services"
        title="Banking Services with Global E-Residency"
        description="Opening a business bank account in Estonia is a critical step for e-Residents looking to operate an EU-based company. At Global E-Residency, we simplify the process, helping digital nomads, freelancers, and entrepreneurs access trusted EU banking solutions and global payment platforms. Our expert guidance ensures you can manage your finances seamlessly, no matter where you are in the world."
        primaryButtonText="Book Free Consultation"
        secondaryButtonText="Download Banking Guide"
      />

      <BenefitsGrid
        title="Why Choose Estonian Banking?"
        subtitle="Estonia's digital-first economy and e-Residency program make it an ideal hub for international business banking. By opening a bank account in Estonia, you gain:"
        benefits={benefits}
      />

      <ServicesSection
        title="How We Help You Open a Bank Account"
        subtitle="Global E-Residency provides end-to-end support to make opening an Estonian business bank account straightforward and efficient. Our services are tailored to the unique needs of e-Residents, ensuring compliance and minimizing delays."
        services={services}
      />

      <ProcessSteps
        title="The Process: Step by Step"
        subtitle="Opening a business bank account with Global E-Residency is designed to be fast and hassle-free. Here's how it works:"
        steps={steps}
      />

      <BenefitsList
        title="Benefits of Our Banking Services"
        benefits={whyChooseUs}
      />

      <CTASection
        title="Ready to Open Your Estonian Bank Account?"
        description="Unlock the power of EU banking with Global E-Residency. Whether you're launching a startup, freelancing globally, or expanding your business, our banking services make it easy to manage your finances from anywhere."
        primaryButtonText="Book a Free Consultation"
        secondaryButtonText="Download Our Free Banking Guide"
        footerText="Need assistance? Contact Us for personalized support."
      />
    </div>
  );
}
