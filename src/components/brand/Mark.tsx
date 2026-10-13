import { useId } from 'react';
import { LOGO, LOGO_COLOURS, type LogoVariant } from './logoGeometry';

type Stops = readonly string[];

/** Linear gradient in the shape's own box; three colours are placed at 0, 45 % and 100 %. */
export function Gradient({ id, from, to, stops }: { id: string; from: [number, number]; to: [number, number]; stops: Stops }) {
  const offsets = stops.length === 3 ? [0, 0.45, 1] : [0, 1];
  return (
    <linearGradient id={id} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]}>
      {stops.map((colour, i) => <stop key={i} offset={offsets[i]} stopColor={colour} />)}
    </linearGradient>
  );
}

/** A per-instance prefix for gradient ids (React ids contain characters url(#…) dislikes). */
export const useSvgId = () => 'nx' + useId().replace(/[^a-zA-Z0-9]/g, '');

type Props = {
  /** light: on light backgrounds · dark: on dark backgrounds · back: Nexus Back blue. */
  variant?: LogoVariant;
  /** Rim around the dark petals, in mark units (1000 = full width). Thicker reads better when small. */
  rim?: number;
  className?: string;
  title?: string;
};

/** The Nexus mark: four petals around a four-point star. */
export function Mark({ variant = 'dark', rim = 6, className, title }: Props) {
  const id = useSvgId();
  const c = LOGO_COLOURS[variant];
  const rimProps = c.rim ? { stroke: c.rim, strokeWidth: rim } : {};
  return (
    <svg viewBox="0 0 1000 1000" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <defs>
        <Gradient id={`${id}tl`} from={[0, 0]} to={[1, 1]} stops={c.acc} />
        <Gradient id={`${id}br`} from={[1, 1]} to={[0, 0]} stops={c.acc} />
        <Gradient id={`${id}tr`} from={[1, 0]} to={[0, 1]} stops={c.dark} />
        <Gradient id={`${id}bl`} from={[0, 1]} to={[1, 0]} stops={c.dark} />
        <Gradient id={`${id}st`} from={[0.2, 0]} to={[0.8, 1]} stops={c.star} />
      </defs>
      <path d={LOGO.mark.tl} fill={`url(#${id}tl)`} />
      <path d={LOGO.mark.tr} fill={`url(#${id}tr)`} {...rimProps} />
      <path d={LOGO.mark.br} fill={`url(#${id}br)`} />
      <path d={LOGO.mark.bl} fill={`url(#${id}bl)`} {...rimProps} />
      <path d={LOGO.mark.star} fill={`url(#${id}st)`} />
    </svg>
  );
}
