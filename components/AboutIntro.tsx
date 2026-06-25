"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import SectionReveal from "./SectionReveal";

const softwareSkills = [
  ["Rh", "Rhino"],
  ["Ks", "KeyShot"],
  ["Ps", "Adobe Photoshop"],
  ["Ai", "Adobe Illustrator"],
  ["Fg", "Figma"],
  ["C4D", "C4D"],
  ["</>", "Codex"],
  ["G", "Gemini"],
  ["JM", "即梦 ai"]
];

const projectExperiences = [
  {
    title: "微光捕蚊器",
    meta: "课程项目 / 2025",
    description:
      "该项目面向卧室夜间使用场景，尝试将传统灭蚊产品从“固定运行”转向“场景自适应”。产品通过人体感应判断用户是否在场，并在人处于房间内时切换为柔和夜灯模式，降低紫光与风扇对休息的干扰；当用户离开后，自动开启紫光诱蚊与风吸捕蚊模式，在安全感与灭蚊效率之间形成动态平衡。"
  },
  {
    title: "智能导盲机器人",
    meta: "校企合作项目 / 2026",
    description:
      "该项目面向视障用户的户外出行场景，设计重点从“单向牵引”转向“环境感知与自适应引导”。产品通过前向感知模块识别障碍物、道路变化与通行风险，并根据路况自动调整行进方向、速度与握把反馈，使用户能够在更低认知负担下完成避障、等待与转向等出行动作。"
  },
  {
    title: "养老院送药机器人",
    meta: "课程项目 / 2025",
    description:
      "该项目面向养老院护理场景，尝试将服务机器人从“固定路线配送”转向“护理任务自适应”。产品通过识别送药任务、老人身份与配送状态，自动调整提示方式和运行反馈，帮助护工降低重复送药压力，同时减少错拿、漏取和沟通不清带来的用药风险。"
  },
  {
    title: "AI 辅助产品设计实践",
    meta: "设计实践 / 2025 - 至今",
    description:
      "将 AI 工具应用于概念发散、视觉参考、场景生成和作品集表达，并结合建模、渲染和排版完成产品方案展示。"
  }
];

function OptionalImage({
  src,
  alt,
  className,
  imageClassName,
  placeholder
}: {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  placeholder: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className}>
      {failed ? (
        placeholder
      ) : (
        <img
          src={src}
          alt={alt}
          className={imageClassName ?? ""}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function SideMark({ label }: { label: string }) {
  return (
    <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 text-[11px] text-black/35 [writing-mode:vertical-rl] xl:flex">
      <span>{label}</span>
      <span className="h-8 w-px bg-black/25" />
      <span>P/01</span>
    </div>
  );
}

export default function AboutIntro() {
  return (
    <section id="about" className="bg-[#f4f5f6] text-ink">
      <section className="relative min-h-screen overflow-hidden border-b border-black/8">
        <SideMark label="intro" />

        <div className="container-wide relative grid min-h-screen grid-cols-[minmax(420px,520px)_minmax(560px,1fr)] items-center gap-[clamp(96px,8vw,140px)] py-24">
          <SectionReveal className="relative z-10 pl-[6vw]" delay={0.04}>
            <div className="relative">
              <span className="pointer-events-none absolute -left-8 -top-20 select-none text-[10rem] font-semibold leading-none text-black/[0.035]">
                Hello!
              </span>
              <p className="relative text-[4.5rem] font-semibold leading-none text-black">Hello!</p>
            </div>

            <div className="mt-20 max-w-[520px]">
              <h2 className="text-3xl font-semibold leading-tight">我是罗景鸿</h2>
              <p className="mt-3 text-lg text-black/55">广州美术学院产品设计专业大三学生</p>
              <p className="mt-14 text-base leading-[1.72] text-black/62">
                我对工业设计、智能硬件和产品体验设计保持持续兴趣，喜欢从真实场景与用户需求出发，探索产品造型、功能结构与使用体验之间的平衡。关注智能硬件、服务机器人与家居产品方向，并尝试将建模、渲染和 AI 辅助工作流融入设计表达中。
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="pointer-events-none relative min-h-screen" delay={0.16}>
            <OptionalImage
              src="/images/about/portrait.png?v=20260625"
              alt="罗景鸿个人照片"
              className="absolute bottom-0 right-[-7vw] h-[94vh] w-[52vw] max-w-[900px]"
              imageClassName="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
              placeholder={
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-black/35">个人照片待替换</span>
                </div>
              }
            />
          </SectionReveal>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <SideMark label="Resume" />

        <div className="container-wide relative grid min-h-screen grid-cols-[minmax(340px,0.36fr)_minmax(560px,0.54fr)] gap-[clamp(120px,9vw,180px)] py-24">
          <SectionReveal className="pt-10 pl-[6vw]" delay={0.04}>
            <div className="relative mb-20">
              <span className="pointer-events-none absolute -left-6 -top-16 select-none text-[9rem] font-semibold leading-none text-black/[0.035]">
                Resume.
              </span>
              <h2 className="relative text-[4.75rem] font-semibold leading-none text-black">Resume.</h2>
            </div>

            <div className="max-w-[420px]">
              <h3 className="text-3xl font-semibold">教育背景</h3>
              <div className="mt-8 space-y-1 text-black/52">
                <p className="text-lg font-semibold text-black">广州美术学院</p>
                <p>2023 - 2027</p>
                <p>产品设计专业（智能产品系）</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-5">
                <div>
                  <p className="text-sm font-semibold text-black">电话</p>
                  <p className="mt-1 text-black/45">+86 18923329791</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">微信</p>
                  <p className="mt-1 text-black/45">ljh3087652718</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-black">邮箱</p>
                  <a
                    className="mt-1 block text-black/45 transition hover:text-blue"
                    href="mailto:3087652718@qq.com"
                  >
                    3087652718@qq.com
                  </a>
                </div>
              </div>

              <h3 className="mt-16 text-3xl font-semibold">软件技能</h3>
              <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-4">
                {softwareSkills.map(([icon, name]) => (
                  <div
                    key={name}
                    className="hover-target flex items-center gap-3 text-black/55 transition duration-300 hover:-translate-y-0.5 hover:text-black"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-black/25 text-[11px] font-semibold text-black/45">
                      {icon}
                    </span>
                    <span className="text-lg">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="pt-20" delay={0.14}>
            <div className="mb-12 flex items-center gap-8">
              <h3 className="shrink-0 text-4xl font-semibold">项目经历</h3>
              <span className="h-px flex-1 bg-blue/70" />
            </div>

            <div className="space-y-12">
              {projectExperiences.map(project => (
                <article key={project.title} className="max-w-[760px]">
                  <h4 className="text-xl font-semibold text-black">{project.title}</h4>
                  <p className="mt-1 text-sm text-black/45">{project.meta}</p>
                  <p className="mt-5 text-sm leading-[1.85] text-black/52">{project.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <OptionalImage
                src="/images/about/qrcode.png"
                alt="联系二维码"
                className="relative flex h-28 w-28 items-center justify-center"
                imageClassName="absolute inset-0 h-full w-full object-contain opacity-60"
                placeholder={
                  <span className="text-center text-xs leading-5 text-black/35">二维码待替换</span>
                }
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </section>
  );
}
