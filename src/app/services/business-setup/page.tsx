import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example Page",
  description: "This is an example page using the App Router.",
};

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Example Page</h1>
      <p className="text-lg">
        Welcome to your new page! This file is located at: 
        <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded ml-1">
          /src/app/example/page.tsx
        </code>
      </p>
    </div>
  );
}