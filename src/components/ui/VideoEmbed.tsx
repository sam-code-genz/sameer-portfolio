"use client";

import { useState } from "react";
import Image from "next/image";
import { Film, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { parseVideoUrl } from "@/lib/video";

/**
 * Click-to-load facade for a Vimeo/YouTube embed: nothing from the video
 * provider loads until the viewer presses play, which keeps the page light.
 * Pass no `url` yet (e.g. a screener isn't cut) and it renders an honest
 * "coming soon" panel instead of a broken or placeholder video.
 */
export function VideoEmbed({
  url,
  poster,
  title,
  className,
}: {
  url?: string;
  poster: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const video = parseVideoUrl(url);

  if (playing && video) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden bg-ink-soft", className)}>
        <iframe
          src={video.embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className={cn("group relative aspect-video w-full overflow-hidden bg-ink-soft", className)}>
      <Image
        src={poster}
        alt={video ? `${title} — video preview` : `${title} — screener not yet available`}
        fill
        sizes="100vw"
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          video && "group-hover:scale-[1.03]"
        )}
      />
      <div className="absolute inset-0 bg-ink/40" />

      {video ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper focus-visible:outline-accent"
          aria-label={`Play ${title}`}
        >
          <span className="flex size-16 items-center justify-center rounded-full border border-paper/50 bg-ink/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <Play className="ml-1 size-6" fill="currentColor" aria-hidden />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em]">Play Screener</span>
        </button>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-paper">
          <Film className="size-8 text-paper-dim" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-paper-dim">
            Screener Available on Request
          </span>
        </div>
      )}
    </div>
  );
}
