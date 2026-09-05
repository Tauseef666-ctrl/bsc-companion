import type { Video, PdfResource, ContentStatus } from "./types";

export function vid(
  id: string,
  title: string,
  query: string,
  subjectId: string,
  semester: number,
  unit: string,
  chapter: string,
  topic: string,
  language: "Hindi" | "English" | "Hindi + English" = "Hindi",
  duration = "—",
  type: Video["type"] = "Concept Lecture",
  whyRecommended: string,
  youtubeId?: string
): Video {
  const objId = youtubeId ? youtubeId : `s:${query.replace(/[^a-z0-9]+/gi, "-").slice(0, 60)}:${id}`;
  return {
    id: `${subjectId}-${id}-${objId}`.slice(0, 80),
    title,
    url: youtubeId
      ? `https://www.youtube.com/embed/${youtubeId}?rel=0`
      : `https://www.youtube.com/embed/?listType=search&list=${encodeURIComponent(query)}`,
    thumbnail: youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : "",
    channel: youtubeId ? "Verified lecture" : "YouTube — exact topic search",
    subjectId,
    semester,
    unit,
    chapter,
    topic,
    language,
    duration,
    level: "Intermediate",
    type,
    qualityScore: 4,
    whyRecommended,
    lastChecked: "2026-09-05",
    status: "available",
  };
}

export function pdf(
  id: string,
  title: string,
  url: string,
  subjectId: string,
  semester: number,
  unit: string,
  chapter: string,
  topic: string,
  source: string,
  sourceType: PdfResource["sourceType"],
  language: "Hindi" | "English" | "Hindi + English",
  type: PdfResource["type"],
  description: string,
  status: PdfResource["status"] = "available"
): PdfResource {
  return {
    id: `${subjectId}-${id}`.slice(0, 60),
    title,
    url,
    subjectId,
    semester,
    unit,
    chapter,
    topic,
    source,
    sourceType,
    language,
    type,
    description,
    status,
  };
}

export const AVAILABLE: ContentStatus = "complete";
export const PARTIAL: ContentStatus = "partial";
export const MISSING: ContentStatus = "missing";

export function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097F]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}