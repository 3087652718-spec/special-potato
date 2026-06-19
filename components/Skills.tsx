import SectionReveal from "./SectionReveal";

const workflow = [
  {
    title: "Research",
    subtitle: "研究洞察",
    description: "从用户、场景与竞品出发，收集项目背景信息，建立设计判断的基础。",
    tags: ["用户访谈", "场景观察", "竞品分析", "AI 辅助资料整理"]
  },
  {
    title: "Define",
    subtitle: "问题定义",
    description: "从调研信息中提炼核心痛点，明确设计机会、目标人群与产品方向。",
    tags: ["痛点归纳", "需求分层", "设计目标", "AI 辅助痛点归纳"]
  },
  {
    title: "Concept",
    subtitle: "概念发散",
    description: "围绕核心问题提出多方向方案，快速探索功能、形态、交互与使用场景。",
    tags: ["草图发散", "功能推演", "造型探索", "AI 辅助概念发散"]
  },
  {
    title: "Design",
    subtitle: "方案深化",
    description: "对选定方案进行造型、结构、CMF、交互细节与视觉表现的深化。",
    tags: ["结构细化", "CMF 设计", "交互细节", "AI 辅助场景图"]
  },
  {
    title: "Validate",
    subtitle: "表达验证",
    description: "通过渲染图、场景图、版式排版与展示文案，检查方案表达的完整度。",
    tags: ["渲染表现", "场景验证", "作品集排版", "AI 辅助展示文案优化"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-32 text-ink">
      <div className="container-wide">
        <SectionReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">设计能力 / SKILLS</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-tight">设计工作流</h2>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-5 gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10">
          {workflow.map((step, index) => (
            <SectionReveal key={step.title} className="h-full" delay={index * 0.04}>
              <article className="hover-target group flex h-full min-h-[360px] flex-col bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:bg-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-10 bg-black/12 transition group-hover:w-16 group-hover:bg-blue" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold leading-tight">{step.title}</h3>
                <p className="mt-2 text-lg font-semibold text-black/72">{step.subtitle}</p>
                <p className="mt-6 text-sm leading-7 text-black/58">{step.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {step.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/54 transition group-hover:border-blue/40 group-hover:text-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
