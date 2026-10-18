import { Mail } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/sections/ContactForm';
import { contact } from '@/content/contact';
import { useContent } from '@/i18n';
import { SITE } from '@/site';

/** Contact: what the demo is, the email address (a link to the form) and the form. */
export function Contact() {
  const t = useContent(contact);
  return (
    <Section surface="dark" glow="contact" dots padded={false} labelledBy="page-title" className="pt-[148px] pb-28 max-sm:pt-28 max-sm:pb-18">
      <div className="grid grid-cols-[5fr_6fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 id="page-title" className="mt-5 text-h1 tracking-[-.045em]"><Rich text={t.title} /></h1>
          <p className="mt-6 text-lead text-sub"><Rich text={t.lead} /></p>
          <ul className="mt-9 grid gap-4">
            {t.points.map((p) => (
              <li key={p.strong} className="flex items-start gap-3.5 text-[15.5px] text-sub">
                <p.icon aria-hidden className="mt-px size-[22px] flex-none text-hl" strokeWidth={1.9} />
                <span><b className="font-semibold text-bright"><Rich text={p.strong} /></b><Rich text={p.text} /></span>
              </li>
            ))}
          </ul>
          <a href="#contact-form" className="mt-9 inline-flex items-center gap-3 border-b-2 border-lime/50 pb-1 text-[clamp(19px,2vw,23px)] font-bold tracking-[-.02em] transition-colors hover:border-lime">
            <Mail aria-hidden className="size-[22px] text-hl" strokeWidth={1.9} />
            {SITE.email}
          </a>
        </Reveal>
        <Reveal delay={1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
