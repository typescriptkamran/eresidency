import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";

// List of all supported locales
const locales = ["en", "es", "de", "fr"];

// Default locale
const defaultLocale = "en";

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  const acceptLanguage =
    request.headers.get("accept-language") || defaultLocale;
  try {
    return matchLocale(
      acceptLanguage.split(",").map((lang) => lang.split(";")[0]),
      locales,
      defaultLocale,
    );
  } catch (e) {
    return defaultLocale;
  }
}

// Check if the request is for an admin route
function isAdminRoute(pathname: string) {
  return pathname.startsWith("/admin");
}

// Check if the request is for authentication
function isAuthRoute(pathname: string) {
  return pathname === "/login";
}

// Check if the request is for static assets
function isStaticAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.includes(".")
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static assets
  if (isStaticAsset(pathname)) {
    return NextResponse.next();
  }

  // Handle admin routes - check for authentication
  if (isAdminRoute(pathname)) {
    const authToken = request.cookies.get("auth-token")?.value;

    if (!authToken) {
      const url = new URL("/login", request.url);
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
