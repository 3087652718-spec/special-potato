import SectionReveal from "./SectionReveal";

const info = [
  ["专业", "产品设计 / 工业设计"],
  ["方向", "智能硬件 / 服务机器人 / 家电产品 / 交通工具"],
  ["工具", "Rhino / KeyShot / Photoshop / Illustrator / Figma / Codex / Gemini"],
  ["联系", "3087652718@qq.com"]
];

const tags = ["产品设计", "用户研究", "造型推导", "CMF 设计", "产品渲染", "AI 辅助设计"];

export default function AboutIntro() {
  return (
    <section id="about" className="bg-paper py-32 text-ink">
      <div className="container-wide">
        <SectionReveal className="mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">关于我 / ABOUT ME</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-tight">从用户场景出发，把概念推进到可表达、可验证的产品方案。</h2>
        </SectionReveal>

        <div className="grid grid-cols-12 gap-10">
          <SectionReveal className="col-span-5" delay={0.05}>
            <div className="hover-target group relative aspect-[4/5] overflow-hidden rounded-[32px] bg-black shadow-2xl shadow-black/10">
              <img
                src="/images/profile/luo-jinghong.webp"
                alt="罗景鸿照片"
                className="h-full w-full object-cover object-[center_28%] transition duration-700 ease-smooth group-hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </SectionReveal>

          <SectionReveal className="col-span-7 self-center pl-8" delay={0.16}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue">Product Designer / Industrial Design Student</p>
            <h3 className="mt-5 text-5xl font-semibold">你好，我是罗景鸿</h3>
            <p className="mt-4 text-xl text-black/58">产品设计师 / 工业设计学生</p>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-black/64">
              关注用户场景、产品造型、CMF 与 AI 辅助设计表达
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5 border-y border-black/10 py-8">
              {info.map(([label, value]) => (
                <div key={label}>
                  <span className="block text-xs uppercase tracking-[0.18em] text-black/38">{label}</span>
                  <strong className="mt-2 block text-sm font-medium leading-6 text-black/78">{value}</strong>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map(tag => (
                <span key={tag} className="hover-target rounded-full border border-black/10 px-4 py-2 text-sm text-black/62 transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:bg-blue/10 hover:text-ink">
                  {tag}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
