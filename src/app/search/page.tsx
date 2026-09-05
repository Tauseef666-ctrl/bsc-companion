"use client";

import { useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, EmptyState, Chip, StatusBadge } from "@/components/ui";
import { searchTopics } from "@/data";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = searchTopics(q);

  return (
    <PageShell title="Search">
      <div className="sticky top-0 z-30 -mx-4 mb-4 bg-cream-50/95 px-4 pb-2 pt-1 backdrop-blur dark:bg-[#1a1a18]/95">
        <div className="flex items-center gap-2 rounded-xl border border-cream-200 bg-white px-3 py-2.5 dark:border-charcoal-700 dark:bg-charcoal-900">
          <SearchIcon size={18} className="shrink-0 text-charcoal-300" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search topics, keywords, papers…"
            className="w-full bg-transparent text-sm text-charcoal-800 outline-none placeholder:text-charcoal-300 dark:text-cream-50"
          />
        </div>
      </div>

      {q.trim().length === 0 ? (
        <EmptyState
          icon={<SearchIcon size={28} />}
          title="What do you want to study today?"
          subtitle="Try things like “dipole moment”, “hybridisation”, “Slater's rules”."
        />
      ) : results.length === 0 ? (
        <EmptyState
          icon={<SearchIcon size={28} />}
          title="Nothing matched"
          subtitle="Try a shorter or different keyword."
        />
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-charcoal-400 dark:text-cream-200/70">
            {results.length} result{results.length > 1 ? "s" : ""} for “{q}”
          </p>
          {results.map((r) => (
            <Link key={r.topicSlug} href={`/topic/${r.topicSlug}`}>
              <Card className="transition active:scale-[0.99]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-charcoal-400 dark:text-cream-200/70">
                    {r.subjectIcon} {r.subjectTitle} · {r.unit}
                  </span>
                  <ChevronRight size={14} className="text-charcoal-300" />
                </div>
                <p className="mt-1 text-sm font-medium text-charcoal-800 dark:text-cream-50">
                  {r.title}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-charcoal-500 dark:text-cream-200/80">
                  {r.summary}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Chip>{r.chapter}</Chip>
                  <StatusBadge status={r.status} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  );
}