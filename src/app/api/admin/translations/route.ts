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

// GET handler to fetch all translations
export async function GET() {
  try {
    const translations = await getAllTranslations();
    return NextResponse.json(translations);
  } catch (error) {
    console.error("Error fetching translations:", error);
    return NextResponse.json(
      { error: "Failed to fetch translations" },
      { status: 500 },
    );
  }
}

// POST handler to update a translation
export async function POST(request: NextRequest) {
  try {
    const { locale, key, value } = await request.json();

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
    const localeTranslations = translations[locale] || {};

    // Update the translation
    const keyPath = key.split(".");
    setNestedProperty(localeTranslations, [...keyPath], value);

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating translation:", error);
    return NextResponse.json(
      { error: "Failed to update translation" },
      { status: 500 },
    );
  }
}

// PUT handler to add a new translation
export async function PUT(request: NextRequest) {
  try {
    const { key, values } = await request.json();

    // Validate inputs
    if (!key || !values) {
      return NextResponse.json(
        { error: "Key and values are required" },
        { status: 400 },
      );
    }

    // Get current translations for all locales
    const translations = await getAllTranslations();

    // Update each locale with the new translation
    for (const locale of locales) {
      if (values[locale]) {
        const localeTranslations = translations[locale] || {};
        const keyPath = key.split(".");
        setNestedProperty(localeTranslations, [...keyPath], values[locale]);

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
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding translation:", error);
    return NextResponse.json(
      { error: "Failed to add translation" },
      { status: 500 },
    );
  }
}

// DELETE handler to remove a translation
export async function DELETE(request: NextRequest) {
  try {
    const { key } = await request.json();

    // Validate inputs
    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Get current translations for all locales
    const translations = await getAllTranslations();

    // Remove the translation from each locale
    for (const locale of locales) {
      const localeTranslations = translations[locale] || {};
      const keyPath = key.split(".");

      // If the key has multiple segments, we need to navigate to the parent object
      if (keyPath.length > 1) {
        const parentPath = keyPath.slice(0, -1);
        const lastKey = keyPath[keyPath.length - 1];
        const parentObj = getNestedProperty(localeTranslations, parentPath);

        if (parentObj && typeof parentObj === "object") {
          delete parentObj[lastKey];
        }
      } else {
        // If the key is at the root level
        delete localeTranslations[keyPath[0]];
      }

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
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing translation:", error);
    return NextResponse.json(
      { error: "Failed to remove translation" },
      { status: 500 },
    );
  }
}
