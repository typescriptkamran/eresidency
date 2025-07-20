export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: "E-Residency",
      definition:
        "A digital identity issued by a government that allows non-residents to access services such as company formation, banking, payment processing, and taxation. It does not confer citizenship or physical residency rights.",
    },
    {
      term: "Digital Nomad",
      definition:
        "An individual who works remotely while traveling and living in different locations, often leveraging digital technologies to perform their job duties regardless of their physical location.",
    },
    // ... rest of the glossary terms
  ];

  // Group terms by first letter
  const groupedTerms: Record<string, typeof glossaryTerms> = glossaryTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  // Create an array of letters for the alphabet navigation
  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Page Content */}
    </div>
  );
}
