"use client";

import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  FlaskConical,
  FileQuestion,
  Target,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, SectionTitle, ProgressBar, EmptyState, Chip } from "@/components/ui";
import { useProviders } from "@/components/Providers";
import { subjects, getTopicNode, totalTopicCount } from "@/data";

export default function Home() {
  const { completed, lastStudied, goals, toggleGoal, markDone, markUndone } =
    useProviders();

  const dateLabel = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const topicCount = totalTopicCount();
  const doneCount = Object.keys(completed).filter((k) => completed[k]).length;
  const percent = topicCount ? (doneCount / topicCount) * 100 : 0;

  const lastSlugs = Object.entries(lastStudied).sort((a, b) => b[1] - a[1]);
  const lastDone = lastSlugs.find(([slug]) => completed[slug]);
  const lastAny = lastSlugs[0];
  const continueTopic = (lastDone?.[0] ?? lastAny?.[0])
    ? getTopicNode(lastDone?.[0] ?? lastAny?.[0])
    : undefined;

  const openGoals = goals.filter((g) => !g.done).slice(0, 3);

  return (
    <PageShell>
      <p className="mb-1 text-sm text-charcoal-400 dark:text-cream-200/70">
        {dateLabel}
      </p>
      <h1 className="mb-5 font-serif text-2xl font-bold leading-tight dark:text-cream-50">
        Keep going — small steps build big results. 🎯
      </h1>

      <section className="mb-6">
        <Card className="bg-gradient-to-br from-sage-50 to-cream-50 dark:from-charcoal-900 dark:to-charcoal-900 dark:border-sage-900">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-sage-800 dark:text-sage-300">
              Your overall progress
            </p>
            <Chip className="bg-sage-600 text-white dark:bg-sage-700">
              {doneCount}/{topicCount} topics
            </Chip>
          </div>
          <ProgressBar value={percent} />
          <p className="mt-2 text-xs text-charcoal-400 dark:text-cream-200/70">
            {percent < 10
              ? "Getting started — pick today's topic below."
              : percent < 60
              ? "Nice momentum! Keep finishing one topic at a time."
              : "Brilliant — you're more than halfway through!"}
          </p>
        </Card>
      </section>

      {continueTopic && (
        <section className="mb-6">
          <SectionTitle
            icon={<PlayCircle size={18} className="text-sage-600" />}
          >
            Continue learning
          </SectionTitle>
          <Card>
            <p className="text-xs text-charcoal-400 dark:text-cream-200/70">
              {continueTopic.subjectIcon} {continueTopic.subjectTitle} ·{" "}
              {continueTopic.unit}
            </p>
            <h2 className="mt-1 font-serif text-lg font-semibold leading-snug dark:text-cream-50">
              {continueTopic.title}
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <Link
                href={`/topic/${continueTopic.topicSlug}`}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-sage-600 px-4 py-2.5 text-sm font-medium text-white transition active:scale-95"
              >
                Continue <ArrowRight size={16} />
              </Link>
              {completed[continueTopic.topicSlug] ? (
                <button
                  onClick={() => markUndone(continueTopic.topicSlug)}
                  className="inline-flex items-center gap-1 rounded-xl border border-cream-200 px-3 py-2.5 text-sm text-charcoal-500 dark:border-charcoal-700 dark:text-cream-200"
                >
                  <CheckCircle2 size={16} /> Done
                </button>
              ) : (
                <button
                  onClick={() => markDone(continueTopic.topicSlug)}
                  className="inline-flex items-center gap-1 rounded-xl border border-cream-200 px-3 py-2.5 text-sm text-charcoal-500 dark:border-charcoal-700 dark:text-cream-200"
                >
                  <CheckCircle2 size={16} /> Done
                </button>
              )}
            </div>
          </Card>
        </section>
      )}

      <section className="mb-6">
        <SectionTitle icon={<Target size={18} className="text-lavender-600" />}>
          Today's focus
        </SectionTitle>
        {openGoals.length > 0 ? (
          <Card>
            {openGoals.map((g) => (
              <button
                key={g.id}
                onClick={() => toggleGoal(g.id)}
                className="flex w-full items-start gap-2 border-b border-cream-100 py-2 text-left last:border-0 dark:border-charcoal-800"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-lavender-300 dark:border-lavender-700">
                  <span className="h-2.5 w-2.5 rounded-sm bg-transparent" />
                </span>
                <span className="text-sm text-charcoal-700 dark:text-cream-100">
                  {g.text}
                </span>
              </button>
            ))}
            <Link
              href="/profile"
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-lavender-700 dark:text-lavender-300"
            >
              See all goals <ArrowRight size={12} />
            </Link>
          </Card>
        ) : (
          <EmptyState
            icon={<Target size={28} />}
            title="Add a study goal"
            subtitle="Set a goal on the Profile page to start today's plan."
          />
        )}
      </section>

      <section className="mb-6">
        <SectionTitle icon={<CheckCircle2 size={18} className="text-sage-600" />}>
          Your subjects
        </SectionTitle>
        <div className="space-y-3">
          {subjects.map((s) => {
            const total = s.units.reduce(
              (acc, u) =>
                acc + u.chapters.reduce((a2, c) => a2 + c.topics.length, 0),
              0
            );
            const done = total
              ? s.units.reduce(
                  (acc, u) =>
                    acc +
                    u.chapters.reduce(
                      (a2, c) =>
                        a2 +
                        c.topics.filter(
                          (t) => completed[`${s.id}-${t.id}`]
                        ).length,
                      0
                    ),
                  0
                )
              : 0;
            return (
              <Link key={s.id} href={`/subject/${s.id}`}>
                <Card className="transition active:scale-[0.99]">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-medium text-charcoal-800 dark:text-cream-50">
                      {s.icon} {s.title}
                    </p>
                    <ArrowRight size={16} className="text-charcoal-300" />
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-400 dark:text-cream-200/70">
                    <span>{s.paperTitle}</span>
                    <span>
                      {done}/{total}
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-6">
        <SectionTitle>Quick access</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/practicals">
            <Card className="flex h-full flex-col items-center gap-2 bg-lavender-50/60 text-center dark:bg-charcoal-900">
              <FlaskConical size={24} className="text-lavender-600" />
              <span className="text-sm font-medium text-charcoal-700 dark:text-cream-100">
                Practical Notebook
              </span>
            </Card>
          </Link>
          <Link href="/pyqs">
            <Card className="flex h-full flex-col items-center gap-2 bg-dustblue-50/60 text-center dark:bg-charcoal-900">
              <FileQuestion size={24} className="text-dustblue-500" />
              <span className="text-sm font-medium text-charcoal-700 dark:text-cream-100">
                Previous Year Papers
              </span>
            </Card>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}