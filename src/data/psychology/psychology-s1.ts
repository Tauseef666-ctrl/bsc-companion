import type { Subject } from "../types";
import { MISSING } from "../helpers";

export const psychologyS1: Subject = {
  id: "psychology",
  title: "Psychology — Minor",
  icon: "🧠",
  type: "Minor",
  semester: 1,
  paperTitle: "Basic Psychological Processes",
  code: "A090101T",
  credits: "4",
  color: "lavender",
  description:
    "Your first-semester Psychology Minor paper as per the Kisan P.G. College (Autonomous) BA Psychology scheme — nature and approaches of psychology, attention and perception, learning, memory, intelligence, personality, motivation and emotion.",
  syllabusSource:
    "Kisan P.G. College, Bahraich (Autonomous) — BA Psychology Syllabus, Course A090101T, 2023 scheme.",
  units: [
    {
      id: "psy-u1",
      title: "Unit I — Psychology: Nature and Approaches",
      order: 1,
      source:
        "KDC Psychology Syllabus Unit I: Nature, scope and applications; approaches — psychodynamic, behavioristic, cognitive, humanistic and indigenous Indian psychology (Shrimad Bhagwad Gita, Sankhya Darshan, Buddhism).",
      chapters: [
        {
          id: "psy-u1-c1",
          title: "Nature, Scope and Applications",
          order: 1,
          topics: [
            {
              id: "psy-nature",
              title: "Psychology: Definition, Nature & Scope",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit I — Psychology: Nature and Approaches",
              chapter: "Nature, Scope and Applications",
              order: 1,
              summary:
                "Psychology is the scientific study of behavior and mental processes, covering conscious and unconscious activity, with applications in education, health, work and therapy.",
              keywords: ["psychology", "behavior", "mental processes", "scope", "applications"],
              status: MISSING,
            },
            {
              id: "psy-approaches",
              title: "Approaches of Psychology",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit I — Psychology: Nature and Approaches",
              chapter: "Nature, Scope and Applications",
              order: 2,
              summary:
                "Major perspectives include psychodynamic (Freud), behavioristic (Watson, Skinner), cognitive, humanistic (Rogers, Maslow) and indigenous Indian psychology rooted in the Gita, Sankhya and Buddhism.",
              keywords: ["psychodynamic", "behavioristic", "cognitive", "humanistic", "Indian psychology"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u2",
      title: "Unit II — Attention and Perception",
      order: 2,
      source:
        "KDC Psychology Syllabus Unit II: Selective and sustained attention; perceptual processes, perceptual organization and perceptual illusion.",
      chapters: [
        {
          id: "psy-u2-c1",
          title: "Attention Processes",
          order: 1,
          topics: [
            {
              id: "psy-attention",
              title: "Attention: Selective & Sustained",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit II — Attention and Perception",
              chapter: "Attention Processes",
              order: 1,
              summary:
                "Attention is the process of focusing awareness on selected stimuli; selective attention picks among competing stimuli while sustained attention maintains focus over time.",
              keywords: ["attention", "selective attention", "sustained attention", "focus"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u2-c2",
          title: "Perceptual Processes",
          order: 2,
          topics: [
            {
              id: "psy-perception",
              title: "Perception: Nature, Determinants & Organization",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit II — Attention and Perception",
              chapter: "Perceptual Processes",
              order: 1,
              summary:
                "Perception organizes sensory input into meaningful experience through figure-ground, grouping laws, depth cues and past learning; determinants include stimulus factors and personal factors.",
              keywords: ["perception", "perceptual organization", "depth perception", "figure-ground"],
              status: MISSING,
            },
            {
              id: "psy-illusion",
              title: "Perceptual Illusions",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit II — Attention and Perception",
              chapter: "Perceptual Processes",
              order: 2,
              summary:
                "Illusions are systematic misperceptions where the perceived object differs from physical reality — Muller-Lyer, Ponzo and moon illusion are classic examples.",
              keywords: ["illusion", "Muller-Lyer", "Ponzo", "misperception"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u3",
      title: "Unit III — Learning",
      order: 3,
      source:
        "KDC Psychology Syllabus Unit III: Classical conditioning, operant conditioning and verbal learning — methods and procedures.",
      chapters: [
        {
          id: "psy-u3-c1",
          title: "Conditioning",
          order: 1,
          topics: [
            {
              id: "psy-classical",
              title: "Classical Conditioning (Pavlov)",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit III — Learning",
              chapter: "Conditioning",
              order: 1,
              summary:
                "Pavlov's procedure pairs a neutral stimulus (bell) with an unconditioned stimulus (food) so the neutral stimulus alone starts producing the response (salivation) — a learned conditioned response.",
              keywords: ["Pavlov", "classical conditioning", "conditioned response", "acquisition", "extinction"],
              status: MISSING,
            },
            {
              id: "psy-operant",
              title: "Operant Conditioning (Skinner)",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit III — Learning",
              chapter: "Conditioning",
              order: 2,
              summary:
                "Skinner's operant conditioning shapes behavior through reinforcement and punishment following the response — the organism operates on the environment to obtain consequences.",
              keywords: ["Skinner", "operant conditioning", "reinforcement", "punishment", "schedules"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u3-c2",
          title: "Verbal Learning",
          order: 2,
          topics: [
            {
              id: "psy-verbal",
              title: "Verbal Learning: Methods & Procedures",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit III — Learning",
              chapter: "Verbal Learning",
              order: 1,
              summary:
                "Verbal learning research studies how we acquire word associations and serial lists using methods like serial learning, paired-associate learning and free recall.",
              keywords: ["verbal learning", "serial learning", "paired-associate", "free recall"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u4",
      title: "Unit IV — Memory and Forgetting",
      order: 4,
      source:
        "KDC Psychology Syllabus Unit IV: Stages of memory — encoding, storage, retrieval; types — sensory, short term and long term memory; forgetting — interference and cue-dependent forgetting.",
      chapters: [
        {
          id: "psy-u4-c1",
          title: "Stages and Types of Memory",
          order: 1,
          topics: [
            {
              id: "psy-memory",
              title: "Memory: Stages & Types",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit IV — Memory and Forgetting",
              chapter: "Stages and Types of Memory",
              order: 1,
              summary:
                "Memory involves encoding, storage and retrieval; the information-processing model distinguishes sensory, short-term (working) and long-term memory stores.",
              keywords: ["memory", "encoding", "storage", "retrieval", "short-term memory", "long-term memory"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u4-c2",
          title: "Forgetting",
          order: 2,
          topics: [
            {
              id: "psy-forgetting",
              title: "Theories of Forgetting",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit IV — Memory and Forgetting",
              chapter: "Forgetting",
              order: 1,
              summary:
                "Forgetting is explained by interference (retroactive and proactive) and cue-dependent forgetting, where memory exists but retrieval fails because the right cues are absent.",
              keywords: ["forgetting", "interference", "retroactive", "proactive", "cue-dependent"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u5",
      title: "Unit V — Intelligence",
      order: 5,
      source:
        "KDC Psychology Syllabus Unit V: Nature and definition; concept of IQ; theories of intelligence — Spearman, Thurstone, Guilford, Sternberg, Gardner.",
      chapters: [
        {
          id: "psy-u5-c1",
          title: "Intelligence: Concept & IQ",
          order: 1,
          topics: [
            {
              id: "psy-intelligence",
              title: "Intelligence, IQ & Its Measurement",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit V — Intelligence",
              chapter: "Intelligence: Concept & IQ",
              order: 1,
              summary:
                "Intelligence is the capacity to reason, learn and adapt; IQ is the ratio of mental age to chronological age (or a deviation score) used to compare intellectual performance.",
              keywords: ["intelligence", "IQ", "mental age", "intelligence tests"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u5-c2",
          title: "Theories of Intelligence",
          order: 2,
          topics: [
            {
              id: "psy-theories",
              title: "Spearman, Thurstone, Guilford, Sternberg & Gardner",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit V — Intelligence",
              chapter: "Theories of Intelligence",
              order: 1,
              summary:
                "Spearman proposed a general 'g' factor; Thurstone's primary mental abilities; Guilford's structure of intellect; Sternberg's triarchic theory; and Gardner's multiple intelligences.",
              keywords: ["Spearman", "Thurstone", "Guilford", "Sternberg", "Gardner", "multiple intelligences"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u6",
      title: "Unit VI — Personality",
      order: 6,
      source:
        "KDC Psychology Syllabus Unit VI: Definition and determinants; approaches — trait (Allport, Cattell), psychodynamic (Freud), humanistic (Rogers, Maslow).",
      chapters: [
        {
          id: "psy-u6-c1",
          title: "Concept of Personality",
          order: 1,
          topics: [
            {
              id: "psy-personality",
              title: "Personality: Definition & Determinants",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VI — Personality",
              chapter: "Concept of Personality",
              order: 1,
              summary:
                "Personality is the characteristic set of thoughts, feelings and behaviors; it is determined by heredity, environment, culture and situational factors.",
              keywords: ["personality", "determinants", "heredity", "environment"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u6-c2",
          title: "Theories of Personality",
          order: 2,
          topics: [
            {
              id: "psy-personality-theories",
              title: "Trait, Psychodynamic & Humanistic Views",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VI — Personality",
              chapter: "Theories of Personality",
              order: 1,
              summary:
                "Allport and Cattell described personality in traits; Freud's psychodynamic theory uses id, ego, superego and defense mechanisms; Rogers and Maslow emphasized self-actualization and growth.",
              keywords: ["traits", "Allport", "Cattell", "Freud", "Rogers", "Maslow"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u7",
      title: "Unit VII — Motivation",
      order: 7,
      source:
        "KDC Psychology Syllabus Unit VII: Nature and concept (needs, drives, instincts); types of motives — biological and social; pull and push mechanism; intrinsic motivation.",
      chapters: [
        {
          id: "psy-u7-c1",
          title: "Nature of Motivation",
          order: 1,
          topics: [
            {
              id: "psy-motivation",
              title: "Motivation: Needs, Drives & Instincts",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VII — Motivation",
              chapter: "Nature of Motivation",
              order: 1,
              summary:
                "Motivation energizes and directs behavior; needs produce drives, which push the organism toward goals, while instincts are innate behavioral tendencies.",
              keywords: ["motivation", "needs", "drives", "instincts", "homeostasis"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u7-c2",
          title: "Types of Motives",
          order: 2,
          topics: [
            {
              id: "psy-motives",
              title: "Biological & Social Motives",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VII — Motivation",
              chapter: "Types of Motives",
              order: 1,
              summary:
                "Biological motives (hunger, thirst, sleep) serve survival; social motives (achievement, affiliation, power) develop through learning and culture.",
              keywords: ["biological motives", "social motives", "achievement", "affiliation", "power"],
              status: MISSING,
            },
            {
              id: "psy-intrinsic",
              title: "Push-Pull Mechanism & Intrinsic Motivation",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VII — Motivation",
              chapter: "Types of Motives",
              order: 2,
              summary:
                "The push mechanism is drive-based (internal tension) and the pull mechanism is incentive-based (external goals); intrinsic motivation comes from enjoyment of the activity itself.",
              keywords: ["push mechanism", "pull mechanism", "intrinsic motivation", "incentives"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "psy-u8",
      title: "Unit VIII — Emotion",
      order: 8,
      source:
        "KDC Psychology Syllabus Unit VIII: Nature of emotion; basic emotions; expressions — universal versus culture specific; theories — James-Lange, Cannon-Bard, Schachter-Singer.",
      chapters: [
        {
          id: "psy-u8-c1",
          title: "Nature of Emotion",
          order: 1,
          topics: [
            {
              id: "psy-emotion",
              title: "Emotion: Nature & Basic Emotions",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VIII — Emotion",
              chapter: "Nature of Emotion",
              order: 1,
              summary:
                "Emotion is a complex state of arousal, appraisal and expression; basic emotions such as happiness, sadness, fear, anger, surprise and disgust appear across cultures.",
              keywords: ["emotion", "basic emotions", "arousal", "expression"],
              status: MISSING,
            },
            {
              id: "psy-expression",
              title: "Emotional Expression: Universal vs Culture-Specific",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VIII — Emotion",
              chapter: "Nature of Emotion",
              order: 2,
              summary:
                "Ekman's cross-cultural studies support universal facial expressions for basic emotions, though display rules (how emotions are shown) vary by culture.",
              keywords: ["emotional expression", "universal", "culture", "display rules"],
              status: MISSING,
            },
          ],
        },
        {
          id: "psy-u8-c2",
          title: "Theories of Emotion",
          order: 2,
          topics: [
            {
              id: "psy-theories-emotion",
              title: "James-Lange, Cannon-Bard & Schachter-Singer",
              subjectId: "psychology",
              semester: 1,
              paper: "Basic Psychological Processes",
              unit: "Unit VIII — Emotion",
              chapter: "Theories of Emotion",
              order: 1,
              summary:
                "James-Lange says we feel emotion after bodily reactions; Cannon-Bard argues arousal and emotion occur together; Schachter-Singer adds cognitive appraisal (two-factor) of the arousal.",
              keywords: ["James-Lange", "Cannon-Bard", "Schachter-Singer", "two-factor theory"],
              status: MISSING,
            },
          ],
        },
      ],
    },
  ],
};