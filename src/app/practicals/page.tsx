import Link from "next/link";
import { FlaskConical, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip, EmptyState } from "@/components/ui";

export default function PracticalsPage() {
  return (
    <PageShell title="Practical Notebook">
      <p className="mb-4 text-sm text-charcoal-400 dark:text-cream-200/70">
        Your digital lab record — aim, principle, procedure, observation and
        viva, exactly following the KDC scheme.
      </p>
      <div className="space-y-3">
        <Card className="flex items-center justify-between gap-3 transition active:scale-[0.99]">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-50 text-2xl dark:bg-charcoal-800">
              🧪
            </span>
            <div>
              <h2 className="font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50">
                Chemistry Practical — Sem 1
              </h2>
              <p className="text-xs text-charcoal-400 dark:text-cream-200/70">
                B020102P · Quantitative Analysis
              </p>
            </div>
          </div>
          <Chip>Coming</Chip>
        </Card>
      </div>
      <div className="mt-4">
        <EmptyState
          icon={<FlaskConical size={28} />}
          title="Practical experiments being prepared"
          subtitle="EDTA hardness, COD, Fe by dichromate, acetic acid titration and more will appear here soon."
        />
      </div>
      <p className="mt-4 flex items-center gap-1 text-sm text-charcoal-400">
        See the full syllabus breakdown in Chemistry daily notes.
        <Link href="/subject/chemistry" className="inline-flex items-center gap-0.5 font-medium text-sage-700 dark:text-sage-300">
          Open <ArrowRight size={14} />
        </Link>
      </p>
    </PageShell>
  );
}