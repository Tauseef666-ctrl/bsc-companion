import type { Subject } from "../types";
import { pdf, MISSING } from "../helpers";

export const envScienceS1: Subject = {
  id: "environmental-science",
  title: "Environmental Science — Major",
  icon: "🌍",
  type: "Major",
  semester: 1,
  paperTitle: "Fundamentals of Environmental Science",
  code: "B150101T",
  credits: "4",
  color: "sky",
  description:
    "Your first-semester Environmental Science Major paper as per the Kisan P.G. College B.Sc. syllabus — concept and scope of environmental science, environmental education, evolution, man-environment relationships, and meteorology. Certificate in Fundamentals of Environmental Science.",
  syllabusSource:
    "Kisan P.G. College, Bahraich (Autonomous) — UG Environmental Science Syllabus, Course B150101T, 2023 scheme.",
  units: [
    {
      id: "env-u1",
      title: "Unit I — Concept of Environment",
      order: 1,
      source:
        "KDC Environmental Science Syllabus Unit I: Bhartiya Gyan Parampara aur Vaigyanik; definition, principles and scope of Environmental Science; moral and aesthetic nature; objectives and historic roots; need for public awareness.",
      chapters: [
        {
          id: "env-u1-c1",
          title: "Definition, Principles and Scope",
          order: 1,
          topics: [
            {
              id: "env-scope",
              title: "Introduction to Environmental Science",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit I — Concept of Environment",
              chapter: "Definition, Principles and Scope",
              order: 1,
              summary:
                "Environmental Science studies the interrelationship between living organisms and their environment, combined with the technology and management needed to solve environmental problems.",
              keywords: ["environment", "environmental science", "scope", "principles"],
              status: MISSING,
              shouldComplete: [
                "Definition and scope of Environmental Science",
                "Bhartiya Gyan Parampara and its environmental basis",
                "Moral and aesthetic nature of environmental science",
                "Historic roots and objectives",
              ],
            },
            {
              id: "env-awareness",
              title: "Need for Public Awareness",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit I — Concept of Environment",
              chapter: "Definition, Principles and Scope",
              order: 2,
              summary:
                "Public awareness is the first step in environmental protection — an informed citizenry is essential for sustainable living, waste reduction and conservation.",
              keywords: ["public awareness", "conservation", "sustainable living", "environmental protection"],
              status: MISSING,
              shouldComplete: ["Why public awareness matters", "Historic roots of the subject and its objectives"],
            },
          ],
        },
        {
          id: "env-u1-c2",
          title: "Readings & References",
          order: 2,
          topics: [
            {
              id: "env-suggested-books",
              title: "Suggested Books & Digital Resources",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit I — Concept of Environment",
              chapter: "Readings & References",
              order: 1,
              summary:
                "Standard references for the paper: S. C. Santra (Environmental Science), Asthana & Asthana, Barry's Atmosphere Weather and Climate, and UGC/state-recommended open textbooks and e-content.",
              keywords: ["textbooks", "e-content", "reference books"],
              resources: {
                pdfs: [
                  pdf(
                    "env-bharucha",
                    "Textbook for Environmental Studies — Erach Bharucha (UGC model curriculum)",
                    "https://www.ugc.ac.in/oldpdf/modelcurriculum/env.pdf",
                    "environmental-science",
                    1,
                    "Unit I — Concept of Environment",
                    "Readings & References",
                    "Suggested Books & Digital Resources",
                    "UGC (official model curriculum)",
                    "Government",
                    "English",
                    "Book",
                    "Full UGC model textbook for Environmental Studies."
                  ),
                  pdf(
                    "env-yksingh",
                    "Environmental Science — Dr. Y. K. Singh (open e-content)",
                    "https://www.hzu.edu.in/bed/E%20V%20S.pdf",
                    "environmental-science",
                    1,
                    "Unit I — Concept of Environment",
                    "Readings & References",
                    "Suggested Books & Digital Resources",
                    "Himachal Pradesh University (open PDF)",
                    "Government",
                    "English",
                    "Book",
                    "Open Environmental Science e-book recommended in the KDC syllabus."
                  ),
                  pdf(
                    "env-jkcprl",
                    "Fundamentals of Environmental Studies — open notes",
                    "https://www.jkcprl.ac.in/download/11567250727.pdf",
                    "environmental-science",
                    1,
                    "Unit I — Concept of Environment",
                    "Readings & References",
                    "Suggested Books & Digital Resources",
                    "Govt. degree college e-content",
                    "Reputable Website",
                    "English",
                    "Notes",
                    "Open fundamentals notes recommended in the KDC syllabus."
                  ),
                ],
              },
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "env-u2",
      title: "Unit II — Environmental Education",
      order: 2,
      source:
        "KDC Environmental Science Syllabus Unit II: Goals of environmental education; environmental literacy, careers, environmental justice, environmentalism; environmental education at primary and secondary level.",
      chapters: [
        {
          id: "env-u2-c1",
          title: "Goals of Environmental Education",
          order: 1,
          topics: [
            {
              id: "env-edu-goals",
              title: "Environmental Education: Goals & Literacy",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit II — Environmental Education",
              chapter: "Goals of Environmental Education",
              order: 1,
              summary:
                "Environmental education builds awareness, knowledge, attitudes, skills and participation so people can act in harmony with nature at every level of society.",
              keywords: ["environmental education", "environmental literacy", "goals", "awareness"],
              status: MISSING,
              shouldComplete: ["Goals of environmental education", "Environmental literacy and careers", "Environmentalism"],
            },
          ],
        },
        {
          id: "env-u2-c2",
          title: "Education Across Levels",
          order: 2,
          topics: [
            {
              id: "env-edu-levels",
              title: "Environmental Education at Primary & Secondary Level",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit II — Environmental Education",
              chapter: "Education Across Levels",
              order: 1,
              summary:
                "Environmental concepts are introduced in simple experiential ways in primary school and become progressively scientific and issue-based at the secondary level.",
              keywords: ["primary level", "secondary level", "curriculum", "environmental education"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "env-u3",
      title: "Unit III — Evolution",
      order: 3,
      source:
        "KDC Environmental Science Syllabus Unit III: Origin of life and speciation; Darwinism and modern synthetic theory of evolution; natural selection; biochemical basis of origin of life; Hardy-Weinberg equilibrium; genetic drift.",
      chapters: [
        {
          id: "env-u3-c1",
          title: "Origin of Life & Speciation",
          order: 1,
          topics: [
            {
              id: "env-origin-life",
              title: "Origin of Life & Speciation",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit III — Evolution",
              chapter: "Origin of Life & Speciation",
              order: 1,
              summary:
                "Life originated through chemical evolution — from simple molecules to self-replicating systems — and speciation is the process by which new species arise from ancestral populations.",
              keywords: ["origin of life", "biochemical evolution", "speciation", "species"],
              status: MISSING,
              shouldComplete: ["Theories of origin of life", "Biochemical basis of origin of life", "Speciation"],
            },
          ],
        },
        {
          id: "env-u3-c2",
          title: "Mechanisms of Evolution",
          order: 2,
          topics: [
            {
              id: "env-darwinism",
              title: "Darwinism & Modern Synthetic Theory",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit III — Evolution",
              chapter: "Mechanisms of Evolution",
              order: 1,
              summary:
                "Natural selection, variation and inheritance combine in the modern synthetic theory, which integrates Darwinian selection with genetics, mutation and population thinking.",
              keywords: ["Darwinism", "natural selection", "synthetic theory", "mutation"],
              status: MISSING,
              shouldComplete: ["Darwin's theory and its postulates", "Modern synthetic theory of evolution"],
            },
            {
              id: "env-hw-drift",
              title: "Hardy-Weinberg Equilibrium & Genetic Drift",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit III — Evolution",
              chapter: "Mechanisms of Evolution",
              order: 2,
              summary:
                "The Hardy-Weinberg equilibrium describes a population whose allele and genotype frequencies stay constant across generations; genetic drift is change in allele frequencies due to random sampling, especially in small populations.",
              keywords: ["Hardy-Weinberg", "genetic drift", "allele frequency", "population genetics"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "env-u4",
      title: "Unit IV — Man and Environment",
      order: 4,
      source:
        "KDC Environmental Science Syllabus Unit IV: Man-environment relationships; impacts of human activity on environment (agriculture, transportation, mining, urbanization, industrialization); environmental degradation and conservation issues; sustainability and carrying capacity.",
      chapters: [
        {
          id: "env-u4-c1",
          title: "Man-Environment Relationships",
          order: 1,
          topics: [
            {
              id: "env-man-nature",
              title: "Man & Nature: The Relationship",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit IV — Man and Environment",
              chapter: "Man-Environment Relationships",
              order: 1,
              summary:
                "Humans both depend on and modify the environment; industrialization, urbanization, mining, agriculture and transportation place growing pressure on natural systems.",
              keywords: ["man-environment", "human impact", "urbanization", "industrialization"],
              status: MISSING,
              shouldComplete: ["Impacts of agriculture, transport, mining", "Urbanization and industrialization effects"],
            },
          ],
        },
        {
          id: "env-u4-c2",
          title: "Conservation & Sustainability",
          order: 2,
          topics: [
            {
              id: "env-degradation",
              title: "Environmental Degradation & Conservation Issues",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit IV — Man and Environment",
              chapter: "Conservation & Sustainability",
              order: 1,
              summary:
                "Overexploitation of resources leads to degradation — pollution, deforestation, soil erosion and biodiversity loss — and conservation is the planned protection of those resources.",
              keywords: ["degradation", "conservation", "deforestation", "pollution"],
              status: MISSING,
            },
            {
              id: "env-sustainability",
              title: "Sustainability & Carrying Capacity",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit IV — Man and Environment",
              chapter: "Conservation & Sustainability",
              order: 2,
              summary:
                "Sustainability meets present needs without compromising future generations; carrying capacity is the maximum population an environment can support indefinitely.",
              keywords: ["sustainability", "carrying capacity", "sustainable development"],
              status: MISSING,
            },
          ],
        },
      ],
    },
    {
      id: "env-u5",
      title: "Unit V — Meteorology",
      order: 5,
      source:
        "KDC Environmental Science Syllabus Unit V: Structure and composition of atmosphere, hydrosphere, lithosphere and biosphere; meteorological parameters — pressure, temperature, precipitation, humidity, wind speed and direction, wind rose, inversion.",
      chapters: [
        {
          id: "env-u5-c1",
          title: "Spheres of the Earth",
          order: 1,
          topics: [
            {
              id: "env-spheres",
              title: "Structure of Atmosphere, Hydrosphere, Lithosphere & Biosphere",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit V — Meteorology",
              chapter: "Spheres of the Earth",
              order: 1,
              summary:
                "The four interacting spheres — atmosphere (gas envelope), hydrosphere (water), lithosphere (rocks and soil) and biosphere (life) — together make up the earth system.",
              keywords: ["atmosphere", "hydrosphere", "lithosphere", "biosphere"],
              status: MISSING,
              shouldComplete: [
                "Layers and composition of the atmosphere",
                "Hydrosphere: oceans, rivers, groundwater",
                "Lithosphere and biosphere distribution",
              ],
            },
          ],
        },
        {
          id: "env-u5-c2",
          title: "Meteorological Parameters",
          order: 2,
          topics: [
            {
              id: "env-weather",
              title: "Pressure, Temperature, Precipitation & Humidity",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit V — Meteorology",
              chapter: "Meteorological Parameters",
              order: 1,
              summary:
                "The basic weather elements measured at a station: atmospheric pressure, air temperature, precipitation (rain gauge), and humidity — their instruments and significance.",
              keywords: ["weather", "pressure", "temperature", "precipitation", "humidity"],
              status: MISSING,
              shouldComplete: [
                "Atmospheric pressure and its measurement",
                "Temperature variation with height",
                "Precipitation types and rain gauge",
                "Humidity: relative and absolute",
              ],
            },
            {
              id: "env-wind-inversion",
              title: "Wind, Wind Rose & Inversion",
              subjectId: "environmental-science",
              semester: 1,
              paper: "Fundamentals of Environmental Science",
              unit: "Unit V — Meteorology",
              chapter: "Meteorological Parameters",
              order: 2,
              summary:
                "Wind speed and direction are measured with anemometer and wind vane; a wind rose summarizes their distribution, and inversion is a layer where temperature increases with height, trapping pollutants.",
              keywords: ["wind speed", "wind direction", "wind rose", "inversion", "anemometer"],
              status: MISSING,
              shouldComplete: ["Anemometer and wind vane", "Reading a wind rose", "Temperature inversion and smog"],
            },
          ],
        },
      ],
    },
  ],
};