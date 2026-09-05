"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Library, Search, Bookmark, User } from "lucide-react";
import { useProviders } from "./Providers";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: Library },
  { href: "/search", label: "Search", icon: Search },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const { bookmarks } = useProviders();

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-cream-200 bg-white/90 backdrop-blur dark:border-charcoal-800 dark:bg-charcoal-900/90">
      <div className="mx-auto flex max-w-md items-stretch justify-around">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition ${
                active
                  ? "text-sage-700 dark:text-sage-300"
                  : "text-charcoal-400 dark:text-cream-200/60"
              }`}
            >
              <span className="relative">
                <Icon size={20} />
                {href === "/saved" && bookmarks.length > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-sage-600 px-1 text-[9px] text-white">
                    {bookmarks.length}
                  </span>
                )}
              </span>
              {label}
              {active && (
                <span className="absolute top-0 h-0.5 w-8 rounded-full bg-sage-500" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}