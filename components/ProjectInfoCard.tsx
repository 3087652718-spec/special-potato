import type { ProjectInfo } from "@/data/projects";
import SectionReveal from "./SectionReveal";

type ProjectInfoCardProps = {
  info: ProjectInfo;
};

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map(item => (
        <span
          key={item}
          className="hover-target rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-2 text-xs leading-none text-white/68 transition hover:-translate-y-0.5 hover:border-blue/60 hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ProjectInfoCard({ info }: ProjectInfoCardProps) {
  const featureTitle = info.highlights ? "核心亮点" : "项目关键词";
  const featureItems = info.highlights ?? info.keywords ?? [];

  return (
    <section className="bg-ink px-0 pb-24 text-white">
      <div className="container-wide">
        <SectionReveal>
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/20">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue">PROJECT INFO</p>
                <h2 className="text-2xl font-semibold">项目信息</h2>
              </div>
              <span className="hidden h-px w-24 bg-blue/70 shadow-[0_0_18px_rgba(20,120,255,0.45)] md:block" />
            </div>

            <div className="grid grid-cols-12 gap-x-8 gap-y-8">
              <div className="col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">项目类型</p>
                <p className="mt-3 text-lg leading-8 text-white/82">{info.type}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">项目时间</p>
                <p className="mt-3 text-lg leading-8 text-white/82">{info.year}</p>
              </div>
              <div className="col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">使用工具</p>
                <div className="mt-3">
                  <TagList items={info.tools} />
                </div>
              </div>
              <div className="col-span-6 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">我的职责</p>
                <div className="mt-3">
                  <TagList items={info.role} />
                </div>
              </div>
              <div className="col-span-6 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">{featureTitle}</p>
                <div className="mt-3">
                  <TagList items={featureItems} />
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
