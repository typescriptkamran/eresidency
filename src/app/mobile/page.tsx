"use client";

import { useState } from "react";
import { StatusBar } from "@/components/ios-ui/status-bar";
import { BottomTabBar } from "@/components/ios-ui/bottom-tab-bar";
import { IOSCard } from "@/components/ios-ui/card";
import { IOSButton } from "@/components/ios-ui/button";
import { IOSToggleSwitch } from "@/components/ios-ui/toggle-switch";
import { IOSTabView } from "@/components/ios-ui/tab-view";
import { IOSSheetModal } from "@/components/ios-ui/sheet-modal";
import { Globe, Map, Settings, Info, ArrowRight } from "lucide-react";

export default function MobilePage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const programCards = [
    {
      title: "Estonia E-Residency",
      description: "Digital nomad's favorite for EU business operations",
      imageSrc:
        "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=800&q=80",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Lithuania E-Residency",
      description: "Emerging fintech hub with streamlined banking",
      imageSrc:
        "https://images.unsplash.com/photo-1565127453543-ad97b93afb61?w=800&q=80",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Portugal E-Residency",
      description: "Perfect for digital nomads seeking EU lifestyle",
      imageSrc:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  const tabs = [
    {
      label: "Programs",
      value: "programs",
      content: (
        <div className="space-y-4">
          {programCards.map((card, index) => (
            <IOSCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              icon={card.icon}
              onClick={() => setIsSheetOpen(true)}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Services",
      value: "services",
      content: (
        <div className="space-y-4">
          <IOSCard
            title="Consultation Services"
            description="Expert guidance on choosing the right e-residency program"
            icon={<Info className="h-5 w-5" />}
          />
          <IOSCard
            title="Application Assistance"
            description="End-to-end support for your e-residency application"
            icon={<Settings className="h-5 w-5" />}
          />
          <IOSCard
            title="Business Setup"
            description="Complete company formation and banking solutions"
            icon={<Map className="h-5 w-5" />}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* iOS Status Bar */}
      <StatusBar />

      {/* Content */}
      <div className="px-5 pt-2 pb-24">
        <h1 className="text-2xl font-bold mb-2">E-Residency Programs</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Explore global opportunities with digital residency
        </p>

        {/* Tab View */}
        <IOSTabView tabs={tabs} />

        {/* Settings Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl p-4 space-y-4">
          <h2 className="font-semibold">Preferences</h2>
          <IOSToggleSwitch label="Receive Notifications" />
          <IOSToggleSwitch label="Dark Mode" defaultChecked={true} />
          <IOSToggleSwitch label="Location Services" />
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <IOSButton
            variant="primary"
            rounded
            className="w-full"
            icon={<ArrowRight className="h-4 w-4" />}
            onClick={() => setIsSheetOpen(true)}
          >
            Get Started
          </IOSButton>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar />

      {/* Sheet Modal */}
      <IOSSheetModal
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Program Details"
      >
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Estonia E-Residency</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Estonia's e-Residency program allows digital entrepreneurs to
            establish and manage an EU-based business entirely online. As an
            e-resident, you can access Estonia's digital services, open a
            business bank account, and run your company remotely.
          </p>

          <h4 className="text-lg font-medium mt-4">Benefits</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
            <li>Establish an EU company online</li>
            <li>Digital signatures and document authentication</li>
            <li>Remote business management</li>
            <li>Access to EU banking and payment services</li>
            <li>Low administrative burden</li>
          </ul>

          <h4 className="text-lg font-medium mt-4">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
            <li>Valid passport or ID card</li>
            <li>Digital photo</li>
            <li>Statement of purpose</li>
            <li>Payment of state fee (€120)</li>
            <li>No Estonian residency required</li>
          </ul>

          <div className="pt-4">
            <IOSButton variant="primary" className="w-full">
              Apply Now
            </IOSButton>
          </div>
        </div>
      </IOSSheetModal>
    </div>
  );
}
