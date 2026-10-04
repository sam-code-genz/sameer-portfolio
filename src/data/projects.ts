/**
 * Central project/film database. Add a new project by adding a new object
 * to the `projects` array below — every page (home, work archive, project
 * detail, sitemap) reads from this one file.
 *
 * To replace placeholder imagery: drop your file into `public/images/...`
 * and update the matching path here (or just overwrite the placeholder
 * file at the same path and leave this file untouched).
 */

export const CATEGORIES = [
  "Films",
  "Documentaries",
  "Short Films",
  "Cinematography",
  "Music Videos",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Credit = {
  role: string;
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: Category;
  /** One or more roles you held on this project. */
  role: string[];
  director: string;
  duration: string;
  genre: string;
  /** Production company / context, e.g. "Independent", "Thesis Film". */
  production: string;
  logline: string;
  synopsis: string;
  /** Portrait poster image, used in archive/featured cards. */
  poster: string;
  /** Full-bleed landscape image for the project's detail-page hero. */
  heroImage: string;
  /** Vimeo or YouTube URL. Leave undefined until a screener is ready. */
  trailerUrl?: string;
  stills: string[];
  credits: Credit[];
  /** Shown in the Home page's Featured Work section. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "midnight-ledger",
    title: "Midnight Ledger",
    year: 2025,
    category: "Short Films",
    role: ["Director", "Writer"],
    director: "Sameer Choudhary",
    duration: "17 min",
    genre: "Drama",
    production: "Thesis Film — [Your Film School]",
    logline:
      "A night-shift accountant discovers a discrepancy in the books that isn't hers to fix — or forgive.",
    synopsis:
      "Over one overnight shift at a near-empty logistics depot, Veera finds a quiet, deliberate theft buried in a decade of ledgers — committed by the one person who trained her. Midnight Ledger is a slow-burn chamber drama about complicity, told almost entirely in two rooms and real time.",
    poster: "/images/projects/midnight-ledger/poster.svg",
    heroImage: "/images/projects/midnight-ledger/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/midnight-ledger/still-1.svg",
      "/images/projects/midnight-ledger/still-2.svg",
      "/images/projects/midnight-ledger/still-3.svg",
      "/images/projects/midnight-ledger/still-4.svg",
    ],
    credits: [
      { role: "Director", name: "Sameer Choudhary" },
      { role: "Cinematographer", name: "[Collaborator Name]" },
      { role: "Editor", name: "Sameer Choudhary" },
      { role: "Lead Cast", name: "[Actor Name]" },
      { role: "Sound Design", name: "[Collaborator Name]" },
    ],
    featured: true,
  },
  {
    slug: "season-of-ash",
    title: "Season of Ash",
    year: 2024,
    category: "Documentaries",
    role: ["Director", "Cinematographer"],
    director: "Sameer Choudhary",
    duration: "24 min",
    genre: "Documentary",
    production: "Independent",
    logline:
      "A fourth-generation orchard family decides, over one harvest, whether to replant after fire or let the land go.",
    synopsis:
      "Shot over a single harvest season, Season of Ash follows the Rao family as a wildfire's aftermath forces a decision that's been deferred for twenty years. Observational and unhurried, the film sits with the family's daily labor rather than their grief, letting the larger loss arrive sideways.",
    poster: "/images/projects/season-of-ash/poster.svg",
    heroImage: "/images/projects/season-of-ash/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/season-of-ash/still-1.svg",
      "/images/projects/season-of-ash/still-2.svg",
      "/images/projects/season-of-ash/still-3.svg",
      "/images/projects/season-of-ash/still-4.svg",
    ],
    credits: [
      { role: "Director / Cinematographer", name: "Sameer Choudhary" },
      { role: "Editor", name: "[Collaborator Name]" },
      { role: "Sound Recordist", name: "[Collaborator Name]" },
      { role: "Featuring", name: "The Rao Family" },
    ],
    featured: true,
  },
  {
    slug: "terra-nova",
    title: "Terra Nova",
    year: 2023,
    category: "Films",
    role: ["Director"],
    director: "Sameer Choudhary",
    duration: "68 min",
    genre: "Drama",
    production: "Independent Feature",
    logline:
      "Two estranged siblings spend one week closing their late father's remote guesthouse, and nearly reopen it instead.",
    synopsis:
      "Terra Nova is a feature-length debut about Esha and Dev, who return to their father's off-season guesthouse to shut it down for good and sell the land. What's meant to be a week of paperwork becomes a slow renegotiation of everything left unsaid between them — and an open question about whether the place, and the two of them, are really done.",
    poster: "/images/projects/terra-nova/poster.svg",
    heroImage: "/images/projects/terra-nova/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/terra-nova/still-1.svg",
      "/images/projects/terra-nova/still-2.svg",
      "/images/projects/terra-nova/still-3.svg",
      "/images/projects/terra-nova/still-4.svg",
    ],
    credits: [
      { role: "Director", name: "Sameer Choudhary" },
      { role: "Writer", name: "Sameer Choudhary, [Co-Writer Name]" },
      { role: "Cinematographer", name: "[Collaborator Name]" },
      { role: "Lead Cast", name: "[Actor Name], [Actor Name]" },
      { role: "Editor", name: "[Collaborator Name]" },
      { role: "Composer", name: "[Collaborator Name]" },
    ],
    featured: true,
  },
  {
    slug: "glass-horizon",
    title: "Glass Horizon",
    year: 2024,
    category: "Cinematography",
    role: ["Cinematographer"],
    director: "[Director Name]",
    duration: "14 min",
    genre: "Sci-Fi / Drama",
    production: "[Production Company]",
    logline:
      "A glass-plant technician starts seeing a second reflection — one that moves a half-second late.",
    synopsis:
      "Shot for director [Director Name], Glass Horizon called for a visual language built entirely around reflection and refraction practically achieved on location in an active glass plant. As cinematographer, I designed a lighting and blocking system that let every reflected surface in the frame carry real narrative information rather than incidental detail.",
    poster: "/images/projects/glass-horizon/poster.svg",
    heroImage: "/images/projects/glass-horizon/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/glass-horizon/still-1.svg",
      "/images/projects/glass-horizon/still-2.svg",
      "/images/projects/glass-horizon/still-3.svg",
      "/images/projects/glass-horizon/still-4.svg",
    ],
    credits: [
      { role: "Director", name: "[Director Name]" },
      { role: "Cinematographer", name: "Sameer Choudhary" },
      { role: "Gaffer", name: "[Collaborator Name]" },
      { role: "Lead Cast", name: "[Actor Name]" },
    ],
    featured: true,
  },
  {
    slug: "static-and-silence",
    title: "Static & Silence",
    year: 2025,
    category: "Music Videos",
    role: ["Director", "Cinematographer"],
    director: "Sameer Choudhary",
    duration: "4 min",
    genre: "Music Video",
    production: "[Band / Label Name]",
    logline:
      "A one-take performance video shot on a moving flatbed truck through an emptied-out industrial district at dawn.",
    synopsis:
      "Commissioned by [Band Name] for the single '[Track Name],' Static & Silence is built around a single unbroken take: the band performs live on a slow-moving flatbed as the city wakes up around them. The camera never cuts — only drifts — treating the performance and the city as one continuous, unrepeatable event.",
    poster: "/images/projects/static-and-silence/poster.svg",
    heroImage: "/images/projects/static-and-silence/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/static-and-silence/still-1.svg",
      "/images/projects/static-and-silence/still-2.svg",
      "/images/projects/static-and-silence/still-3.svg",
      "/images/projects/static-and-silence/still-4.svg",
    ],
    credits: [
      { role: "Director / Cinematographer", name: "Sameer Choudhary" },
      { role: "Performed by", name: "[Band Name]" },
      { role: "Colorist", name: "[Collaborator Name]" },
      { role: "Producer", name: "[Collaborator Name]" },
    ],
    featured: true,
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    year: 2023,
    category: "Other",
    role: ["Director", "Editor"],
    director: "Sameer Choudhary",
    duration: "8 min",
    genre: "Experimental",
    production: "Personal Project",
    logline:
      "A year of behind-the-scenes footage, assembled into a diary of everything that happened just before and after 'action.'",
    synopsis:
      "Field Notes is a personal essay film cut entirely from a year of production stills and behind-the-scenes footage from other projects on this site — the rehearsals, the resets, the waiting around. It's less a making-of than an attempt to notice the labor that never makes it into the final cut.",
    poster: "/images/projects/field-notes/poster.svg",
    heroImage: "/images/projects/field-notes/hero.svg",
    trailerUrl: undefined,
    stills: [
      "/images/projects/field-notes/still-1.svg",
      "/images/projects/field-notes/still-2.svg",
      "/images/projects/field-notes/still-3.svg",
      "/images/projects/field-notes/still-4.svg",
    ],
    credits: [
      { role: "Director / Editor", name: "Sameer Choudhary" },
      { role: "Additional Footage", name: "Various Collaborators" },
    ],
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectsByCategory(category: Category | "All"): Project[] {
  const all = getAllProjects();
  if (category === "All") return all;
  return all.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined;
  next: Project | undefined;
} {
  const all = getAllProjects();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: all[(index - 1 + all.length) % all.length],
    next: all[(index + 1) % all.length],
  };
}
