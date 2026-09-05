import type { Subject, Unit, Chapter, Topic } from "./types";
import { chemistryS1 } from "./chemistry/chemistry-s1";
import { envScienceS1 } from "./env-science/env-science-s1";
import { psychologyS1 } from "./psychology/psychology-s1";
import { computerSkillS1 } from "./computer-skill/computer-skill-s1";
import { coCurricularS1 } from "./co-curricular/co-curricular-s1";
import { slug } from "./helpers";

export const subjects: Subject[] = [
  chemistryS1,
  envScienceS1,
  psychologyS1,
  computerSkillS1,
  coCurricularS1,
];

export interface TopicNode extends Topic {
  subjectTitle: string;
  subjectIcon: string;
  subjectColor: string;
  unitTitle: string;
  chapterTitle: string;
  unitSlug: string;
  chapterSlug: string;
  topicSlug: string;
}

const nodes: TopicNode[] = [];

export function buildNodes() {
  for (const subject of subjects) {
    for (const unit of subject.units) {
      for (const chapter of unit.chapters) {
        for (const topic of chapter.topics) {
          nodes.push({
            ...topic,
            subjectId: subject.id,
            semester: subject.semester,
            subjectTitle: subject.title,
            subjectIcon: subject.icon,
            subjectColor: subject.color,
            unitTitle: unit.title,
            chapterTitle: chapter.title,
            unitSlug: slug(unit.title),
            chapterSlug: slug(chapter.title),
            topicSlug: `${subject.id}-${topic.id}`,
          });
        }
      }
    }
  }
}

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getTopicNode(slugKey: string): TopicNode | undefined {
  return nodes.find((n) => n.topicSlug === slugKey);
}

export function getAllTopics(): TopicNode[] {
  return nodes;
}

export function getTopicsBySubject(subjectId: string): TopicNode[] {
  return nodes.filter((n) => n.subjectId === subjectId);
}

export function searchTopics(query: string): TopicNode[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return nodes
    .filter((n) => {
      const haystack = [
        n.title,
        n.summary,
        n.keywords.join(" "),
        n.chapter,
        n.unit,
        n.subjectTitle,
        n.paper,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, 30);
}

export function totalTopicCount(): number {
  return nodes.length;
}

export function flattenChapters(unit: Unit): Chapter[] {
  return unit.chapters;
}

buildNodes();