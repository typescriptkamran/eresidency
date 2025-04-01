import { TranslationForm } from "@/components/admin/translation-form";
import { TranslationTable } from "@/components/admin/translation-table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllTranslations } from "@/i18n/settings";
import { Download, Upload } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function TranslationsPage() {
  const translations = await getAllTranslations();

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Translation Management
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage website translations across all supported languages
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
        </div>
      </div>

      <Tabs defaultValue="manage">
        <TabsList className="mb-4">
          <TabsTrigger value="manage">Manage Translations</TabsTrigger>
          <TabsTrigger value="add">Add New Translation</TabsTrigger>
        </TabsList>
        <TabsContent value="manage">
          <TranslationTable
            translations={translations}
            onUpdateTranslation={async (locale, key, value) => {
              "use server";
              // This will be implemented in the API route
              console.log("Update translation", { locale, key, value });
            }}
            onAutoTranslate={async (locale, key) => {
              "use server";
              // This will be implemented in the API route
              console.log("Auto translate", { locale, key });
            }}
          />
        </TabsContent>
        <TabsContent value="add">
          <TranslationForm
            onAddTranslation={async (key, values) => {
              "use server";
              // This will be implemented in the API route
              console.log("Add translation", { key, values });
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
