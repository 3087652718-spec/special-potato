"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { featuredProjects, otherProjects } from "@/data/projects";
import SectionReveal from "./SectionReveal";
import VisualPlaceholder from "./VisualPlaceholder";
import { useState } from "react";

export default function ProjectGallery() {
  const [open, setOpen] = useState(false);

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

      <div>
        {featuredProjects.map((project, i) => (
          <section key={project.slug} className={`${i % 2 === 0 ? "bg-ink text-white" : "bg-paper text-ink"} min-h-[90vh] py-20`}>
            <div className="container-wide grid min-h-[calc(90vh-160px)] grid-cols-12 items-center gap-10">
              <SectionReveal className="col-span-5">
                <div className="mb-9 flex items-center gap-5">
                  <span className="text-sm font-semibold text-blue">{project.index}</span>
                  <span className="blue-line" />
                </div>
                <p className={`text-sm font-medium ${i % 2 === 0 ? "text-white/50" : "text-black/45"}`}>{project.category}</p>
                <h3 className="mt-5 text-6xl font-semibold leading-tight tracking-[-0.01em]">{project.name}</h3>
                <p className={`mt-7 text-lg leading-9 ${i % 2 === 0 ? "text-white/62" : "text-black/62"}`}>{project.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.roles.map(role => (
                    <span key={role} className={`rounded-full border px-3.5 py-2 text-xs ${i % 2 === 0 ? "border-white/12 text-white/58" : "border-black/10 text-black/54"}`}>
                      {role}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className={`hover-target mt-10 inline-flex rounded-full border px-6 py-3 text-sm font-medium transition ${i % 2 === 0 ? "border-white/16 text-white hover:border-blue hover:bg-blue" : "border-black/14 text-ink hover:border-blue hover:bg-blue hover:text-white"}`}>
                  查看详情 / Case Study
                </Link>
              </SectionReveal>

              <SectionReveal className="col-span-7" delay={0.12}>
                <VisualPlaceholder image={project.images.cover} label="项目封面图 / 产品渲染图" className="hover-target h-[620px] rounded-[34px] shadow-2xl shadow-black/20" />
              </SectionReveal>
            </div>
          </section>
        ))}
      </div>

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
                          <VisualPlaceholder image={project.images.cover} label="其他项目图" showLabel={false} className="h-44 transition duration-500 group-hover:scale-[1.03]" />
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
