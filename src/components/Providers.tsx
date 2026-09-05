"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface StudyGoal {
  id: string;
  text: string;
  subjectId?: string;
  done: boolean;
  date: string;
}

interface ProvidersValue {
  theme: Theme;
  toggleTheme: () => void;
  completed: Record<string, boolean>;
  lastStudied: Record<string, number>;
  markDone: (slug: string) => void;
  markUndone: (slug: string) => void;
  isDone: (slug: string) => boolean;
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  goals: StudyGoal[];
  addGoal: (text: string, subjectId?: string) => void;
  toggleGoal: (id: string) => void;
  removeGoal: (id: string) => void;
}

const ProvidersContext = createContext<ProvidersValue | null>(null);

function useStoredState<T>(key: string, fallback: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(fallback);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
  }, [key]);
  const set = useCallback(
    (v: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const next = typeof v === "function" ? (v as (p: T) => T)(prev) : v;
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // storage may be unavailable (private mode) — non-fatal
        }
        return next;
      });
    },
    [key]
  );
  return [value, set];
}

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [completed, setCompleted] = useStoredState<Record<string, boolean>>(
    "bsc-progress",
    {}
  );
  const [lastStudied, setLastStudied] = useStoredState<Record<string, number>>(
    "bsc-last-studied",
    {}
  );
  const [bookmarks, setBookmarks] = useStoredState<string[]>("bsc-saved", []);
  const [goals, setGoals] = useStoredState<StudyGoal[]>("bsc-goals", []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bsc-theme");
      if (stored === "dark" || stored === "light") setTheme(stored);
      else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        setTheme("dark");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("bsc-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const markDone = useCallback(
    (slug: string) => {
      setCompleted((c) => ({ ...c, [slug]: true }));
      setLastStudied((l) => ({ ...l, [slug]: Date.now() }));
    },
    [setCompleted, setLastStudied]
  );

  const markUndone = useCallback(
    (slug: string) => {
      setCompleted((c) => {
        const next = { ...c };
        delete next[slug];
        return next;
      });
    },
    [setCompleted]
  );

  const isDone = useCallback((slug: string) => !!completed[slug], [completed]);

  const toggleBookmark = useCallback(
    (slug: string) => {
      setBookmarks((b) =>
        b.includes(slug) ? b.filter((x) => x !== slug) : [...b, slug]
      );
    },
    [setBookmarks]
  );

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  const addGoal = useCallback(
    (text: string, subjectId?: string) => {
      const goal: StudyGoal = {
        id: String(Date.now()),
        text,
        subjectId,
        done: false,
        date: new Date().toISOString().slice(0, 10),
      };
      setGoals((g) => [goal, ...g]);
    },
    [setGoals]
  );

  const toggleGoal = useCallback(
    (id: string) => {
      setGoals((g) =>
        g.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
      );
    },
    [setGoals]
  );

  const removeGoal = useCallback(
    (id: string) => setGoals((g) => g.filter((x) => x.id !== id)),
    [setGoals]
  );

  return (
    <ProvidersContext.Provider
      value={{
        theme,
        toggleTheme,
        completed,
        lastStudied,
        markDone,
        markUndone,
        isDone,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        goals,
        addGoal,
        toggleGoal,
        removeGoal,
      }}
    >
      {children}
    </ProvidersContext.Provider>
  );
}

export function useProviders(): ProvidersValue {
  const ctx = useContext(ProvidersContext);
  if (!ctx) throw new Error("useProviders must be used inside <Providers>");
  return ctx;
}