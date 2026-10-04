/**
 * lucide-react doesn't ship brand/social icons, so these are small
 * hand-drawn outline glyphs kept visually consistent with the Lucide set
 * used everywhere else (24x24, stroke-based, `currentColor`).
 */

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.2" cy="8.3" r="1.1" fill="currentColor" />
      <line x1="8.2" y1="11" x2="8.2" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="11" x2="12" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 13.2c0-1.4 1-2.4 2.3-2.4 1.3 0 2 .9 2 2.4V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" />
    </svg>
  );
}

export function VimeoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.322 19.16 12.928 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.12-4.104-1.68-6.156-.622-2.24-1.29-3.36-2.005-3.36-.156 0-.7.328-1.634.978L1.5 7.64c1.027-.902 2.04-1.805 3.037-2.708C5.914 3.57 7.07 2.91 7.83 2.84c1.743-.168 2.816.966 3.22 3.402.436 2.628.738 4.26.906 4.898.504 2.282 1.058 3.422 1.662 3.422.47 0 1.175-.743 2.117-2.23.938-1.487 1.44-2.618 1.507-3.397.134-1.283-.368-1.926-1.507-1.926-.537 0-1.09.123-1.662.368 1.104-3.617 3.213-5.374 6.327-5.27 2.31.067 3.4 1.564 3.265 4.49z" />
    </svg>
  );
}
