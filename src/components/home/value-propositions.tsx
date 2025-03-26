import { CheckCircle } from "lucide-react";

export function ValuePropositions() {
  const propositions = [
    {
      title: "AI-Powered Guidance",
      description:
        "Instant, personalized recommendations tailored to your business needs",
    },
    {
      title: "Comprehensive Country Comparisons",
      description:
        "Detailed insights into e-residency programs across multiple countries",
    },
    {
      title: "Expert Consultation",
      description: "Direct access to international business specialists",
    },
    {
      title: "Simplified Application Process",
      description:
        "End-to-end support from initial inquiry to successful application",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Why Choose Our E-Residency Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                  {prop.title}
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
