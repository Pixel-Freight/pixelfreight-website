export type LittleStoriesPhoto = {
  id: string;
  title: string;
  client: string;
  src: string;
  orientation: "portrait" | "landscape";
  palette: string[];
  description: string;
};

export const littleStoriesPhotos: LittleStoriesPhoto[] = [
  {
    id: "celadon-drift",
    title: "Celadon Drift",
    client: "Aurora Tales",
    src: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    orientation: "portrait",
    palette: ["#b2a693", "#5b5149", "#e4e4e4"],
    description: "Soft light falls across overlapping frames of morning rituals.",
  },
  {
    id: "paper-lanterns",
    title: "Paper Lanterns",
    client: "Aurora Tales",
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
    orientation: "landscape",
    palette: ["#73695d", "#2c2c2c", "#e4e4e4"],
    description: "A tabletop vignette of mementos and journal snippets in warm hues.",
  },
  {
    id: "hushed-leaves",
    title: "Hushed Leaves",
    client: "Aurora Tales",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
    palette: ["#5b5149", "#b2a693", "#e4e4e4"],
    description: "Muted greens and beige textures captured in a quiet studio corner.",
  },
  {
    id: "quiet-ink",
    title: "Quiet Ink",
    client: "Kindred Chapters",
    src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    orientation: "landscape",
    palette: ["#2c2c2c", "#696154", "#e4e4e4"],
    description: "Freshly printed stories stacked beside a vintage typewriter.",
  },
  {
    id: "amber-traces",
    title: "Amber Traces",
    client: "Kindred Chapters",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
    palette: ["#b2a693", "#73695d", "#2c2c2c"],
    description: "Hands arranging polaroids on a linen backdrop, mid-storyboard.",
  },
  {
    id: "daybreak-notes",
    title: "Daybreak Notes",
    client: "Kindred Chapters",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    orientation: "landscape",
    palette: ["#e4e4e4", "#5b5149", "#2c2c2c"],
    description: "Sun-faded notebooks layered with hand-scribed prompts.",
  },
  {
    id: "studio-whisper",
    title: "Studio Whisper",
    client: "Moonlight Post",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
    palette: ["#73695d", "#b2a693", "#2c2c2c"],
    description: "A quiet desk scene with dried florals and contact sheets.",
  },
  {
    id: "threads-of-gold",
    title: "Threads of Gold",
    client: "Moonlight Post",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    orientation: "landscape",
    palette: ["#b2a693", "#e4e4e4", "#2c2c2c"],
    description: "Golden hour spotlighting a curated wall of framed stories.",
  },
];

export const gallerySections = [
  {
    id: "aurora-tales",
    label: "Aurora Tales",
    excerpt: "Editorial storytelling for a boutique publisher celebrating daily rituals.",
    photoIds: ["celadon-drift", "paper-lanterns", "hushed-leaves"],
  },
  {
    id: "kindred-chapters",
    label: "Kindred Chapters",
    excerpt: "A visual diary for a storytelling collective exploring memory and craft.",
    photoIds: ["quiet-ink", "amber-traces", "daybreak-notes"],
  },
  {
    id: "moonlight-post",
    label: "Moonlight Post",
    excerpt: "A series of postcards designed to feel like whispered notes at dusk.",
    photoIds: ["studio-whisper", "threads-of-gold"],
  },
];

// About section rotating photos
export const aboutPhotos = [
  {
    id: "about-1",
    title: "Garden Ceremony",
    src: "https://images.unsplash.com/photo-1747885593382-e504492f5741?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    description: "A bride and groom surrounded by gentle afternoon light.",
  },
  {
    id: "about-2",
    title: "The First Look",
    src: "https://images.unsplash.com/photo-1625699052242-a44fa759047a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    description: "An honest, quiet moment between two hearts before the vows.",
  },
  {
    id: "about-3",
    title: "Walk in the Fields",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1200",
    description: "Warm, cinematic tones meet a timeless love story.",
  },
  {
    id: "about-4",
    title: "Timeless Celebration",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    description: "Soft lights, true laughter, and stories that last forever.",
  },
  {
    id: "about-5",
    title: "Under the Lights",
    src: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&q=80&w=1200",
    description: "Evening celebration filled with gentle warmth and emotion.",
  },
];


export const heroPhotoPool = littleStoriesPhotos;
