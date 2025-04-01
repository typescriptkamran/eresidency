"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { locales } from "@/i18n/settings";
import { Check, Edit, Search, X } from "lucide-react";
import { useState } from "react";

type TranslationKey = {
  key: string;
  path: string[];
  values: Record<string, string>;
};

type TranslationTableProps = {
  translations: Record<string, any>;
  onUpdateTranslation: (
    locale: string,
    key: string,
    value: string,
  ) => Promise<void>;
  onAutoTranslate: (locale: string, key: string) => Promise<void>;
};

export function TranslationTable({
  translations,
  onUpdateTranslation,
  onAutoTranslate,
}: TranslationTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocale, setSelectedLocale] = useState<string | "all">("all");
  const [editingCell, setEditingCell] = useState<{
    locale: string;
    key: string;
  } | null>(null);
  const [editValue, setEditValue] = useState("");

  // Extract all translation keys from the translations object
  const extractKeys = (obj: any, path: string[] = []): TranslationKey[] => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const currentPath = [...path, key];
      if (typeof value === "object" && value !== null) {
        return extractKeys(value, currentPath);
      }

      // Create a record of values for each locale
      const values: Record<string, string> = {};
      for (const locale of locales) {
        let currentObj = translations[locale];
        let found = true;

        // Navigate to the nested property
        for (const segment of currentPath.slice(0, -1)) {
          if (
            currentObj &&
            typeof currentObj === "object" &&
            segment in currentObj
          ) {
            currentObj = currentObj[segment];
          } else {
            found = false;
            break;
          }
        }

        // Get the value if found
        const lastKey = currentPath[currentPath.length - 1];
        if (
          found &&
          currentObj &&
          typeof currentObj === "object" &&
          lastKey in currentObj
        ) {
          values[locale] = currentObj[lastKey];
        } else {
          values[locale] = "";
        }
      }

      return [
        {
          key: currentPath.join("."),
          path: currentPath,
          values,
        },
      ];
    });
  };

  // Get all translation keys
  const allKeys = extractKeys(translations[locales[0]]);

  // Filter keys based on search term and selected locale
  const filteredKeys = allKeys.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.key.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocale =
      selectedLocale === "all" ||
      (selectedLocale &&
        (!item.values[selectedLocale] ||
          item.values[selectedLocale].trim() === ""));
    return matchesSearch && matchesLocale;
  });

  const handleEdit = (locale: string, key: string, currentValue: string) => {
    setEditingCell({ locale, key });
    setEditValue(currentValue);
  };

  const handleSave = async () => {
    if (editingCell) {
      await onUpdateTranslation(editingCell.locale, editingCell.key, editValue);
      setEditingCell(null);
    }
  };

  const handleCancel = () => {
    setEditingCell(null);
  };

  const handleAutoTranslate = async (locale: string, key: string) => {
    await onAutoTranslate(locale, key);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
          <Input
            type="text"
            placeholder="Search translations..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
          value={selectedLocale}
          onChange={(e) => setSelectedLocale(e.target.value as string | "all")}
        >
          <option value="all">All translations</option>
          <option value="missing">Missing translations</option>
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              Missing in {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Translation Key</TableHead>
              {locales.map((locale) => (
                <TableHead key={locale}>{locale.toUpperCase()}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredKeys.length > 0 ? (
              filteredKeys.map((item) => (
                <TableRow key={item.key}>
                  <TableCell className="font-mono text-xs">
                    {item.key}
                  </TableCell>
                  {locales.map((locale) => (
                    <TableCell key={locale}>
                      {editingCell?.locale === locale &&
                      editingCell?.key === item.key ? (
                        <div className="flex items-center space-x-2">
                          <Input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="min-w-[200px]"
                          />
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleSave}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleCancel}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between group">
                          <span
                            className={
                              item.values[locale] ? "" : "text-red-500 italic"
                            }
                          >
                            {item.values[locale] || "Missing translation"}
                          </span>
                          <div className="opacity-0 group-hover:opacity-100 flex space-x-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                handleEdit(
                                  locale,
                                  item.key,
                                  item.values[locale] || "",
                                )
                              }
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            {!item.values[locale] && (
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() =>
                                  handleAutoTranslate(locale, item.key)
                                }
                              >
                                <span className="text-xs font-bold">AI</span>
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={locales.length + 1}
                  className="text-center py-4"
                >
                  No translations found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
