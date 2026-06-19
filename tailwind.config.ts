import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080a",
        paper: "#f7f7f5",
        line: "rgba(255,255,255,0.12)",
        blue: "#1478ff"
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Source Han Sans SC",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "Arial",
          "sans-serif"
        ]
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
