import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our Global E-Residency platform transformed my freelance business. The AI-guided process made international expansion seamless and straightforward.",
      author: "Sarah M.",
      role: "Digital Nomad",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-slate-50 dark:bg-slate-800 border-none shadow-md"
            >
              <Quote className="h-10 w-10 text-blue-500 mb-4" />
              <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            "GDPR Compliant",
            "Secure Data Handling",
            "Verified Partnership Network",
            "24/7 Support",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full"
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
