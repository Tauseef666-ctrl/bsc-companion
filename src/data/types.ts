export type Language = "Hindi" | "English" | "Hindi + English";

export type VideoType = "Concept Lecture" | "One-Shot" | "Easy Explanation" | "Practical Video" | "Revision";

export interface Video {
  id: string;
  title: string;
  url: string;
  youtubeId?: string;
  watchUrl?: string;
  thumbnail: string;
  channel: string;
  subjectId: string;
  semester: number;
  unit: string;
  chapter: string;
  topic: string;
  language: Language;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  type: VideoType;
  qualityScore: number;
  whyRecommended: string;
  lastChecked: string;
  status: "available" | "unavailable";
  backupFor?: string;
}

export type PdfSourceType =
  | "Official University"
  | "Government"
  | "Open Educational Resource"
  | "Open Textbook"
  | "College"
  | "Reputable Website";

export interface PdfResource {
  id: string;
  title: string;
  url: string;
  subjectId: string;
  semester: number;
  unit: string;
  chapter: string;
  topic: string;
  source: string;
  sourceType: PdfSourceType;
  language: Language;
  type: "Notes" | "Book" | "Syllabus" | "Reference" | "Worksheet" | "Lecture PDF";
  description: string;
  status: "available" | "unavailable";
}

export interface MCQ {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Question {
  question: string;
  hint?: string;
  answer?: string;
}

export interface AnswerGuides {
  shortAnswer?: string;
  mediumAnswer?: string;
  longAnswer?: string;
}

export interface ExamQuestion {
  question: string;
  marks?: number;
  guides?: AnswerGuides;
}

export interface QuestionBank {
  mcqs?: MCQ[];
  veryShort?: ExamQuestion[];
  short?: ExamQuestion[];
  long?: ExamQuestion[];
  viva?: Question[];
}

export interface PYQ {
  year: string;
  semester: number;
  paper: string;
  source: string;
  questions: string[];
}

export type PyqSourceType = "Official University" | "Reputable Website" | "Aggregator";

export interface PyqPaper {
  id: string;
  subject: string;
  subjectId?: string;
  title: string;
  code: string;
  semester: number;
  year: string;
  url: string;
  source: string;
  sourceType: PyqSourceType;
  note?: string;
  verified: string;
}

export interface PyqSource {
  label: string;
  url: string;
  description: string;
  primary?: boolean;
}

export type ContentBlockType = "paragraph" | "heading" | "list" | "table" | "equation" | "note" | "definition" | "example" | "tip";

export interface TableCell {
  head?: boolean;
  content: string;
}

export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  items?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  equation?: string;
  caption?: string;
}

export type ContentStatus = "complete" | "partial" | "missing";

export interface Model3DInfo {
  compound: string;
  formula: string;
  shape: string;
  properties: string[];
}

export interface Diagram {
  id: string;
  title: string;
  kind: "svg" | "image" | "text";
  description: string;
  svg?: string;
  caption: string;
}

export interface InteractiveModel {
  id: string;
  title: string;
  kind: "molecule3d" | "periodic-table" | "reaction" | "chart";
  model?: Model3DInfo;
}

export interface Reaction {
  id: string;
  name: string;
  reactants: string;
  conditions: string;
  products: string;
  equation: string;
  mechanism?: string;
  explanation: string;
  examples?: string[];
  examImportance: string;
}

export interface TopicResource {
  videos?: Video[];
  pdfs?: PdfResource[];
  questions?: QuestionBank;
  diagrams?: Diagram[];
  interactions?: InteractiveModel[];
  reactions?: Reaction[];
  practicalId?: string;
}

export interface Topic {
  id: string;
  title: string;
  subjectId: string;
  semester: number;
  paper: string;
  unit: string;
  chapter: string;
  order: number;
  summary: string;
  keywords: string[];
  fullNotes?: ContentBlock[];
  examNotes?: ContentBlock[];
  quickRevision?: ContentBlock[];
  importantPoints?: string[];
  commonMistakes?: string[];
  resources?: TopicResource;
  status: ContentStatus;
  missingNote?: string;
  shouldComplete?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  order: number;
  topics: Topic[];
}

export interface Unit {
  id: string;
  title: string;
  order: number;
  source: string;
  chapters: Chapter[];
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  type: string;
  semester: number;
  paperTitle: string;
  code: string;
  credits: string;
  color: string;
  description: string;
  units: Unit[];
  syllabusSource?: string;
}

export interface Practical {
  id: string;
  no: number;
  aim: string;
  subjectId: string;
  semester: number;
  paper: string;
  unit: string;
  topic: string;
  category: string;
  apparatus: string[];
  chemicals?: string[];
  principle: string;
  theory: string;
  equation?: string;
  procedure: string[];
  observation?: string[];
  observationTable?: {
    headers: string[];
    rows: string[][];
  };
  calculation?: string;
  result: string;
  precautions: string[];
  vivaQuestions: Question[];
  diagram?: Diagram;
  videos?: Video[];
  complete: boolean;
}

export interface CoCurricular {
  id: string;
  title: string;
  semester: number;
  paper: string;
  description: string;
  units: Unit[];
}

export interface NoteDoc {
  id: string;
  title: string;
}

export interface StudyGoal {
  id: string;
  text: string;
  subjectId?: string;
  done: boolean;
  date: string;
}