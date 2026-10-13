import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

export type ShowcaseStep = { title: string; text: string; image: string; alt: string };

/** One step in the list: number, title and text. Selecting it shows its screen. */
function StepTab({ index, step, selected, id, panelId, onSelect, onKeyDown, tabRef }: {
  index: number;
  step: ShowcaseStep;
  selected: boolean;
  id: string;
  panelId: string;
  onSelect: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  tabRef: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={tabRef}
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={cn(
        'relative block w-full cursor-pointer rounded-2xl py-[18px] pr-5 pl-16 text-left transition-colors duration-300 max-sm:py-4 max-sm:pr-3.5 max-sm:pl-[54px]',
        selected ? 'bg-card shadow-card ring-1 ring-card-line' : 'hover:bg-tone/8',
      )}
    >
      <span aria-hidden className={cn('absolute top-[18px] bottom-[18px] left-0 w-[3px] rounded transition-colors', selected ? 'bg-tone' : 'bg-transparent')} />
      <span className={cn('absolute top-5 left-5 font-mono text-[13px] font-bold tracking-[.06em] max-sm:left-4', selected ? 'text-hl' : 'text-sub')}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="block text-[18.5px] leading-snug font-bold tracking-[-.02em]"><Rich text={step.title} /></span>
      <span className="mt-1.5 block text-[15px] leading-[1.55] text-sub"><Rich text={step.text} /></span>
    </button>
  );
}

/** The app screens, stacked; the selected one fades in. On phones it sticks under the header above the steps. */
function ScreenStack({ steps, active, ids, stage, caption }: {
  steps: ShowcaseStep[];
  active: number;
  ids: { tab: (i: number) => string; panel: (i: number) => string };
  stage: 'b2b' | 'back';
  caption: string;
}) {
  return (
    <div
      className={cn(
        'max-lg:sticky max-lg:top-[68px] max-lg:z-10 max-lg:-order-1 max-lg:-mx-6 max-lg:px-6 max-lg:pb-1.5 max-sm:top-[60px] max-sm:-mx-4 max-sm:px-4',
        stage === 'b2b' ? 'max-lg:bg-page' : 'max-lg:bg-navy',
      )}
    >
      <div className={cn('relative isolate overflow-hidden rounded-[28px] p-[clamp(18px,3vw,36px)]', stage === 'b2b' ? 'stage-b2b' : 'stage-back ring-1 ring-cloud/8')}>
        <div aria-hidden className="dots-tight absolute inset-0 -z-10" />
        <div className="grid">
          {steps.map((step, i) => (
            <figure
              key={step.image + i}
              id={ids.panel(i)}
              role="tabpanel"
              aria-labelledby={ids.tab(i)}
              aria-hidden={i !== active}
              className={cn(
                'm-0 [grid-area:1/1] transition duration-500 ease-soft',
                i === active ? 'opacity-100' : 'pointer-events-none translate-y-2.5 scale-[.985] opacity-0',
              )}
            >
              <img src={step.image} alt={step.alt} width={1600} height={1109} loading="lazy" decoding="async" className="shot-shadow w-full" />
            </figure>
          ))}
        </div>
      </div>
      <p className="mt-3.5 text-right text-[13px] text-sub max-lg:mt-2 max-lg:text-xs"><Rich text={caption} /></p>
    </div>
  );
}

/** Steps on one side, the matching app screen on the other; arrow keys move between steps. */
export function Showcase({ label, caption, steps, stage = 'b2b' }: {
  label: string;
  caption: string;
  steps: ShowcaseStep[];
  stage?: 'b2b' | 'back';
}) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const ids = { tab: (i: number) => `${base}-tab-${i}`, panel: (i: number) => `${base}-panel-${i}` };

  const select = (i: number, focus = false) => {
    setActive(i);
    if (focus) tabs.current[i]?.focus();
  };
  const onKeyDown = (i: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    const n = steps.length;
    const next = { ArrowDown: (i + 1) % n, ArrowRight: (i + 1) % n, ArrowUp: (i - 1 + n) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <div className="grid grid-cols-[5fr_7fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-5">
      <Reveal>
        <div role="tablist" aria-orientation="vertical" aria-label={label} className="grid gap-1.5">
          {steps.map((step, i) => (
            <StepTab
              key={step.title}
              index={i}
              step={step}
              selected={i === active}
              id={ids.tab(i)}
              panelId={ids.panel(i)}
              onSelect={() => select(i)}
              onKeyDown={onKeyDown(i)}
              tabRef={(el) => { tabs.current[i] = el; }}
            />
          ))}
        </div>
      </Reveal>
      <ScreenStack steps={steps} active={active} ids={ids} stage={stage} caption={caption} />
    </div>
  );
}
