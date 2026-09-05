"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip, StatusBadge } from "@/components/ui";
import { useProviders } from "@/components/Providers";
import { getSubject } from "@/data";

export default function SubjectPage({ params }: { params: { id: string } }) {
  const subject = getSubject(params.id);
  const { completed } = useProviders();
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({});

  if (!subject) notFound();

  const toggleUnit = (id: string) =>
    setOpenUnits((o) => ({ ...o, [id]: !o[id] }));

  return (
    <PageShell>
      <div className="mb-4">
        <p className="text-sm text-charcoal-400 dark:text-cream-200/70">
          {subject.semester}st Semester · {subject.type}
        </p>
        <h1 className="font-serif text-2xl font-bold leading-tight dark:text-cream-50">
          {subject.icon} {subject.title}
        </h1>
        <p className="mt-1 text-sm text-charcoal-500 dark:text-cream-200/80">
          {subject.paperTitle}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip className="bg-sage-600 text-white dark:bg-sage-700">{subject.code}</Chip>
          <Chip>{subject.credits} credits</Chip>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-500 dark:text-cream-200/80">
          {subject.description}
        </p>
        <p className="mt-2 text-xs text-charcoal-400 dark:text-cream-200/60">
          Source: {subject.syllabusSource}
        </p>
      </div>

      <div className="space-y-3">
        {subject.units.map((unit) => {
          const chapterTotal = unit.chapters.reduce(
            (a, c) => a + c.topics.length,
            0
          );
          const chapterDone = unit.chapters.reduce(
            (a, c) =>
              a + c.topics.filter((t) => completed[`${subject.id}-${t.id}`]).length,
            0
          );
          const isOpen = openUnits[unit.id] ?? (unit.order === 1);
          return (
            <Card key={unit.id} className="p-0">
              <button
                onClick={() => toggleUnit(unit.id)}
                className="flex w-full items-center justify-between gap-2 p-4 text-left"
              >
                <div>
                  <h2 className="font-serif text-base font-semibold leading-snug text-charcoal-800 dark:text-cream-50">
                    {unit.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-charcoal-400 dark:text-cream-200/70">
                    {unit.source}
                  </p>
                </div>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-charcoal-300 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-cream-100 px-1 pb-2 dark:border-charcoal-800">
                  <p className="px-3 pt-3 text-xs font-medium text-charcoal-400 dark:text-cream-200/70">
                    {chapterDone}/{chapterTotal} topics done
                  </p>
                  {unit.chapters.map((chapter) => (
                    <div key={chapter.id} className="mt-1">
                      {chapter.title && (
                        <p className="px-3 pb-1 pt-3 text-sm font-semibold text-lavender-700 dark:text-lavender-300">
                          {chapter.title}
                        </p>
                      )}
                      {chapter.topics.map((topic) => {
                        const slugKey = `${subject.id}-${topic.id}`;
                        const done = completed[slugKey];
                        return (
                          <Link
                            key={topic.id}
                            href={`/topic/${slugKey}`}
                            className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-cream-50 active:bg-cream-100 dark:hover:bg-charcoal-800"
                          >
                            {done ? (
                              <CheckCircle2
                                size={16}
                                className="shrink-0 text-sage-600"
                              />
                            ) : (
                              <ChevronRight
                                size={16}
                                className="shrink-0 text-charcoal-300"
                              />
                            )}
                            <span className="flex-1 text-sm text-charcoal-700 dark:text-cream-100">
                              {topic.title}
                            </span>
                            <StatusBadge status={topic.status} />
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </PageShell>
  );
}