"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Circle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Zap,
  Film,
  FileText,
  HelpCircle,
  TriangleAlert,
  Star,
  Play,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, Chip, StatusBadge, EmptyState } from "@/components/ui";
import { ContentBlockView } from "@/components/ContentBlockView";
import { MCQQuiz } from "@/components/MCQQuiz";
import { useProviders } from "@/components/Providers";
import { getTopicNode, getAllTopics } from "@/data";

type Tab = "notes" | "revision" | "resources" | "questions";

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicNode(params.slug);
  const { markDone, markUndone, isDone, toggleBookmark, isBookmarked } =
    useProviders();
  const [tab, setTab] = useState<Tab>("notes");

  if (!topic) notFound();

  const done = isDone(topic.topicSlug);
  const saved = isBookmarked(topic.topicSlug);

  const all = getAllTopics();
  const idx = all.findIndex((t) => t.topicSlug === topic.topicSlug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: "notes", label: "Notes", icon: BookOpen },
    { id: "revision", label: "Revision", icon: Zap },
    { id: "resources", label: "Videos & PDFs", icon: Film },
    { id: "questions", label: "Questions", icon: HelpCircle },
  ];

  const videos = topic.resources?.videos ?? [];
  const pdfs = topic.resources?.pdfs ?? [];
  const qb = topic.resources?.questions;
  const hasQuestions = qb && (qb.mcqs?.length || (qb.veryShort?.length ?? 0) + (qb.short?.length ?? 0) + (qb.long?.length ?? 0) > 0);

  return (
    <PageShell>
      <Link
        href={`/subject/${topic.subjectId}`}
        className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-charcoal-400 hover:text-charcoal-600 dark:text-cream-200/70"
      >
        <ChevronLeft size={14} /> {topic.subjectIcon} {topic.subjectTitle}
      </Link>

      <div className="mb-3">
        <p className="text-xs text-charcoal-400 dark:text-cream-200/70">
          {topic.unit} · {topic.chapter}
        </p>
        <h1 className="font-serif text-2xl font-bold leading-tight dark:text-cream-50">
          {topic.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <StatusBadge status={topic.status} />
          <Chip>{topic.paper}</Chip>
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => (done ? markUndone(topic.topicSlug) : markDone(topic.topicSlug))}
          className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium transition active:scale-95 ${
            done
              ? "bg-sage-600 text-white"
              : "bg-sage-100 text-sage-700 dark:bg-sage-900/50 dark:text-sage-300"
          }`}
        >
          {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
          {done ? "Marked complete" : "Mark as done"}
        </button>
        <button
          onClick={() => toggleBookmark(topic.topicSlug)}
          aria-label="Save topic"
          className={`inline-flex items-center justify-center rounded-xl border px-3 transition active:scale-95 ${
            saved
              ? "border-lavender-400 bg-lavender-100 text-lavender-700 dark:bg-lavender-900/50 dark:text-lavender-300"
              : "border-cream-200 text-charcoal-400 dark:border-charcoal-700 dark:text-cream-200/80"
          }`}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-charcoal-500 dark:text-cream-200/80">
        {topic.summary}
      </p>

      {topic.status === "missing" && (
        <div className="mb-4 rounded-xl border border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          <TriangleAlert size={16} className="mb-1" />
          ⚠️ No verified resource yet — this topic is being prepared from your
          official syllabus.
        </div>
      )}

      <div className="no-scrollbar sticky top-0 z-30 -mx-4 mb-4 overflow-x-auto border-b border-cream-200 bg-cream-50/95 px-4 backdrop-blur dark:border-charcoal-800 dark:bg-[#1a1a18]/95">
        <div className="flex gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-t-xl border-b-2 px-3 py-2.5 text-sm font-medium transition ${
                tab === id
                  ? "border-sage-600 text-sage-700 dark:text-sage-300"
                  : "border-transparent text-charcoal-400 dark:text-cream-200/60"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "notes" && (
        <div className="space-y-4">
          {topic.fullNotes && topic.fullNotes.length > 0 ? (
            <Card>
              <div className="mb-3 flex items-center gap-1.5">
                <BookOpen size={16} className="text-sage-600" />
                <h2 className="font-serif text-base font-semibold dark:text-cream-50">
                  Full notes
                </h2>
              </div>
              <ContentBlockView blocks={topic.fullNotes} />
            </Card>
          ) : (
            <EmptyState
              icon={<BookOpen size={26} />}
              title="Full notes coming soon"
              subtitle="Use Quick Revision and the videos while this is being written for you."
            />
          )}

          {topic.examNotes && topic.examNotes.length > 0 && (
            <Card>
              <div className="mb-3 flex items-center gap-1.5">
                <Star size={16} className="text-dustblue-500" />
                <h2 className="font-serif text-base font-semibold dark:text-cream-50">
                  Exam notes
                </h2>
              </div>
              <ContentBlockView blocks={topic.examNotes} />
            </Card>
          )}

          {topic.importantPoints && topic.importantPoints.length > 0 && (
            <Card>
              <h2 className="mb-2 font-serif text-base font-semibold dark:text-cream-50">
                Important points
              </h2>
              <ul className="space-y-1.5">
                {topic.importantPoints.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal-700 dark:text-cream-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {topic.commonMistakes && topic.commonMistakes.length > 0 && (
            <Card className="border-red-200 bg-red-50/50 dark:border-red-900/50 dark:bg-red-900/20">
              <h2 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-red-700 dark:text-red-300">
                <TriangleAlert size={16} /> Common mistakes
              </h2>
              <ul className="space-y-1.5">
                {topic.commonMistakes.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-red-700 dark:text-red-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      )}

      {tab === "revision" && (
        <div className="space-y-4">
          {topic.quickRevision && topic.quickRevision.length > 0 ? (
            <Card>
              <div className="mb-3 flex items-center gap-1.5">
                <Zap size={16} className="text-lavender-600" />
                <h2 className="font-serif text-base font-semibold dark:text-cream-50">
                  Quick revision
                </h2>
              </div>
              <ContentBlockView blocks={topic.quickRevision} />
            </Card>
          ) : (
            <EmptyState
              icon={<Zap size={26} />}
              title="Quick revision coming soon"
              subtitle="A 2-minute cram-ready summary is being prepared for this topic."
            />
          )}
        </div>
      )}

      {tab === "resources" && (
        <div className="space-y-5">
          <section>
            <h2 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold dark:text-cream-50">
              <Film size={16} className="text-sage-600" /> Lectures (videos)
            </h2>
            {videos.length > 0 ? (
              <div className="space-y-3">
                {videos.map((v) =>
                  v.youtubeId && v.watchUrl ? (
                    <a
                      key={v.id}
                      href={v.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Play ${v.title} on YouTube`}
                      className="block overflow-hidden rounded-xl border border-cream-200 transition active:scale-[0.99] dark:border-charcoal-800"
                    >
                      <div className="group relative aspect-video w-full overflow-hidden bg-charcoal-100 dark:bg-charcoal-800">
                        {v.thumbnail && (
                          <img
                            src={v.thumbnail}
                            alt={v.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-active:bg-black/35">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-sage-700 shadow-lg">
                            <Play size={22} fill="currentColor" />
                          </span>
                        </div>
                        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
                          <ExternalLink size={11} /> YouTube
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-charcoal-800 dark:text-cream-50">
                          {v.title}
                        </p>
                        <p className="mt-1 text-xs text-charcoal-400 dark:text-cream-200/70">
                          {v.channel} · {v.language} · {v.duration} · {v.type}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-charcoal-500 dark:text-cream-200/80">
                          {v.whyRecommended}
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-sage-100 px-2 py-0.5 text-[11px] text-sage-700 dark:bg-sage-900/50 dark:text-sage-300">
                          <BadgeCheck size={11} /> Verified {v.lastChecked}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div key={v.id} className="rounded-xl border border-dashed border-amber-400 bg-amber-50/60 p-4 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                      <p className="font-medium">{v.title}</p>
                      <p className="mt-1 text-xs">Resource not currently available.</p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <EmptyState
                icon={<Film size={26} />}
                title="No verified videos yet"
                subtitle="We never guess links. Verified tutorials will appear here."
              />
            )}
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold dark:text-cream-50">
              <FileText size={16} className="text-dustblue-500" /> Notes & PDFs
            </h2>
            {pdfs.length > 0 ? (
              <div className="space-y-2">
                {pdfs.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-cream-200 p-3 transition active:bg-cream-50 dark:border-charcoal-800 dark:active:bg-charcoal-800"
                  >
                    <p className="text-sm font-medium text-sage-700 dark:text-sage-300">
                      {p.title}
                    </p>
                    <p className="mt-0.5 text-xs text-charcoal-400 dark:text-cream-200/70">
                      {p.source} · {p.sourceType} · {p.language}
                    </p>
                    <p className="mt-1 text-xs text-charcoal-500 dark:text-cream-200/80">
                      {p.description}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<FileText size={26} />}
                title="No PDFs linked yet"
                subtitle="Open educational resources will be attached here when verified."
              />
            )}
          </section>
        </div>
      )}

      {tab === "questions" && (
        <div className="space-y-5">
          {qb?.mcqs && qb.mcqs.length > 0 && (
            <section>
              <h2 className="mb-2 font-serif text-base font-semibold dark:text-cream-50">
                Multiple choice
              </h2>
              <MCQQuiz mcqs={qb.mcqs} />
            </section>
          )}
          {qb?.veryShort && qb.veryShort.length > 0 && (
            <ExamList title="Very short (2 marks)" items={qb.veryShort.map((q) => ({ q: q.question, m: q.marks }))} />
          )}
          {qb?.short && qb.short.length > 0 && (
            <ExamList title="Short (5 marks)" items={qb.short.map((q) => ({ q: q.question, m: q.marks }))} />
          )}
          {qb?.long && qb.long.length > 0 && (
            <ExamList title="Long (10 marks)" items={qb.long.map((q) => ({ q: q.question, m: q.marks }))} />
          )}
          {!hasQuestions && (
            <EmptyState
              icon={<HelpCircle size={26} />}
              title="Questions coming soon"
              subtitle="Topic-wise questions are being compiled from real exams."
            />
          )}
        </div>
      )}

      <div className="mt-6 flex items-stretch justify-between gap-2">
        {prev ? (
          <Link
            href={`/topic/${prev.topicSlug}`}
            className="flex flex-1 flex-col gap-0.5 rounded-xl border border-cream-200 p-3 transition active:bg-cream-50 dark:border-charcoal-800 dark:active:bg-charcoal-800"
          >
            <span className="flex items-center gap-1 text-[11px] text-charcoal-400 dark:text-cream-200/60">
              <ChevronLeft size={12} /> Previous
            </span>
            <span className="text-xs leading-snug text-charcoal-700 dark:text-cream-100">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/topic/${next.topicSlug}`}
            className="flex flex-1 flex-col items-end gap-0.5 rounded-xl border border-cream-200 p-3 text-right transition active:bg-cream-50 dark:border-charcoal-800 dark:active:bg-charcoal-800"
          >
            <span className="flex items-center gap-1 text-[11px] text-charcoal-400 dark:text-cream-200/60">
              Next <ChevronRight size={12} />
            </span>
            <span className="text-xs leading-snug text-charcoal-700 dark:text-cream-100">
              {next.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </PageShell>
  );
}

function ExamList({
  title,
  items,
}: {
  title: string;
  items: { q: string; m?: number }[];
}) {
  return (
    <section>
      <h2 className="mb-2 font-serif text-base font-semibold dark:text-cream-50">
        {title}
      </h2>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-start justify-between gap-2 rounded-xl border border-cream-200 p-3 dark:border-charcoal-800"
          >
            <p className="text-sm leading-relaxed text-charcoal-700 dark:text-cream-100">
              {it.q}
            </p>
            {it.m && (
              <span className="shrink-0 rounded-full bg-cream-100 px-2 py-0.5 text-xs text-charcoal-500 dark:bg-charcoal-800 dark:text-cream-200">
                {it.m} marks
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}