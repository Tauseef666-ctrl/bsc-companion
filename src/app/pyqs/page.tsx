import { FileQuestion } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip, EmptyState } from "@/components/ui";

export default function PyqsPage() {
  return (
    <PageShell title="Previous Year Papers">
      <p className="mb-4 text-sm text-charcoal-400 dark:text-cream-200/70">
        Real past papers for KDC B.Sc. — solved and tagged by unit so revision
        follows the syllabus exactly.
      </p>
      <Card className="mb-4">
        <h2 className="font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50">
          How to revise with PYQs
        </h2>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-charcoal-600 dark:text-cream-200">
          <li>Open the year you want to practise.</li>
          <li>Attempt questions by unit, not all at once.</li>
          <li>Mark the ones you couldn't answer → revise that topic.</li>
          <li>Retry after 2–3 days. That's real recall.</li>
        </ol>
      </Card>
      <EmptyState
        icon={<FileQuestion size={28} />}
        title="Papers are being collected"
        subtitle="We only add verified official papers — never guessed ones. Your topic pages already include unit-wise exam questions meanwhile."
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip>2023</Chip>
        <Chip>2022</Chip>
        <Chip>Sem 1 here first</Chip>
      </div>
    </PageShell>
  );
}