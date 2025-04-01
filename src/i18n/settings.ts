import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Define all supported locales
export const locales = ["en", "es", "de", "fr", "ru"];
export const defaultLocale = "en";

// This is the function that next-intl uses to load messages
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: await importMessages(locale),
  };
});

// Load messages for a specific locale
async function importMessages(locale: string) {
  try {
    // Dynamic import of the messages for the requested locale
    return (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to default locale if the requested locale is not available
    console.error(`Could not load messages for locale: ${locale}`, error);
    return (await import(`./messages/${defaultLocale}.json`)).default;
  }
}

// Helper function to get all available translations
export async function getAllTranslations() {
  const translations: Record<string, any> = {};

  for (const locale of locales) {
    try {
      translations[locale] = (
        await import(`./messages/${locale}.json`)
      ).default;
    } catch (error) {
      console.error(`Could not load messages for locale: ${locale}`, error);
      translations[locale] = {};
    }
  }

  return translations;
}

// Helper function to get all translation keys from the default locale
export async function getAllTranslationKeys() {
  try {
    const defaultMessages = (await import(`./messages/${defaultLocale}.json`))
      .default;
    return extractKeys(defaultMessages);
  } catch (error) {
    console.error(`Could not load default messages`, error);
    return [];
  }
}

// Helper function to extract all keys from a nested object
function extractKeys(obj: any, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return extractKeys(value, newKey);
    }
    return [newKey];
  });
}
