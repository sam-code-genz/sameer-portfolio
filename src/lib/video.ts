export type VideoProvider = "vimeo" | "youtube";

export type ParsedVideo = {
  provider: VideoProvider;
  id: string;
  embedUrl: string;
};

/** Accepts common Vimeo/YouTube URL shapes and returns an embeddable URL. */
export function parseVideoUrl(url: string | undefined): ParsedVideo | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (!id) return null;
      return {
        provider: "vimeo",
        id,
        embedUrl: `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=1`,
      };
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = parsed.searchParams.get("v");
      if (!id) return null;
      return {
        provider: "youtube",
        id,
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
      };
    }

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (!id) return null;
      return {
        provider: "youtube",
        id,
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
      };
    }

    return null;
  } catch {
    return null;
  }
}
