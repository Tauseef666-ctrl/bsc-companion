import Link from "next/link";
import {
  FileText,
  ExternalLink,
  BadgeCheck,
  GraduationCap,
  BookOpenText,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip } from "@/components/ui";
import { pyqPapers, pyqMoreSources, pyqVerifiedOn } from "@/data/pyqs";

const semesters = [1, 2, 3, 4, 5, 6];

export default function PyqsPage() {
  return (
    <PageShell title="Previous Year Papers">
      <p className="mb-4 text-sm text-charcoal-400 dark:text-cream-200/70">
        Real, verified past papers for NEP-2020 B.Sc. — download-ready PDFs, so
        revision follows the exam pattern.
      </p>

      <Card className="mb-4">
        <h2 className="font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50">
          Which papers are these?
        </h2>
        <p className="mt-2 text-sm text-charcoal-600 dark:text-cream-200">
          KDC follows the UP NEP-2020 scheme, and its paper titles and codes sit
          in the same family as{" "}
          <span className="font-medium">
            Dr. Ram Manohar Lohia Avadh University (RMLAU, Ayodhya)
          </span>{" "}
          — the university Bahraich was affiliated to. Every link here was
          manually verified to open a real PDF.
        </p>
        <p className="mt-2 text-xs text-charcoal-400 dark:text-cream-200/70">
          KDC and Maa Pateswari University do not yet post official own papers
          publicly — the moment they do, they go on this page first.
        </p>
      </Card>

      <div className="mb-4 flex flex-wrap gap-2">
        <Chip className="bg-sage-100 text-sage-700 dark:bg-sage-900/50 dark:text-sage-300">
          <BadgeCheck size={12} /> {pyqPapers.length} verified PDFs
        </Chip>
        <Chip>Sem 1 & 2 here</Chip>
        <Chip className="border border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          More semesters coming
        </Chip>
      </div>

      {semesters.map((sem) => {
        const papers = pyqPapers.filter((p) => p.semester === sem);
        if (papers.length === 0) return null;
        return (
          <section key={sem} className="mb-6">
            <h2 className="mb-2 font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50">
              Semester {sem}
            </h2>
            <div className="space-y-3">
              {papers.map((p) => (
                <Card key={p.id} className="p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Chip>{p.subject}</Chip>
                        <Chip className="bg-lavender-50 text-lavender-700 dark:bg-charcoal-800 dark:text-lavender-300">
                          Paper {p.code}
                        </Chip>
                        <Chip>{p.year}</Chip>
                      </div>
                      <h3 className="mt-1.5 text-sm font-semibold text-charcoal-800 dark:text-cream-50">
                        {p.title}
                      </h3>
                      {p.note && (
                        <p className="mt-0.5 text-xs text-charcoal-400 dark:text-cream-200/70">
                          {p.note}
                        </p>
                      )}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sage-600 px-3 py-1.5 text-xs font-semibold text-white shadow-card transition active:scale-[0.98]"
                    >
                      Open PDF <ExternalLink size={13} />
                    </a>
                  </div>
                  <p className="mt-2 flex flex-wrap items-center gap-1 text-[11px] text-charcoal-400 dark:text-cream-200/60">
                    <BadgeCheck size={12} className="text-sage-600 dark:text-sage-400" />
                    Verified {p.verified} · {p.source}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mb-6">
        <h2 className="mb-2 flex items-center gap-2 font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50">
          <BookOpenText size={18} className="text-dustblue-400" /> More papers online
        </h2>
        <div className="space-y-3">
          {pyqMoreSources.map((s) => (
            <Card key={s.url} className="p-3">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3"
              >
                <div className="min-w-0">
                  <h3 className="flex items-center gap-1 text-sm font-semibold text-charcoal-800 dark:text-cream-50">
                    {s.label}
                    <ExternalLink size={13} className="text-charcoal-300 dark:text-cream-200/50" />
                  </h3>
                  <p className="mt-0.5 text-xs text-charcoal-400 dark:text-cream-200/70">
                    {s.description}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-2 text-xs text-charcoal-400 dark:text-cream-200/70">
          Nothing here is guessed — every file above opened successfully when
          checked. Links verified {pyqVerifiedOn}.
        </p>
      </section>

      <Card className="mb-4">
        <h2 className="font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50">
          How to revise with PYQs
        </h2>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-charcoal-600 dark:text-cream-200">
          <li>Open the semester you are currently in.</li>
          <li>Attempt questions unit-wise, not all at once.</li>
          <li>Mark the ones you couldn't answer → revise that topic.</li>
          <li>
            Your topic pages also carry unit-wise exam questions independently.
          </li>
        </ol>
        <p className="mt-3 flex items-center gap-1 text-sm text-charcoal-400 dark:text-cream-200/70">
          <GraduationCap size={15} className="text-sage-600 dark:text-sage-400" />
          Follow along the syllabus breakdown in daily notes, or
          <Link
            href="/subjects"
            className="inline-flex items-center gap-0.5 font-medium text-sage-700 dark:text-sage-300"
          >
            browse subjects <FileText size={13} />
          </Link>
          .
        </p>
      </Card>
    </PageShell>
  );
}