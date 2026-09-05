import type { Subject } from "../types";
import { MISSING } from "../helpers";

export const computerSkillS1: Subject = {
  id: "basic-computer-skills",
  title: "Basic Computer Skills — Minor",
  icon: "💻",
  type: "Minor",
  semester: 1,
  paperTitle: "Fundamentals of Computer",
  code: "I170101V",
  credits: "1+2=3",
  color: "amber",
  description:
    "Your first-semester Vocational Minor paper as per the Kisan P.G. College scheme — knowing the computer, components of a computer system, hardware and software concepts, and applications of ICT (e-governance, entertainment).",
  syllabusSource:
    "Kisan P.G. College, Bahraich (Autonomous) — Vocational Basic Computer Skill Syllabus, Course I170101V.",
  units: [
    {
      id: "cs-u1",
      title: "Unit I — Theory",
      order: 1,
      source:
        "KDC Basic Computer Skill Syllabus (Theory): Knowing of computer; components of computer system; concept of hardware and software; applications of ICT.",
      chapters: [
        {
          id: "cs-u1-c1",
          title: "Knowing of Computer",
          order: 1,
          topics: [
            {
              id: "cs-intro",
              title: "Introduction & Basic Applications of Computer",
              subjectId: "basic-computer-skills",
              semester: 1,
              paper: "Fundamentals of Computer",
              unit: "Unit I — Theory",
              chapter: "Knowing of Computer",
              order: 1,
              summary:
                "A computer is an electronic device that accepts data, processes it and produces results; its basic applications span education, business, communication and entertainment.",
              keywords: ["computer", "data", "processing", "applications"],
              status: MISSING,
            },
          ],
        },
        {
          id: "cs-u1-c2",
          title: "Components of Computer System",
          order: 2,
          topics: [
            {
              id: "cs-components",
              title: "CPU, Keyboard, Mouse, VDU & Memory",
              subjectId: "basic-computer-skills",
              semester: 1,
              paper: "Fundamentals of Computer",
              unit: "Unit I — Theory",
              chapter: "Components of Computer System",
              order: 1,
              summary:
                "The CPU processes instructions, while input devices (keyboard, mouse), output devices (VDU) and memory (RAM, ROM, storage) complete the system.",
              keywords: ["CPU", "keyboard", "mouse", "VDU", "memory", "input devices", "output devices"],
              status: MISSING,
            },
            {
              id: "cs-io",
              title: "Other Input & Output Devices",
              subjectId: "basic-computer-skills",
              semester: 1,
              paper: "Fundamentals of Computer",
              unit: "Unit I — Theory",
              chapter: "Components of Computer System",
              order: 2,
              summary:
                "Beyond the basics: scanners, microphones, webcams as input; printers, speakers, projectors as output; and secondary storage such as hard disks and pen drives.",
              keywords: ["input devices", "output devices", "scanner", "printer", "storage"],
              status: MISSING,
            },
          ],
        },
        {
          id: "cs-u1-c3",
          title: "Hardware and Software",
          order: 3,
          topics: [
            {
              id: "cs-hw-sw",
              title: "Concept of Hardware & Software",
              subjectId: "basic-computer-skills",
              semester: 1,
              paper: "Fundamentals of Computer",
              unit: "Unit I — Theory",
              chapter: "Hardware and Software",
              order: 1,
              summary:
                "Hardware is the physical part of a computer; software is the set of instructions that runs on it, divided into application software and system software.",
              keywords: ["hardware", "software", "system software", "application software", "operating system"],
              status: MISSING,
            },
          ],
        },
        {
          id: "cs-u1-c4",
          title: "Applications of ICT",
          order: 4,
          topics: [
            {
              id: "cs-ict",
              title: "Applications of ICT: e-Governance & Entertainment",
              subjectId: "basic-computer-skills",
              semester: 1,
              paper: "Fundamentals of Computer",
              unit: "Unit I — Theory",
              chapter: "Applications of ICT",
              order: 1,
              summary:
                "ICT applies computers to daily life — e-governance (online services, DigiLocker, e-services), entertainment (games, music, streaming) and communication.",
              keywords: ["ICT", "e-governance", "entertainment", "digital services"],
              status: MISSING,
            },
          ],
        },
      ],
    },
  ],
};