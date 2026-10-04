import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { InstagramIcon, LinkedinIcon, VimeoIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for directing, cinematography, and collaboration inquiries.`,
};

const links = [
  { label: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Vimeo", href: site.social.vimeo, icon: VimeoIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
];

export default function ContactPage() {
  return (
    <div className="pb-28 pt-36 sm:pt-44">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk About Your Project"
          description="For directing, cinematography, collaboration, or festival inquiries — reach out directly or use the form below."
        />
      </Container>

      <Container className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <ul className="flex flex-col gap-6">
            {links.map((link, index) => (
              <Reveal as="li" key={link.label} delay={index * 0.05}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                  className="group flex items-center gap-4 text-paper-dim transition-colors duration-300 hover:text-paper"
                >
                  <link.icon className="size-5 shrink-0 text-paper-faint transition-colors duration-300 group-hover:text-accent" />
                  <span className="text-base">{link.label}</span>
                </a>
              </Reveal>
            ))}
            <Reveal as="li" delay={links.length * 0.05} className="flex items-center gap-4 text-paper-dim">
              <MapPin className="size-5 shrink-0 text-paper-faint" aria-hidden />
              <span className="text-base">{site.location}</span>
            </Reveal>
          </ul>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
