"use client";

import Link from "next/link";
import { Bookmark, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, EmptyState, StatusBadge } from "@/components/ui";
import { useProviders } from "@/components/Providers";
import { getTopicNode } from "@/data";

export default function SavedPage() {
  const { bookmarks } = useProviders();
  const topics = bookmarks
    .map((slug) => getTopicNode(slug))
    .filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <PageShell title="Saved">
      {topics.length === 0 ? (
        <EmptyState
          icon={<Bookmark size={28} />}
          title="Nothing saved yet"
          subtitle="Tap the bookmark icon on any topic to save it here for revision."
        />
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-charcoal-400 dark:text-cream-200/70">
            {topics.length} saved topic{topics.length > 1 ? "s" : ""} — your personal revision list.
          </p>
          {topics.map((t) => (
            <Link key={t.topicSlug} href={`/topic/${t.topicSlug}`}>
              <Card className="transition active:scale-[0.99]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-charcoal-400 dark:text-cream-200/70">
                    {t.subjectIcon} {t.subjectTitle} · {t.unit}
                  </span>
                  <StatusBadge status={t.status} />
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-charcoal-800 dark:text-cream-50">
                    {t.title}
                  </p>
                  <ChevronRight size={14} className="text-charcoal-300" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  );
}