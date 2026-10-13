import { Gradient, useSvgId } from './Mark';
import { LOGO, LOGO_COLOURS, type LogoVariant } from './logoGeometry';

type Props = {
  variant?: LogoVariant;
  /** Show "INTELLIGENCE" under NEXUS (off on phones, where it would be too small to read). */
  withSubline?: boolean;
  /** Stroke of the thin INTELLIGENCE letters; thicker reads better at small sizes. */
  sublineStroke?: number;
  className?: string;
};

/** NEXUS in its extended letters, the bar over the E in the accent gradient, optionally INTELLIGENCE below. */
export function Wordmark({ variant = 'dark', withSubline = true, sublineStroke = LOGO.word.subStroke, className }: Props) {
  const id = useSvgId();
  const c = LOGO_COLOURS[variant];
  const { width, height, subTop, subCap } = LOGO.word;
  return (
    <svg viewBox={`0 0 ${width} ${withSubline ? height : 100}`} className={className} aria-hidden>
      <defs>
        <Gradient id={`${id}bar`} from={[0, 0]} to={[1, 0]} stops={c.bar} />
        <clipPath id={`${id}clip`}>
          <rect x={-10} y={subTop} width={width + 20} height={subCap} />
        </clipPath>
      </defs>
      <path d={LOGO.nexus} fill={c.ink} />
      <path d={LOGO.eBar} fill={`url(#${id}bar)`} />
      {withSubline && (
        <path
          d={LOGO.intelligence}
          fill="none"
          stroke={c.sub}
          strokeWidth={sublineStroke}
          strokeMiterlimit={10}
          clipPath={`url(#${id}clip)`}
        />
      )}
    </svg>
  );
}
