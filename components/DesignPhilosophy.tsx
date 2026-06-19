import SectionReveal from "./SectionReveal";

const keywords = ["用户场景", "产品落地", "视觉表达"];

export default function DesignPhilosophy() {
  return (
    <section className="bg-ink py-36 text-white">
      <div className="container-wide">
        <SectionReveal className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">设计理念 / DESIGN PHILOSOPHY</p>
          </div>
          <div className="col-span-8">
            <p className="text-4xl font-medium leading-[1.45] text-balance">
              我关注产品从用户场景到可落地方案的完整过程，希望通过清晰的问题分析、合理的产品结构、克制的造型语言和完整的视觉表达，让设计不仅停留在概念图，而是具备真实使用和生产转化的可能。
            </p>
            <div className="mt-12 grid grid-cols-3 gap-5">
              {keywords.map(word => (
                <div key={word} className="hover-target border-t border-white/14 py-6 transition hover:border-blue">
                  <span className="text-sm text-blue">KEYWORD</span>
                  <h3 className="mt-4 text-2xl font-semibold">{word}</h3>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
