import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.vimeo, label: "Vimeo" },
  { href: site.social.youtube, label: "YouTube" },
  { href: site.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-10 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-dim">
            {site.profession}
            <br />
            {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm uppercase tracking-[0.15em] text-paper-dim transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-paper-dim transition-colors duration-300 hover:text-paper"
          >
            {site.email}
          </a>
          <p className="text-xs text-paper-faint">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>

      <div className="border-t border-line py-4">
        <Container className="flex items-center justify-center">
          <a
            href="#top"
            className="text-[11px] uppercase tracking-[0.2em] text-paper-faint transition-colors hover:text-paper-dim"
          >
            Back to top
          </a>
        </Container>
      </div>
    </footer>
  );
}
