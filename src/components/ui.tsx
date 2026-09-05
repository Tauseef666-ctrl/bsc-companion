"use client";

import { ReactNode } from "react";
import { Moon, Sun, CheckCircle2, AlertCircle, MinusCircle } from "lucide-react";
import { useProviders } from "./Providers";
import type { ContentStatus } from "@/data/types";

export function ThemeToggle() {
  const { theme, toggleTheme } = useProviders();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 bg-cream-50 text-lavender-700 transition hover:bg-lavender-100 dark:border-charcoal-800 dark:bg-charcoal-900 dark:text-lavender-300 dark:hover:bg-charcoal-800"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-cream-200 bg-white p-4 shadow-card dark:border-charcoal-800 dark:bg-charcoal-900 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  icon,
  children,
  extra,
}: {
  icon?: ReactNode;
  children: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-lg">
        {icon}
        {children}
      </h2>
      {extra}
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(value);
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-cream-100 dark:bg-charcoal-800">
      <div
        className="h-full rounded-full bg-sage-500 transition-all"
        style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  );
}

export function StatusBadge({ status }: { status: ContentStatus }) {
  if (status === "complete")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-sage-100 px-2 py-0.5 text-xs font-medium text-sage-700 dark:bg-sage-900/50 dark:text-sage-300">
        <CheckCircle2 size={12} /> Complete
      </span>
    );
  if (status === "partial")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
        <AlertCircle size={12} /> Partial
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-charcoal-100 px-2 py-0.5 text-xs font-medium text-charcoal-500 dark:bg-charcoal-800 dark:text-charcoal-300">
      <MinusCircle size={12} /> Not built yet
    </span>
  );
}

export function EmptyState({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-cream-300 bg-cream-50/50 px-6 py-10 text-center dark:border-charcoal-700 dark:bg-charcoal-900/40">
      <div className="text-dustblue-400">{icon}</div>
      <p className="font-medium text-charcoal-700 dark:text-cream-100">{title}</p>
      {subtitle && (
        <p className="text-sm text-charcoal-400 dark:text-cream-200/70">{subtitle}</p>
      )}
    </div>
  );
}

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-cream-100 px-2.5 py-0.5 text-xs font-medium text-charcoal-600 dark:bg-charcoal-800 dark:text-cream-100 ${className}`}
    >
      {children}
    </span>
  );
}