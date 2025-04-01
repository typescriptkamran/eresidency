import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { locales } from "@/i18n/settings";
import { ArrowRight, Globe, Languages, Settings } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage your website content and settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <Languages className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-4" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Translation Management
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Manage translations for {locales.length} languages
              </p>
            </div>
          </div>
          <Button asChild className="w-full mt-2">
            <Link
              href="/admin/translations"
              className="flex items-center justify-center"
            >
              Manage Translations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-4" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Content Management
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Manage website content and pages
              </p>
            </div>
          </div>
          <Button asChild className="w-full mt-2" variant="outline">
            <Link href="#" className="flex items-center justify-center">
              Coming Soon
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <Settings className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-4" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Site Settings
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Configure website settings and preferences
              </p>
            </div>
          </div>
          <Button asChild className="w-full mt-2" variant="outline">
            <Link href="#" className="flex items-center justify-center">
              Coming Soon
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
