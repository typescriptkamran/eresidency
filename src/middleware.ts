import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/settings";

// Define admin routes that require authentication
const ADMIN_ROUTES = ["/admin", "/admin/translations"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is for an admin route
  if (ADMIN_ROUTES.some((route) => pathname.startsWith(route))) {
    // For now, we'll implement a simple authentication check
    // In a real application, you would use a more robust authentication system
    const isAuthenticated = request.cookies.has("admin_session");

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("returnUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Handle locale detection and routing
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the preferred locale from the accept-language header
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLocale =
      acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim())
        .find((lang) => locales.includes(lang as any)) || defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
