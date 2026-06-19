"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[760px] items-center justify-center overflow-hidden bg-ink text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0.38)_18%,transparent_38%),radial-gradient(circle_at_52%_58%,rgba(20,120,255,0.68),rgba(20,120,255,0.2)_31%,transparent_58%),linear-gradient(135deg,#f2f3f6_0%,#586274_28%,#08090c_54%,#001f8f_100%)]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_42%_52%,rgba(20,120,255,0.34),transparent_34%)] blur-2xl"
          animate={{ x: [0, 18, -10, 0], y: [0, -12, 10, 0], opacity: [0.65, 0.85, 0.7, 0.65] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 opacity-[0.075] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:4px_4px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      <div className="container-wide absolute top-24 z-10 flex items-center justify-between text-xs">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="tracking-[0.18em] text-white/68"
        >
          Product Design
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="rounded-xl bg-white px-3 py-2 font-semibold tracking-[-0.02em] text-ink shadow-2xl shadow-black/20"
        >
          LJH
        </motion.span>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
      >
        <motion.div
          variants={fadeUp}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[58%] text-[178px] font-semibold uppercase leading-none tracking-[0.02em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)]"
        >
          portfolio
        </motion.div>

        <motion.p variants={fadeUp} className="mb-5 text-xs uppercase tracking-[0.42em] text-white/54">
          Product Design Portfolio
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-[78px] font-semibold uppercase leading-[0.92] tracking-[0.14em] md:text-[104px]">
          MY
          <span className="mt-2 block tracking-[0.16em]">PORTFOLIO</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-8 text-2xl tracking-[0.24em] text-white/48">
          2026
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="#projects"
            className="hover-target inline-flex h-14 items-center justify-center rounded-full bg-white px-9 text-sm font-semibold text-ink shadow-[0_22px_70px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-[0_26px_80px_rgba(255,255,255,0.26)]"
          >
            查看作品
          </Link>
          <Link
            href="#contact"
            className="hover-target inline-flex h-14 items-center justify-center rounded-full border border-white/38 bg-white/5 px-9 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue hover:text-blue hover:shadow-[0_18px_60px_rgba(20,120,255,0.22)]"
          >
            联系我
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-9 h-2.5 w-2.5 rounded-full bg-blue shadow-[0_0_22px_rgba(20,120,255,0.9)]"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.78, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-11 z-10 text-xs tracking-[0.22em] text-white/52"
      >
        产品设计 / 工业设计 / 智能硬件 / 设计表达
      </motion.p>
    </section>
  );
}
