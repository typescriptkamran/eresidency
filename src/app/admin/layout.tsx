import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | E-Residency Experts",
  description: "Admin dashboard for managing E-Residency Experts website",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 shrink-0">
            <nav className="space-y-1">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Admin Panel
              </h2>
              <a
                href="/admin"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Dashboard
              </a>
              <a
                href="/admin/translations"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-500"
              >
                Translations
              </a>
            </nav>
          </aside>
          <main className="flex-1 bg-white dark:bg-slate-950 rounded-lg shadow">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
