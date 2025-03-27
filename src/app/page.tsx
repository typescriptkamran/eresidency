import { HeroSection } from "@/components/home/hero-section";
import { ValuePropositions } from "@/components/home/value-propositions";
import { ContentBlocks } from "@/components/home/content-blocks";
import { Testimonials } from "@/components/home/testimonials";
import { LeadMagnet } from "@/components/home/lead-magnet";
import { SEOContent } from "@/components/home/seo-content";
import { CTASection } from "@/components/home/cta-section";
import { IOSPreviewSection } from "@/components/home/ios-preview-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropositions />
        <ContentBlocks />
        <IOSPreviewSection />
        <SEOContent />
        <Testimonials />
        <LeadMagnet />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
