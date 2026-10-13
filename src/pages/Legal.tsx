import { Section } from '@/components/ui/Section';
import { LegalNotice } from '@/components/sections/LegalNotice';

/** Legal notice, privacy and credits (the header is solid on this light page). */
export function Legal() {
  return (
    <Section padded={false} labelledBy="page-title" className="pt-[140px] pb-24">
      <LegalNotice />
    </Section>
  );
}
