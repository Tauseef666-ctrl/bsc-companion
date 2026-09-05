"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { ThemeToggle } from "./ui";

export function PageShell({
  title,
  children,
  hideTitle = false,
}: {
  title?: string;
  children: ReactNode;
  hideTitle?: boolean;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-md px-4 pb-24 pt-4">
      <header className="mb-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-600 text-white">
            <BookOpen size={18} />
          </span>
          <div>
            <p className="font-serif text-lg font-bold leading-tight text-charcoal-900 dark:text-cream-50">
              My B.Sc. Study Space
            </p>
            {title && !hideTitle && (
              <p className="text-xs text-charcoal-400 dark:text-cream-200/70">
                {title}
              </p>
            )}
          </div>
        </Link>
        <ThemeToggle />
      </header>
      {title && !hideTitle && (
        <h1 className="mb-4 font-serif text-2xl font-bold dark:text-cream-50">
          {title}
        </h1>
      )}
      {children}
      <BottomNav />
    </div>
  );
}