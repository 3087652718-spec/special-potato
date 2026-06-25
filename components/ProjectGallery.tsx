"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { otherProjects } from "@/data/projects";
import SectionReveal from "./SectionReveal";
import VisualPlaceholder from "./VisualPlaceholder";

const AUTOPLAY_MS = 10000;

const projectSlides = [
  {
    index: "/01",
    title: "微光捕蚊器",
    line: "Quiet light, gentle protection.",
    intro:
      "围绕卧室夜间灭蚊场景展开，将传统工具型灭蚊灯转化为更安静、柔和、适合长期摆放的家居小电器。",
    meta: "产品设计项目｜2025",
    href: "/projects/mosquito",
    image: "/images/projects/mosquito/featured-bg.jpg",
    fallbackImage: "/images/projects/微光捕蚊器/cover.webp"
  },
  {
    index: "/02",
    title: "导盲机器人",
    line: "Guidance with trust.",
    intro:
      "将前向感知、本地判断与牵引式交互整合到轻量化导盲机器人中，帮助视障用户完成通路判断、避障绕行与最后 10 米精准到达。",
    meta: "产品设计项目｜2026",
    href: "/projects/guide-robot",
    image: "/images/projects/guide-robot/featured-bg.jpg",
    fallbackImage: "/images/projects/智能导盲机器人/cover-new.webp"
  },
  {
    index: "/03",
    title: "智送药护",
    subtitle: "养老院送药机器人",
    line: "Care delivery, safer medication.",
    intro:
      "面向养老院与护理机构的末端给药场景，通过移动配送、身份核验与状态反馈，降低重复跑腿负担并提升给药流程的安全性。",
    meta: "产品设计项目｜2026",
    href: "/projects/medicine-robot",
    image: "/images/projects/medicine-robot/featured-bg.jpg",
    fallbackImage: "/images/projects/养老院送药机器人/cover.webp"
  }
];

function wrapIndex(index: number) {
  return (index + projectSlides.length) % projectSlides.length;
}

export default function ProjectGallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = projectSlides[active];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive(current => wrapIndex(current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="projects" className="bg-ink text-white">
      <div className="container-wide py-28">
        <SectionReveal className="mb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">作品 / PROJECTS</p>
          <h2 className="max-w-4xl text-6xl font-semibold leading-tight">项目作品展示</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
            点击查看详情，观看完整项目介绍。
          </p>
        </SectionReveal>
      </div>

      <section
        aria-label="重点项目轮播"
        className="relative min-h-screen overflow-hidden bg-[#f4f5f6] text-ink"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.href}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8f8f8_0%,#d8dde3_46%,#9aa3ad_100%)]" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image}), url(${slide.fallbackImage})` }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-[clamp(96px,8vw,160px)] top-1/2 z-10 -translate-y-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.href}
              className="relative flex max-w-[620px] flex-col items-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                {slide.index} / FEATURED PROJECT
              </p>
              <h3 className="relative mt-6 text-7xl font-semibold leading-[0.95] tracking-[-0.035em] text-black">
                {slide.title}
              </h3>
              {slide.subtitle && (
                <p className="relative mt-4 text-2xl font-semibold tracking-[-0.02em] text-black/75">
                  {slide.subtitle}
                </p>
              )}
              <p className="relative mt-9 text-sm font-semibold uppercase tracking-[0.22em] text-black/65">
                {slide.line}
              </p>
              <p className="relative mt-8 max-w-xl text-lg leading-9 text-black/78">{slide.intro}</p>
              <p className="relative mt-8 text-sm font-medium text-black/62">{slide.meta}</p>
              <Link
                href={slide.href}
                className="hover-target relative mt-10 inline-flex rounded-full bg-[#0A84FF] px-7 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#006EE6] hover:shadow-[0_10px_24px_rgba(10,132,255,0.18)]"
              >
                进一步了解
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-2">
          {projectSlides.map((item, index) => (
            <button
              key={item.href}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`切换到 ${item.title}`}
              className={`h-2.5 rounded-full transition ${
                active === index ? "w-8 bg-blue" : "w-2.5 bg-black/22 hover:bg-black/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive(current => wrapIndex(current - 1))}
          aria-label="上一个项目"
          className="hover-target absolute left-8 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-black/12 bg-white/58 text-xl text-ink transition hover:-translate-y-[52%] hover:border-blue hover:bg-white/78 hover:text-blue md:left-10"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => setActive(current => wrapIndex(current + 1))}
          aria-label="下一个项目"
          className="hover-target absolute right-8 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-black/12 bg-white/58 text-xl text-ink transition hover:-translate-y-[52%] hover:border-blue hover:bg-white/78 hover:text-blue md:right-10"
        >
          →
        </button>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="container-wide">
          <button
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            className="hover-target group flex w-full items-center justify-between border-y border-white/12 py-10 text-left transition hover:border-blue/60"
          >
            <span>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-blue">其他 / OTHER WORKS</span>
              <span className="block text-5xl font-semibold tracking-[-0.01em]">更多项目作品</span>
            </span>
            <span className="flex items-center gap-5 text-white/70">
              <span className="hidden h-px w-20 bg-white/14 transition group-hover:bg-blue md:block" />
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/14 text-3xl font-light transition group-hover:border-blue group-hover:text-blue">
                {open ? "−" : "+"}
              </span>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.52, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover-target group grid grid-cols-12 items-center gap-8 border-b border-white/10 py-8 transition hover:-translate-y-1 hover:bg-white/[0.035]"
                      >
                        <div className="col-span-2 flex items-center gap-5 pl-2">
                          <span className="text-sm font-semibold text-blue">{project.index}</span>
                          <span className="h-px w-12 bg-white/12 transition group-hover:bg-blue" />
                        </div>
                        <div className="col-span-5">
                          <p className="text-sm text-white/42">{project.category}</p>
                          <h3 className="mt-3 text-3xl font-semibold">{project.name}</h3>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/52">{project.intro}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.roles.map(role => (
                              <span key={role} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/48">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-3 overflow-hidden rounded-[22px]">
                          <VisualPlaceholder
                            image={project.images.cover}
                            label="其他项目图"
                            showLabel={false}
                            className="h-44 transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="col-span-2 justify-self-end pr-2">
                          <span className="rounded-full border border-white/14 px-5 py-3 text-sm text-white/70 transition group-hover:border-blue group-hover:bg-blue group-hover:text-white">
                            查看详情
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
}
