import type { Subject } from "../types";
import { MISSING } from "../helpers";

export const coCurricularS1: Subject = {
  id: "co-curricular",
  title: "Co-curricular — Food, Nutrition & Hygiene",
  icon: "🍎",
  type: "Minor",
  semester: 1,
  paperTitle: "Food, Nutrition and Hygiene",
  code: "Z010101T",
  credits: "2",
  color: "rose",
  description:
    "Your compulsory first-semester Co-curricular paper under NEP-2020 Common Minimum Syllabus — concept of food and nutrition, macro and micro nutrients, 1000-days nutrition, and community health concepts.",
  syllabusSource:
    "Kisan P.G. College, Bahraich (Autonomous) — NEP-2020 Common Minimum Syllabus, Co-curricular Course Z010101T.",
  units: [
    {
      id: "co-u1",
      title: "Unit I — Concept of Food and Nutrition",
      order: 1,
      source:
        "Common Minimum Syllabus Unit I: definition of food, nutrients, nutrition, health and balanced diet; types of nutrition; meal planning; food groups and functions of food.",
      chapters: [
        {
          id: "co-u1-c1",
          title: "Definitions",
          order: 1,
          topics: [
            {
              id: "co-food-nutrition",
              title: "Food, Nutrients, Nutrition, Health & Balanced Diet",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit I — Concept of Food and Nutrition",
              chapter: "Definitions",
              order: 1,
              summary:
                "Food provides energy and nutrients; nutrition is the science of how the body uses them; health is complete physical, mental and social well-being; a balanced diet supplies all nutrients in the right amounts.",
              keywords: ["food", "nutrients", "nutrition", "balanced diet", "health"],
              status: MISSING,
            },
            {
              id: "co-nutrition-types",
              title: "Types of Nutrition: Optimum, Under, Over",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit I — Concept of Food and Nutrition",
              chapter: "Definitions",
              order: 2,
              summary:
                "Optimum nutrition occurs with the right nutrient intake; under-nutrition is too little food (malnutrition, deficiency diseases); over-nutrition is excess intake leading to obesity and related disease.",
              keywords: ["optimum nutrition", "under nutrition", "over nutrition", "malnutrition", "obesity"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u1-c2",
          title: "Meal Planning",
          order: 2,
          topics: [
            {
              id: "co-meal-planning",
              title: "Meal Planning: Concept & Factors",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit I — Concept of Food and Nutrition",
              chapter: "Meal Planning",
              order: 1,
              summary:
                "Meal planning arranges foods into balanced meals considering age, sex, activity, income, season and food habits; it ensures nutrition within available means.",
              keywords: ["meal planning", "balanced meals", "factors", "budget"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u1-c3",
          title: "Food Groups",
          order: 3,
          topics: [
            {
              id: "co-food-groups",
              title: "Food Groups & Functions of Food",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit I — Concept of Food and Nutrition",
              chapter: "Food Groups",
              order: 1,
              summary:
                "Foods are grouped as cereals, pulses, milk, fats, fruits and vegetables — energy giving, body building and protective, each with distinct functions.",
              keywords: ["food groups", "cereals", "pulses", "protective food", "functions of food"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "co-u2",
      title: "Unit II — Nutrients: Macro and Micro",
      order: 2,
      source:
        "Common Minimum Syllabus Unit II: RDA, sources, functions, deficiency and excess of carbohydrate, fats, protein, minerals (Ca, P, Na, K; Fe, I, F, Zn), vitamins (B, C; A, D, E, K), water and dietary fibre.",
      chapters: [
        {
          id: "co-u2-c1",
          title: "Macronutrients",
          order: 1,
          topics: [
            {
              id: "co-carbohydrates",
              title: "Carbohydrates",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Macronutrients",
              order: 1,
              summary:
                "Carbohydrates are the main energy source; their RDA, sources (cereals, sugar, fruits), functions, and deficiency/excess consequences.",
              keywords: ["carbohydrates", "RDA", "energy", "sources"],
              status: MISSING,
            },
            {
              id: "co-fats",
              title: "Fats and Oils",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Macronutrients",
              order: 2,
              summary:
                "Fats supply concentrated energy, carry fat-soluble vitamins and build membranes; excess intake links to obesity and heart disease.",
              keywords: ["fats", "oils", "fatty acids", "RDA"],
              status: MISSING,
            },
            {
              id: "co-proteins",
              title: "Proteins",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Macronutrients",
              order: 2,
              summary:
                "Proteins build and repair body tissue and form enzymes and hormones; deficiency produces kwashiorkor and marasmus.",
              keywords: ["proteins", "amino acids", "RDA", "kwashiorkor", "marasmus"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u2-c2",
          title: "Minerals",
          order: 2,
          topics: [
            {
              id: "co-minerals",
              title: "Minerals: Major & Trace",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Minerals",
              order: 1,
              summary:
                "Major minerals (calcium, phosphorus, sodium, potassium) and trace minerals (iron, iodine, fluorine, zinc) — RDA, sources, functions, deficiency and excess.",
              keywords: ["calcium", "iron", "iodine", "zinc", "minerals", "trace elements"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u2-c3",
          title: "Vitamins, Water & Fibre",
          order: 3,
          topics: [
            {
              id: "co-vitamins",
              title: "Vitamins: Water & Fat Soluble",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Vitamins, Water & Fibre",
              order: 1,
              summary:
                "Water-soluble vitamins (B-complex, C) and fat-soluble vitamins (A, D, E, K) — sources, functions and deficiency diseases such as scurvy, rickets and night blindness.",
              keywords: ["vitamins", "vitamin A", "vitamin C", "B-complex", "deficiency diseases"],
              status: MISSING,
            },
            {
              id: "co-water-fibre",
              title: "Water & Dietary Fibre",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit II — Nutrients: Macro and Micro",
              chapter: "Vitamins, Water & Fibre",
              order: 2,
              summary:
                "Water regulates body temperature and transport; dietary fibre prevents constipation and supports gut health.",
              keywords: ["water", "dietary fibre", "hydration", "constipation"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "co-u3",
      title: "Unit III — 1000 Days Nutrition",
      order: 3,
      source:
        "Common Minimum Syllabus Unit III: concept, requirement and factors affecting growth of child; prenatal nutrition (0-280 days); breast/formula feeding (0-6 months); complementary and early diet (6 months-2 years).",
      chapters: [
        {
          id: "co-u3-c1",
          title: "The 1000 Days Window",
          order: 1,
          topics: [
            {
              id: "co-1000-days",
              title: "1000 Days Nutrition Concept",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit III — 1000 Days Nutrition",
              chapter: "The 1000 Days Window",
              order: 1,
              summary:
                "The first 1000 days — from conception to age two — is the critical window where nutrition shapes lifelong health, growth and brain development.",
              keywords: ["first 1000 days", "growth", "child nutrition", "critical window"],
              status: MISSING,
            },
            {
              id: "co-prenatal",
              title: "Prenatal Nutrition (0-280 days)",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit III — 1000 Days Nutrition",
              chapter: "The 1000 Days Window",
              order: 2,
              summary:
                "During pregnancy, additional protein, iron, calcium, folate and energy are required; risk factors include anaemia and poor weight gain.",
              keywords: ["prenatal", "pregnancy", "iron", "folate", "risk factors"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u3-c2",
          title: "Infant & Complementary Feeding",
          order: 2,
          topics: [
            {
              id: "co-breast-feeding",
              title: "Breast & Formula Feeding (0-6 months)",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit III — 1000 Days Nutrition",
              chapter: "Infant & Complementary Feeding",
              order: 1,
              summary:
                "Mother's milk is the ideal infant food — exclusive breastfeeding for the first six months; formula is an alternative when breastfeeding is not possible.",
              keywords: ["breastfeeding", "colostrum", "formula feeding", "exclusive breastfeeding"],
              status: MISSING,
            },
            {
              id: "co-complementary",
              title: "Complementary & Early Diet (6 months-2 years)",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit III — 1000 Days Nutrition",
              chapter: "Infant & Complementary Feeding",
              order: 2,
              summary:
                "From six months, semisolid complementary foods are added while breastfeeding continues; this period is crucial to avoid growth faltering.",
              keywords: ["complementary feeding", "weaning", "semisolid", "growth faltering"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "co-u4",
      title: "Unit IV — Community Health Concepts",
      order: 4,
      source:
        "Common Minimum Syllabus Unit IV: causes of common diseases and nutrition requirement in diabetes, hypertension, obesity, constipation, diarrhea, typhoid; national and international programs and policies; immunity boosting food.",
      chapters: [
        {
          id: "co-u4-c1",
          title: "Common Diseases & Diet",
          order: 1,
          topics: [
            {
              id: "co-common-diseases",
              title: "Diabetes, Hypertension, Obesity & Digestion Issues",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit IV — Community Health Concepts",
              chapter: "Common Diseases & Diet",
              order: 1,
              summary:
                "Dietary management of lifestyle diseases: diabetes (glycaemic control), hypertension (low salt), obesity (energy balance), constipation (fibre), diarrhea and typhoid (rehydration and soft diet).",
              keywords: ["diabetes", "hypertension", "obesity", "constipation", "diarrhea", "typhoid"],
              status: MISSING,
            },
          ],
        },
        {
          id: "co-u4-c2",
          title: "Programs & Immunity",
          order: 2,
          topics: [
            {
              id: "co-programs",
              title: "National & International Programs",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit IV — Community Health Concepts",
              chapter: "Programs & Immunity",
              order: 1,
              summary:
                "Programs such as ICDS (Anganwadi), POSHAN Abhiyaan, midday meals, and WHO/UNICEF nutrition initiatives work to improve dietary nutrition.",
              keywords: ["ICDS", "POSHAN Abhiyaan", "midday meal", "WHO", "UNICEF"],
              status: MISSING,
            },
            {
              id: "co-immunity",
              title: "Immunity Boosting Food",
              subjectId: "co-curricular",
              semester: 1,
              paper: "Food, Nutrition and Hygiene",
              unit: "Unit IV — Community Health Concepts",
              chapter: "Programs & Immunity",
              order: 2,
              summary:
                "Foods rich in vitamin C, zinc, protein and antioxidants — citrus, turmeric, ginger, nuts, legumes — help strengthen the immune system.",
              keywords: ["immunity", "vitamin C", "zinc", "antioxidants", "immune system"],
              status: MISSING,
            },
          ],
        },
      ],
    },
  ],
};