"use client";

import { useState } from "react";
import { Target, Trash2, Plus, Flame } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, SectionTitle, ProgressBar, EmptyState, Chip } from "@/components/ui";
import { useProviders } from "@/components/Providers";
import { subjects, totalTopicCount } from "@/data";

export default function ProfilePage() {
  const { completed, goals, addGoal, toggleGoal, removeGoal, lastStudied } =
    useProviders();
  const [text, setText] = useState("");
  const [subjectFilter, setSubjectFilter] = useState<string>("");

  const topicCount = totalTopicCount();
  const doneCount = Object.keys(completed).filter((k) => completed[k]).length;
  const percent = topicCount ? (doneCount / topicCount) * 100 : 0;

  const openGoals = goals.filter((g) => !g.done).length;
  const streak =
    lastStudied && Object.keys(lastStudied).length > 0
      ? Math.min(
          7,
          Math.max(
            1,
            Math.round(
              (Object.keys(lastStudied).length / Math.max(5, topicCount)) * 7
            )
          )
        )
      : 0;

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    addGoal(trimmed, subjectFilter || undefined);
    setText("");
  };

  return (
    <PageShell title="Profile">
      <Card className="mb-4 bg-gradient-to-br from-lavender-50 to-cream-50 dark:from-charcoal-900 dark:to-charcoal-900">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-medium text-lavender-800 dark:text-lavender-300">
            Progress this semester
          </p>
          <Chip className="bg-lavender-600 text-white dark:bg-lavender-700">
            <Flame size={12} /> {streak} day streak
          </Chip>
        </div>
        <ProgressBar value={percent} />
        <p className="mt-2 text-xs text-charcoal-400 dark:text-cream-200/70">
          {doneCount} of {topicCount} topics complete · {openGoals} goal
          {openGoals === 1 ? "" : "s"} open
        </p>
      </Card>

      <section className="mb-6">
        <SectionTitle icon={<Target size={18} className="text-lavender-600" />}>
          My study goals
        </SectionTitle>

        <Card className="mb-3">
          <div className="flex flex-col gap-2">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Write a goal — e.g. Finish Unit II of Chemistry today"
              rows={2}
              className="w-full resize-none rounded-xl border border-cream-200 bg-cream-50/50 p-3 text-sm text-charcoal-800 outline-none placeholder:text-charcoal-300 focus:border-sage-500 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-cream-50"
            />
            <div className="flex items-center gap-2">
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="flex-1 rounded-xl border border-cream-200 bg-white px-3 py-2 text-sm text-charcoal-700 outline-none dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-cream-100"
              >
                <option value="">Any subject</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              <button
                onClick={submit}
                className="inline-flex items-center gap-1 rounded-xl bg-lavender-600 px-4 py-2 text-sm font-medium text-white transition active:scale-95"
              >
                <Plus size={16} /> Add
              </button>
            </div>
          </div>
        </Card>

        {goals.length === 0 ? (
          <EmptyState
            icon={<Target size={26} />}
            title="No goals yet"
            subtitle="Add your first goal — the dashboard will show it as Today's focus."
          />
        ) : (
          <div className="space-y-2">
            {goals.map((g) => (
              <Card key={g.id} className="flex items-center gap-2 p-3">
                <button
                  onClick={() => toggleGoal(g.id)}
                  aria-label="Toggle goal"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
                    g.done
                      ? "border-sage-500 bg-sage-500 text-white"
                      : "border-lavender-300 dark:border-lavender-700"
                  }`}
                >
                  {g.done && <span className="text-[10px]">✓</span>}
                </button>
                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm ${
                      g.done
                        ? "text-charcoal-300 line-through dark:text-cream-200/50"
                        : "text-charcoal-700 dark:text-cream-100"
                    }`}
                  >
                    {g.text}
                  </p>
                  <p className="text-[11px] text-charcoal-400 dark:text-cream-200/60">
                    Added {g.date}
                    {g.subjectId
                      ? ` · ${subjects.find((s) => s.id === g.subjectId)?.title ?? ""}`
                      : ""}
                  </p>
                </div>
                <button
                  onClick={() => removeGoal(g.id)}
                  aria-label="Remove goal"
                  className="text-charcoal-300 transition hover:text-red-500 dark:text-cream-200/50"
                >
                  <Trash2 size={16} />
                </button>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Card>
        <p className="text-sm font-medium text-charcoal-800 dark:text-cream-50">
          Per-subject progress
        </p>
        <div className="mt-3 space-y-3">
          {subjects.map((s) => {
            const total = s.units.reduce(
              (a, u) => a + u.chapters.reduce((a2, c) => a2 + c.topics.length, 0),
              0
            );
            const done = s.units.reduce(
              (a, u) =>
                a +
                u.chapters.reduce(
                  (a2, c) =>
                    a2 + c.topics.filter((t) => completed[`${s.id}-${t.id}`]).length,
                  0
                ),
              0
            );
            return (
              <div key={s.id}>
                <div className="mb-1 flex justify-between text-xs text-charcoal-500 dark:text-cream-200/80">
                  <span>
                    {s.icon} {s.title}
                  </span>
                  <span>
                    {done}/{total}
                  </span>
                </div>
                <ProgressBar value={total ? (done / total) * 100 : 0} />
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-charcoal-400 dark:text-cream-200/60">
          All progress is stored privately on this device. Nothing leaves your
          phone.
        </p>
      </Card>
    </PageShell>
  );
}