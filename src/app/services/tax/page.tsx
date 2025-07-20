import { Metadata } from "next";
import {
  Calculator,
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
      <HeroSection
        badge="Tax Services"
        title="Tax Services with Global E-Residency"
        description="Navigating taxes for your EU-based business doesn't have to be complicated. At Global E-Residency, we provide expert tax services to help digital nomads, freelancers, and entrepreneurs manage their obligations in Estonia's transparent and business-friendly tax system. Our goal is to ensure compliance while maximizing the benefits of Estonia's unique tax structure, so you can focus on growing your business."
        primaryButtonText="Book Free Consultation"
        secondaryButtonText="Download Tax Guide"
      />

      <BenefitsGrid
        title="Why Estonia's Tax System?"
        subtitle="Estonia's tax environment is designed to support global entrepreneurs through simplicity and innovation. Key advantages include:"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Tax Services"
        subtitle="Global E-Residency offers comprehensive tax support tailored to e-Residents, ensuring your business stays compliant and optimized. Our services include:"
        services={services}
      />

      <ProcessSteps
        title="How It Works"
        subtitle="Managing your taxes with Global E-Residency is simple and stress-free. Follow these steps to stay compliant:"
        steps={steps}
      />

      <BenefitsList
        title="Benefits of Our Tax Services"
        benefits={whyChooseUs}
      />

      <CTASection
        title="Ready to Simplify Your Taxes?"
        description="Take control of your business taxes with Global E-Residency. Our expert services make it easy to leverage Estonia's innovative tax system, giving you more time to grow your global business."
        primaryButtonText="Book a Free Consultation"
        secondaryButtonText="Download Our Free Tax Guide"
        footerText="Have questions? Contact Us for personalized support."
      />
    </div>
  );
}
