interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
            {subtitle}
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
  );
}
