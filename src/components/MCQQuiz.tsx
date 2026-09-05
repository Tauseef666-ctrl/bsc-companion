"use client";

import { useState } from "react";
import { Check, X, HelpCircle } from "lucide-react";
import type { MCQ } from "@/data/types";

export function MCQQuiz({ mcqs }: { mcqs: MCQ[] }) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  if (mcqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {mcqs.map((mcq, i) => {
        const picked = selected[i];
        const reveal = revealed[i];
        return (
          <div key={i} className="rounded-xl border border-cream-200 p-3 dark:border-charcoal-800">
            <p className="mb-2 text-sm font-medium text-charcoal-800 dark:text-cream-50">
              Q{i + 1}. {mcq.question}
            </p>
            <div className="space-y-1.5">
              {mcq.options.map((opt, j) => {
                const isAnswer = j === mcq.answerIndex;
                const isPicked = picked === j;
                let style =
                  "border-cream-200 bg-white text-charcoal-700 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-cream-100";
                if (reveal) {
                  if (isAnswer)
                    style = "border-sage-500 bg-sage-50 text-sage-800 dark:bg-sage-900/40 dark:text-sage-200";
                  else if (isPicked)
                    style = "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/40 dark:text-red-300";
                }
                return (
                  <button
                    key={j}
                    disabled={reveal}
                    onClick={() => setSelected((s) => ({ ...s, [i]: j }))}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${style} ${
                      !reveal ? "active:scale-[0.99]" : ""
                    }`}
                  >
                    <span>
                      {String.fromCharCode(97 + j)}. {opt}
                    </span>
                    {reveal && isAnswer && <Check size={16} className="shrink-0 text-sage-600" />}
                    {reveal && isPicked && !isAnswer && <X size={16} className="shrink-0 text-red-500" />}
                  </button>
                );
              })}
            </div>
            {reveal ? (
              <p className="mt-2 text-xs text-sage-700 dark:text-sage-300">
                <span className="font-semibold">Why: </span>
                {mcq.explanation}
              </p>
            ) : (
              <button
                onClick={() => setRevealed((r) => ({ ...r, [i]: true }))}
                disabled={picked === undefined}
                className="mt-2 inline-flex items-center gap-1 rounded-lg bg-lavender-100 px-3 py-1.5 text-xs font-medium text-lavender-700 transition disabled:opacity-40 dark:bg-lavender-900/40 dark:text-lavender-300"
              >
                <HelpCircle size={14} /> Check answer
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}