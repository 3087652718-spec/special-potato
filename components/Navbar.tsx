"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "首页", href: "/#home" },
  { label: "关于我", href: "/#about" },
  { label: "作品", href: "/#projects" },
  { label: "能力", href: "/#skills" },
  { label: "联系", href: "/#contact" }
];

function isLightBackground() {
  const sections = Array.from(document.querySelectorAll("section"));
  const viewportMiddle = window.innerHeight * 0.5;

  return sections.some(section => {
    const rect = section.getBoundingClientRect();
    const className = section.className.toString();
    return className.includes("bg-paper") && rect.top < viewportMiddle && rect.bottom > 64;
  });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lightSection, setLightSection] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setLightSection(isLightBackground());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const textColor = lightSection ? "text-ink" : "text-white";
  const mutedColor = lightSection ? "text-ink/64" : "text-white/70";
  const hoverColor = lightSection ? "hover:text-ink" : "hover:text-white";
  const surface = lightSection
    ? "border-b border-black/10 bg-white/78 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
    : scrolled
      ? "border-b border-white/10 bg-ink/68 backdrop-blur-2xl"
      : "bg-transparent";

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition duration-300 ${surface}`}>
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/#home" className={`hover-target text-xs font-semibold uppercase tracking-[0.22em] transition ${textColor}`}>
          Product Portfolio
        </Link>
        <nav className={`flex items-center gap-9 text-sm transition ${mutedColor}`}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`hover-target transition ${hoverColor}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
