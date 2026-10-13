import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { films, type FilmId } from '@/content/films';
import { useContent } from '@/i18n';
import { Rich } from '@/components/ui/Rich';
import { Transcript } from './Transcript';

/** Round play badge + label, over the bottom-left of the cover. */
function PlayButton({ label, duration, badge, onClick }: { label: string; duration: string; badge: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group fade-bottom absolute inset-0 flex w-full cursor-pointer items-end justify-start p-[clamp(14px,2.2vw,26px)] text-left text-bright focus-visible:outline-none"
    >
      <span className="inline-flex items-center gap-3.5 rounded-full border border-bright/22 bg-deep/55 py-[7px] pr-5 pl-[7px] backdrop-blur-md transition-colors group-hover:border-bright/40 group-hover:bg-deep/75 group-focus-visible:outline-2 group-focus-visible:outline-offset-3 group-focus-visible:outline-lime max-sm:gap-2.5 max-sm:py-[5px] max-sm:pr-3.5 max-sm:pl-[5px]">
        <span className="grid size-[46px] flex-none place-items-center rounded-full bg-tone text-deep transition-transform group-hover:scale-108 max-sm:size-9 [.tone-back_&]:text-white">
          <Play aria-hidden className="ml-0.5 size-[18px] fill-current max-sm:size-3.5" />
        </span>
        <span className="flex items-center gap-2.5 text-[15px] font-semibold max-sm:text-[13.5px]">
          {label}
          <span aria-hidden className="size-1 rounded-full bg-bright/50 max-sm:hidden" />
          <span className="font-mono text-[12.5px] font-medium tracking-[.1em] text-bright/75 max-sm:hidden">
            {duration}{badge && ` · ${badge}`}
          </span>
        </span>
      </span>
    </button>
  );
}

/** A product film: cover image, play button, note under it and the transcript. Loads nothing until played. */
export function Film({ id, className }: { id: FilmId; className?: string }) {
  const film = useContent(films)[id];
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // The built HTML keeps the browser's own controls (they work without JavaScript); once React runs,
  // our play button replaces them until the film starts.
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);

  const play = () => {
    setPlaying(true);
    video.current?.play().catch(() => { /* the native controls are there if autoplay is refused */ });
  };

  return (
    <div className={className}>
      <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black shadow-film max-sm:rounded-[14px]">
        <video
          ref={video}
          src={film.src}
          poster={film.poster}
          preload="none"
          playsInline
          controls={!enhanced || playing}
          width={1920}
          height={1080}
          aria-label={film.label}
          onPlay={() => setPlaying(true)}
          className="size-full object-cover"
        />
        {enhanced && !playing && <PlayButton label={film.watch} duration={film.duration} badge={film.badge} onClick={play} />}
      </div>
      <p className="mt-3.5 text-center text-[13.5px] text-sub">
        <Rich text={film.note} />
      </p>
      <Transcript label={film.transcriptLabel} text={film.transcript} />
    </div>
  );
}
