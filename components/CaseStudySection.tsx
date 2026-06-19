import type { ReactNode } from "react";
import SectionReveal from "./SectionReveal";

type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
};

export default function CaseStudySection({ eyebrow, title, children, dark = false }: CaseStudySectionProps) {
  return (
    <section className={`${dark ? "bg-ink text-white" : "bg-paper text-ink"} py-28`}>
      <div className="container-wide">
        <SectionReveal className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">{eyebrow}</p>
            <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
          </div>
          <div className={`col-span-8 text-lg leading-9 ${dark ? "text-white/62" : "text-black/62"}`}>
            {children}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
