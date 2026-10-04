/**
 * Single source of truth for personal/site-wide content.
 * Replace the TODO-marked values with your real details — nothing else
 * in the codebase needs to change.
 */
export const site = {
  name: "Sameer Choudhary",
  profession: "Filmmaker / Director / Cinematographer",
  statement:
    "I make films that sit with silence a beat longer than is comfortable — stories about the people and places we move past too quickly.",
  shortBio:
    "Sameer Choudhary is a filmmaker working across short fiction, documentary, and music video, drawn to quiet, character-first stories told with a patient camera.",
  bio: [
    "I'm a filmmaking student and director working mostly in short fiction and documentary, with a particular interest in stories that unfold at the speed of real attention rather than cut to keep up with it.",
    "My work has moved between narrative shorts, observational documentary, and music video — but the throughline is the same: a handheld-but-composed camera, long-held frames, and an interest in the ordinary moments most scripts cut around.",
    "I studied film production with a focus on direction and cinematography, and I've worked as a director, DP, and editor on projects ranging from thesis films to independent music videos. I'm currently developing my first feature-length documentary.",
  ],
  philosophy:
    "A film should trust its audience. I build scenes around what a person does when they think no one is watching, and I'd rather hold a shot too long than cut away from something true.",
  // TODO: replace with your actual program/institution.
  education: [
    {
      title: "B.A. in Film & Media Production",
      place: "[Your Film School / University]",
      period: "2022 — Present",
    },
  ],
  experience: [
    {
      title: "Director & Cinematographer",
      place: "Independent / Freelance",
      period: "2022 — Present",
      description:
        "Writing, directing, and shooting short fiction and documentary work; DP for independent music videos and narrative shorts.",
    },
    {
      title: "Assistant Editor",
      place: "[Production Company / Collaborator]",
      period: "2023 — 2024",
      description:
        "Assisted on post-production for short-form documentary content, from assembly cuts through final delivery.",
    },
  ],
  skills: [
    "Directing",
    "Cinematography",
    "Camera Operation",
    "Editing (Premiere Pro / DaVinci Resolve)",
    "Color Grading",
    "Screenwriting",
    "Documentary Production",
    "Sound Design (Basics)",
  ],
  // TODO: swap in real festival selections / awards as you collect them.
  achievements: [
    "Official Selection — [Festival Name], 2024",
    "Finalist — [Student Film Competition], 2023",
    "Jury Mention — [Regional Short Film Festival], 2023",
  ],
  location: "[Your City, Country]",
  email: "2004sameerchoudhary@gmail.com",
  social: {
    // TODO: replace with your real profile URLs.
    instagram: "https://instagram.com/",
    vimeo: "https://vimeo.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export type SiteConfig = typeof site;
