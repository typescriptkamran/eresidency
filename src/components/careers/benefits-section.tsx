import { Award } from "lucide-react";

interface BenefitsSectionProps {
  title: string;
  benefits: string[];
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
