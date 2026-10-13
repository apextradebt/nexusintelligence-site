import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Rich } from '@/components/ui/Rich';
import { contact } from '@/content/contact';
import { typeset, useContent, useLang } from '@/i18n';
import { cn } from '@/lib/cn';
import { SITE } from '@/site';
import { href } from '@/routes';

const INPUT = 'w-full rounded-xl border border-bright/16 bg-deep/55 px-3.5 py-[13px] text-base text-bright transition placeholder:text-stone/75 focus:border-lime focus:bg-deep/75 focus:shadow-[0_0_0_3px_rgba(145,166,115,.25)] focus:outline-none aria-[invalid=true]:border-rust';

/** A labelled form field; the label sits above the control. */
function Field({ label, htmlFor, full, children }: { label: ReactNode; htmlFor: string; full?: boolean; children: ReactNode }) {
  return (
    <div className={cn('grid gap-2', full && 'col-span-full')}>
      <label htmlFor={htmlFor} className="text-[13.5px] font-semibold text-whisper">{label}</label>
      {children}
    </div>
  );
}

/** Radio buttons drawn as pills. */
function Choices({ legend, name, options, value, onChange }: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="col-span-full m-0 grid min-w-0 gap-2 border-0 p-0">
      <legend className="mb-2 p-0 text-[13.5px] font-semibold text-whisper">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value} className="relative">
            <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="peer absolute size-px opacity-0" />
            <span className="inline-flex cursor-pointer items-center rounded-full border border-bright/16 px-3.5 py-[9px] text-[14.5px] text-stone transition peer-checked:border-lime peer-checked:bg-lime/20 peer-checked:text-bright peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

type Status = { kind: 'idle' | 'sent' | 'error'; text: string };

/**
 * Demo request. Submitting opens the visitor's mail app with the message written, so the site needs no server
 * and stores nothing. `?solution=back` in the address preselects Nexus Back.
 */
export function ContactForm() {
  const t = useContent(contact).form;
  const lang = useLang();
  const [values, setValues] = useState({ name: '', company: '', email: '', phone: '', message: '', solution: 'Nexus B2B' });
  const [invalid, setInvalid] = useState({ name: false, email: false });
  const [status, setStatus] = useState<Status>({ kind: 'idle', text: '' });

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('solution');
    if (wanted === 'back') setValues((v) => ({ ...v, solution: 'Nexus Back' }));
  }, []);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (key === 'name' || key === 'email') setInvalid((i) => ({ ...i, [key]: false }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const bad = { name: values.name.trim().length < 2, email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) };
    setInvalid(bad);
    if (bad.name || bad.email) {
      setStatus({ kind: 'error', text: t.invalid });
      document.getElementById(bad.name ? 'f-name' : 'f-email')?.focus();
      return;
    }
    const f = t.fields;
    const lines = ([
      [f.name, values.name], [f.company, values.company], [f.email, values.email], [f.phone, values.phone], [f.solution, values.solution],
    ] as const).filter(([, v]) => v.trim()).map(([k, v]) => `${k}${t.separator}${v.trim()}`);
    const body = [...lines, '', values.message.trim()].join('\n');
    const subject = [t.subject, values.solution, values.company.trim()].filter(Boolean).join(' · ');
    setStatus({ kind: 'sent', text: t.sending + SITE.email + '.' });
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      action={`mailto:${SITE.email}`}
      method="post"
      encType="text/plain"
      className="rounded-[26px] border border-bright/12 bg-bright/[.045] p-[34px] backdrop-blur-sm max-sm:px-5 max-sm:py-6"
    >
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <Field label={t.name} htmlFor="f-name">
          <input id="f-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={set('name')} aria-invalid={invalid.name} className={INPUT} />
        </Field>
        <Field label={t.company} htmlFor="f-company">
          <input id="f-company" name="company" type="text" autoComplete="organization" value={values.company} onChange={set('company')} className={INPUT} />
        </Field>
        <Field label={t.email} htmlFor="f-email">
          <input id="f-email" name="email" type="email" inputMode="email" autoComplete="email" required value={values.email} onChange={set('email')} aria-invalid={invalid.email} className={INPUT} />
        </Field>
        <Field label={<>{t.phone} <span className="font-medium text-stone">{t.optional}</span></>} htmlFor="f-phone">
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={INPUT} />
        </Field>
        <Choices
          legend={typeset(t.interest, lang)}
          name="solution"
          value={values.solution}
          onChange={(solution) => setValues((v) => ({ ...v, solution }))}
          options={[
            { value: 'Nexus B2B', label: 'Nexus B2B' },
            { value: 'Nexus Back', label: 'Nexus Back' },
            { value: 'Nexus B2B + Nexus Back', label: t.both },
          ]}
        />
        <Field label={t.message} htmlFor="f-msg" full>
          <textarea id="f-msg" name="message" rows={5} placeholder={t.placeholder} value={values.message} onChange={set('message')} className={cn(INPUT, 'min-h-[130px] resize-y leading-normal')} />
        </Field>
      </div>
      <div className="mt-[22px] flex flex-wrap items-center gap-4">
        <Button type="submit" arrow>{t.submit}</Button>
        <p className="flex-[1_1_220px] text-[13px] leading-normal text-stone">
          <Rich text={t.note} /> (<a href={href('legal', lang, 'donnees')} className="text-whisper underline">{t.noteLink}</a>).
        </p>
      </div>
      <p role="status" aria-live="polite" className={cn('mt-3.5 min-h-[1.5em] text-[14.5px]', status.kind === 'error' ? 'text-[#F0A283]' : 'text-lime-2')}>
        {status.text && <Rich text={status.text} />}
      </p>
    </form>
  );
}
