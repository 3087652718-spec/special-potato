import Link from "next/link";

const footerColumns = [
  {
    title: "作品项目",
    links: [
      { label: "微光捕蚊器", href: "/projects/mosquito" },
      { label: "养老院送药机器人", href: "/projects/medicine-robot" },
      { label: "智能导盲机器人", href: "/projects/guide-robot" },
      { label: "Serpent x 广州美术学院", href: "/projects/serpent-gafa" },
      { label: "3D创新大赛", href: "/projects/3d-innovation" },
      { label: "VI手册与IP设计", href: "/projects/vi-ip" },
      { label: "练习展示", href: "/projects/practice-works" }
    ]
  },
  {
    title: "设计方向",
    links: ["产品设计", "工业设计", "智能硬件", "服务机器人", "家电产品", "品牌视觉", "AI辅助设计"]
  },
  {
    title: "设计能力",
    links: ["用户研究", "造型推导", "CMF设计", "产品渲染", "场景渲染", "展板排版", "网页作品集"]
  },
  {
    title: "常用工具",
    links: ["Rhino", "KeyShot", "Photoshop", "Illustrator", "Figma", "AI Tools", "Codex"]
  },
  {
    title: "联系我",
    links: [
      { label: "邮箱：3087652718@qq.com", href: "mailto:3087652718@qq.com" },
      "微信：ljh3087652718",
      "电话：+86 19065336504",
      "简历：PDF 简历暂未上传",
      { label: "返回顶部", href: "#home" }
    ]
  }
];

type FooterLink = string | { label: string; href: string };

function FooterItem({ item }: { item: FooterLink }) {
  if (typeof item === "string") {
    return <span className="block text-[12px] leading-6 text-[#6e6e73]">{item}</span>;
  }

  return (
    <Link
      href={item.href}
      className="block text-[12px] leading-6 text-[#6e6e73] transition hover:text-blue hover:underline hover:underline-offset-2"
    >
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1220px] px-6 py-10 md:px-10">
        <p className="max-w-5xl text-[12px] leading-6 text-[#6e6e73]">
          本网站为个人产品设计作品集展示页面，内容包含工业设计、智能硬件、服务机器人、品牌视觉与练习作品等项目。
          页面中的图片、模型、文案与设计内容仅用于个人学习、作品展示、求职交流与项目汇报，不作为商业售卖用途。
        </p>

        <div className="mt-8 border-t border-[#d2d2d7] pt-7">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map(column => (
              <div key={column.title}>
                <h3 className="mb-3 text-[12px] font-semibold text-[#1d1d1f]">{column.title}</h3>
                <div className="space-y-1">
                  {column.links.map(item => (
                    <FooterItem key={typeof item === "string" ? item : item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#d2d2d7] pt-5 text-[12px] leading-6 text-[#6e6e73]">
          更多交流方式：欢迎通过
          <Link className="mx-1 text-blue hover:underline hover:underline-offset-2" href="mailto:3087652718@qq.com">
            邮箱
          </Link>
          或 <span className="text-blue">微信</span> 联系我，了解作品详情、项目过程与合作交流。
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-[#d2d2d7] pt-5 text-[12px] text-[#6e6e73] md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 罗景鸿 Product Design Portfolio. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>个人作品集</span>
            <span>本地开发版本</span>
            <span>仅用于作品展示</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
