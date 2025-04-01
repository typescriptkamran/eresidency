import { getAllTranslations, locales } from "@/i18n/settings";
import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Helper function to update a nested property in an object
function setNestedProperty(obj: any, path: string[], value: any): void {
  const lastKey = path.pop();
  if (!lastKey) return;

  let current = obj;
  for (const key of path) {
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
}

// Helper function to get a nested property from an object
function getNestedProperty(obj: any, path: string[]): any {
  let current = obj;
  for (const key of path) {
    if (!current[key]) return undefined;
    current = current[key];
  }
  return current;
}

// Simple mock translation function
// In a real application, you would use a translation API like Google Translate
async function translateText(
  text: string,
  targetLocale: string,
): Promise<string> {
  // This is a mock implementation
  // In a real application, you would call a translation API
  const mockTranslations: Record<string, Record<string, string>> = {
    en: {
      Hello: "Hello",
      Welcome: "Welcome",
      Save: "Save",
      Cancel: "Cancel",
      Close: "Close",
      Submit: "Submit",
      "Learn More": "Learn More",
      "Get Started": "Get Started",
      "Contact Us": "Contact Us",
      About: "About",
    },
    es: {
      Hello: "Hola",
      Welcome: "Bienvenido",
      Save: "Guardar",
      Cancel: "Cancelar",
      Close: "Cerrar",
      Submit: "Enviar",
      "Learn More": "Saber más",
      "Get Started": "Comenzar",
      "Contact Us": "Contáctenos",
      About: "Acerca de",
    },
    de: {
      Hello: "Hallo",
      Welcome: "Willkommen",
      Save: "Speichern",
      Cancel: "Abbrechen",
      Close: "Schließen",
      Submit: "Einreichen",
      "Learn More": "Mehr erfahren",
      "Get Started": "Loslegen",
      "Contact Us": "Kontaktiere uns",
      About: "Über",
    },
    fr: {
      Hello: "Bonjour",
      Welcome: "Bienvenue",
      Save: "Enregistrer",
      Cancel: "Annuler",
      Close: "Fermer",
      Submit: "Soumettre",
      "Learn More": "En savoir plus",
      "Get Started": "Commencer",
      "Contact Us": "Contactez-nous",
      About: "À propos",
    },
    ru: {
      Hello: "Привет",
      Welcome: "Добро пожаловать",
      Save: "Сохранить",
      Cancel: "Отмена",
      Close: "Закрыть",
      Submit: "Отправить",
      "Learn More": "Узнать больше",
      "Get Started": "Начать",
      "Contact Us": "Связаться с нами",
      About: "О нас",
    },
  };

  // Check if we have a mock translation
  if (mockTranslations[targetLocale] && mockTranslations[targetLocale][text]) {
    return mockTranslations[targetLocale][text];
  }

  // If no mock translation is available, return a placeholder
  return `[${targetLocale}] ${text}`;
}

// POST handler to auto-translate a key
export async function POST(request: NextRequest) {
  try {
    const { locale, key } = await request.json();

    // Validate inputs
    if (!locale || !key) {
      return NextResponse.json(
        { error: "Locale and key are required" },
        { status: 400 },
      );
    }

    if (!locales.includes(locale as any)) {
      return NextResponse.json(
        { error: `Locale ${locale} is not supported` },
        { status: 400 },
      );
    }

    // Get current translations
    const translations = await getAllTranslations();

    // Find the source text from the default locale (English)
    const keyPath = key.split(".");
    const sourceText = getNestedProperty(translations["en"], keyPath);

    if (!sourceText || typeof sourceText !== "string") {
      return NextResponse.json(
        { error: "Source text not found in default locale" },
        { status: 400 },
      );
    }

    // Translate the text
    const translatedText = await translateText(sourceText, locale);

    // Update the translation
    const localeTranslations = translations[locale] || {};
    setNestedProperty(localeTranslations, [...keyPath], translatedText);

    // Write the updated translations back to the file
    const filePath = path.join(
      process.cwd(),
      "src",
      "i18n",
      "messages",
      `${locale}.json`,
    );
    await fs.writeFile(
      filePath,
      JSON.stringify(localeTranslations, null, 2),
      "utf-8",
    );

    return NextResponse.json({
      success: true,
      translatedText,
    });
  } catch (error) {
    console.error("Error auto-translating:", error);
    return NextResponse.json(
      { error: "Failed to auto-translate" },
      { status: 500 },
    );
  }
}
