"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip } from "@/components/ui";
import { useProviders } from "@/components/Providers";
import { subjects } from "@/data";

export default function SubjectsPage() {
  const { completed } = useProviders();

  return (
    <PageShell title="Subjects">
      <p className="mb-4 text-sm text-charcoal-400 dark:text-cream-200/70">
        Every subject follows the real Kisan P.G. College B.Sc. syllabus —
        unit by unit, topic by topic.
      </p>
      <div className="space-y-3">
        {subjects.map((s) => {
          const total = s.units.reduce(
            (acc, u) => acc + u.chapters.reduce((a2, c) => a2 + c.topics.length, 0),
            0
          );
          const done = s.units.reduce(
            (acc, u) =>
              acc +
              u.chapters.reduce(
                (a2, c) => a2 + c.topics.filter((t) => completed[`${s.id}-${t.id}`]).length,
                0
              ),
            0
          );
          return (
            <Link key={s.id} href={`/subject/${s.id}`}>
              <Card className="transition active:scale-[0.99]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-50 text-2xl dark:bg-charcoal-800">
                      {s.icon}
                    </span>
                    <div>
                      <h2 className="font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50">
                        {s.title}
                      </h2>
                      <p className="text-xs text-charcoal-400 dark:text-cream-200/70">
                        Semester {s.semester} · {s.paperTitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-charcoal-300" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Chip>
                    {done}/{total} topics
                  </Chip>
                  <Chip className="bg-sage-100 text-sage-700 dark:bg-sage-900/50 dark:text-sage-300">
                    {s.code}
                  </Chip>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}