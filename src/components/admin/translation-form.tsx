"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { locales } from "@/i18n/settings";
import { useState } from "react";

type TranslationFormProps = {
  onAddTranslation: (
    key: string,
    values: Record<string, string>,
  ) => Promise<void>;
};

export function TranslationForm({ onAddTranslation }: TranslationFormProps) {
  const [key, setKey] = useState("");
  const [values, setValues] = useState<Record<string, string>>(
    locales.reduce((acc, locale) => ({ ...acc, [locale]: "" }), {}),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!key) {
      setError("Translation key is required");
      return;
    }

    if (!key.includes(".")) {
      setError(
        "Translation key must be in dot notation format (e.g. common.buttons.save)",
      );
      return;
    }

    // Check if at least one locale has a value
    const hasValue = Object.values(values).some((value) => value.trim() !== "");
    if (!hasValue) {
      setError("At least one translation value is required");
      return;
    }

    try {
      setIsSubmitting(true);
      await onAddTranslation(key, values);

      // Reset form
      setKey("");
      setValues(
        locales.reduce((acc, locale) => ({ ...acc, [locale]: "" }), {}),
      );
    } catch (err) {
      setError("Failed to add translation");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-md bg-white dark:bg-slate-950"
    >
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Add New Translation
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Add a new translation key and its values for all supported languages.
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="key">Translation Key (dot notation)</Label>
          <Input
            id="key"
            placeholder="e.g. common.buttons.save"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="font-mono"
          />
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Use dot notation to specify the path (e.g. common.buttons.save)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locales.map((locale) => (
            <div key={locale}>
              <Label htmlFor={`value-${locale}`}>
                {locale.toUpperCase()} Translation
              </Label>
              <Textarea
                id={`value-${locale}`}
                placeholder={`Translation for ${locale.toUpperCase()}`}
                value={values[locale]}
                onChange={(e) =>
                  setValues({ ...values, [locale]: e.target.value })
                }
                rows={2}
              />
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Adding..." : "Add Translation"}
      </Button>
    </form>
  );
}
