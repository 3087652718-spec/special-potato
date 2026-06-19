import SectionReveal from "./SectionReveal";

const workflow = [
  "选题",
  "AI 辅助背景调研",
  "用户研究",
  "AI 整理痛点与机会点",
  "问题定义",
  "AI 辅助竞品分析",
  "设计目标",
  "功能规划",
  "AI 辅助概念发散",
  "草图 / 造型探索",
  "AI 辅助视觉参考与风格板",
  "方案筛选",
  "建模与结构推敲",
  "AI 辅助渲染 / 场景图",
  "CMF 设计",
  "原型验证",
  "设计说明整理",
  "作品集排版"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-32 text-ink">
      <div className="container-wide">
        <SectionReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">设计能力 / SKILLS</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-tight">设计工作流</h2>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10">
          {workflow.map((step, index) => (
            <SectionReveal key={step} delay={(index % 3) * 0.04}>
              <div className="hover-target group min-h-32 bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:bg-white">
                <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 text-xl font-semibold leading-snug">{step}</h3>
                <div className="mt-5 h-px w-10 bg-black/12 transition group-hover:w-16 group-hover:bg-blue" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
