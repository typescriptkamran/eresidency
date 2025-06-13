import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  footerText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  footerText,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          </div>
          {footerText && <p className="mt-6 opacity-75">{footerText}</p>}
        </div>
      </div>
    </section>
  );
}
