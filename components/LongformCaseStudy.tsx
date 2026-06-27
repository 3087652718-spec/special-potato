import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import Footer from "./Footer";
import SectionReveal from "./SectionReveal";
import type { Project } from "@/data/projects";

type LongformCaseStudyProps = {
  project: Project;
};

type ImageBlockProps = {
  sources: string[];
  label: string;
  className: string;
  imgClassName?: string;
};

const imagePaths = {
  cover: [
    "/images/projects/mosquito/hero.jpg",
    "/images/projects/mosquito/cover.jpg",
    "/images/projects/mosquito/featured-bg.jpg",
    "/images/projects/微光捕蚊器/cover.webp"
  ],
  overview: [
    "/images/projects/mosquito/overview.jpg",
    "/images/projects/微光捕蚊器/render.webp"
  ],
  direction: ["/images/projects/mosquito/direction.jpg"],
  cmf: ["/images/projects/mosquito/cmf.jpg", "/images/projects/微光捕蚊器/cmf.webp"],
  scenes: [
    "/images/projects/mosquito/scene-01.jpg",
    "/images/projects/mosquito/scene-02.jpg",
    "/images/projects/mosquito/scene-03.jpg",
    "/images/projects/mosquito/scene-04.jpg",
    "/images/projects/mosquito/scene-05.jpg",
    "/images/projects/mosquito/scene-06.jpg",
    "/images/projects/微光捕蚊器/scene.webp"
  ],
  prototypes: [
    "/images/projects/mosquito/prototype-01.jpg",
    "/images/projects/mosquito/prototype-02.jpg",
    "/images/projects/mosquito/prototype-03.jpg",
    "/images/projects/mosquito/prototype-04.jpg",
    "/images/projects/mosquito/prototype-05.jpg"
  ]
};

const details = [
  {
    title: "灯罩纹理",
    text: "半透明乳白灯罩结合细腻扩散纹理，弱化内部灯源暴露，让暖光以更柔和的方式扩散。",
    image: "/images/projects/mosquito/detail-01.jpg"
  },
  {
    title: "捕蚊仓开口",
    text: "捕蚊仓入口被控制在局部区域，减少工具感，同时让清洁维护路径更直观。",
    image: "/images/projects/mosquito/detail-02.jpg"
  },
  {
    title: "顶部结构",
    text: "顶部结构以简洁收边处理控制产品秩序，避免卧室场景中的视觉突兀。",
    image: "/images/projects/mosquito/detail-03.jpg"
  },
  {
    title: "底部进风孔",
    text: "底部孔阵与内部风道配合，服务于低干扰风吸捕蚊逻辑。",
    image: "/images/projects/mosquito/detail-04.jpg"
  }
];

const cmfItems = [
  {
    title: "雾面白 / Matte White",
    text: "用于主体外壳，通过低饱和白色与细砂雾面质感降低工具感，减少强反光和廉价塑料感，使产品更接近现代家居小电器。"
  },
  {
    title: "半透明乳白 PC / Translucent PC",
    text: "用于上部灯罩区域，通过半透明 PC 与磨砂扩散纹理弱化内部灯源和结构暴露，让夜灯光线更柔和，适合卧室夜间使用。"
  },
  {
    title: "柔和暖光 / Warm Ambient Light",
    text: "作为人在模式下的主要视觉反馈，使产品在非灭蚊状态下可以作为床头夜灯或环境小灯使用，弱化工具属性。"
  },
  {
    title: "隐藏式紫光 / Hidden UV Light",
    text: "将诱蚊紫光控制在内部风道与捕蚊区域中，避免大面积紫光外露，在保留功能识别度的同时减少视觉刺激。"
  }
];

function publicAssetExists(assetPath: string) {
  return existsSync(path.join(process.cwd(), "public", assetPath.replace(/^\//, "")));
}

function firstExisting(sources: string[]) {
  return sources.find(publicAssetExists);
}

function ImageBlock({ sources, label, className, imgClassName = "object-cover" }: ImageBlockProps) {
  const src = firstExisting(sources);

  return (
    <figure className={`relative overflow-hidden bg-[#e4e4e2] ${className}`} aria-label={label}>
      {src ? (
        <img
          src={src}
          alt={label}
          className={`h-full w-full ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="flex h-full min-h-[180px] items-center justify-center bg-[linear-gradient(135deg,#eeeeec,#dededb)]">
          <span className="text-xs tracking-[0.16em] text-black/32">{label}</span>
        </div>
      )}
    </figure>
  );
}

function CopyBlock({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-[270px]">
      {eyebrow ? <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-black/35">{eyebrow}</p> : null}
      <h2 className="text-[22px] font-semibold leading-tight text-black">{title}</h2>
      <div className="mt-5 space-y-4 text-[12px] leading-[1.8] text-black/52">{children}</div>
    </div>
  );
}

function Spread({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`mx-auto grid max-w-[1180px] grid-cols-[280px_1fr] items-start gap-[78px] px-8 ${className}`}>
      {children}
    </section>
  );
}

export default function LongformCaseStudy({ project }: LongformCaseStudyProps) {
  return (
    <>
      <main className="bg-[#eeeeec] pt-16 text-black">
        <section className="mx-auto grid min-h-[760px] max-w-[1180px] grid-cols-[310px_1fr] items-center gap-[72px] px-8 py-20">
          <SectionReveal>
            <div className="relative">
              <p className="absolute -left-2 -top-20 text-[132px] font-semibold leading-none tracking-[-0.08em] text-black/[0.045]">
                /01
              </p>
              <h1 className="relative text-[42px] font-semibold leading-tight tracking-[-0.04em]">微光捕蚊器</h1>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/45">
                Quiet light, gentle protection.
              </p>
              <p className="mt-8 text-[12px] leading-[1.9] text-black/56">
                本项目围绕卧室夜间灭蚊场景展开，尝试将传统工具型灭蚊灯转化为更安静、柔和、适合长期摆放的家居小电器。
              </p>
              <p className="mt-5 text-[11px] text-black/42">产品设计项目 | 2025</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <ImageBlock
              sources={imagePaths.cover}
              label="项目封面图"
              className="aspect-[16/10]"
              imgClassName="object-cover"
            />
          </SectionReveal>
        </section>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="消费升级后的科技美学">
              <p>
                传统灭蚊灯常以功能效率为主，容易出现紫光外露、运行噪音明显、外观工具化和清洁维护不直观等问题。
              </p>
              <p>
                本项目通过柔和夜灯、无人光诱、低干扰风吸结构与可拆卸捕蚊仓，重新处理灭蚊功能与卧室环境之间的关系。
              </p>
            </CopyBlock>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ImageBlock
              sources={imagePaths.overview}
              label="消费升级后的科技美学"
              className="aspect-[16/10]"
              imgClassName="object-cover"
            />
          </SectionReveal>
        </Spread>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="设计方向">
              <p>
                从外露功能装置转向可长期摆放的家居小电器，弱化紫光、噪音与工具感，让灭蚊功能以更温和的方式进入卧室场景。
              </p>
              <p>
                关键词围绕家居融合、柔和夜灯、隐藏紫光、低干扰风吸和可清洁维护展开。
              </p>
            </CopyBlock>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ImageBlock
              sources={imagePaths.direction}
              label="设计方向图"
              className="aspect-[16/10]"
              imgClassName="object-cover"
            />
          </SectionReveal>
        </Spread>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="细节展示">
              <p>
                通过灯罩纹理、捕蚊仓开口、顶部结构与底部进风孔，呈现方案从概念走向可制造表达的细节处理。
              </p>
            </CopyBlock>
          </SectionReveal>
          <div className="grid grid-cols-2 gap-x-7 gap-y-10">
            {details.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.04}>
                <ImageBlock sources={[item.image]} label={item.title} className="aspect-[4/3]" />
                <div className="mt-3 grid grid-cols-[22px_1fr] gap-3 text-[10px] leading-[1.65] text-black/48">
                  <span className="font-semibold text-black/42">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-black/72">{item.title}</p>
                    <p className="mt-1">{item.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Spread>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="CMF">
              {cmfItems.map(item => (
                <div key={item.title}>
                  <p className="font-semibold text-black/74">{item.title}</p>
                  <p className="mt-1">{item.text}</p>
                </div>
              ))}
            </CopyBlock>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ImageBlock
              sources={imagePaths.cmf}
              label="CMF 展示图"
              className="aspect-[4/5] max-w-[560px]"
              imgClassName="object-contain"
            />
          </SectionReveal>
        </Spread>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="情境展示">
              <p>
                人在时产品以柔和暖光融入卧室、床头和桌面环境；无人时再切换为隐藏式紫光与风吸捕蚊，降低对人的直接干扰。
              </p>
            </CopyBlock>
          </SectionReveal>
          <div className="grid grid-cols-12 gap-6">
            <SectionReveal className="col-span-6">
              <ImageBlock sources={[imagePaths.scenes[0]]} label="场景展示图 01" className="aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal className="col-span-6" delay={0.04}>
              <ImageBlock sources={[imagePaths.scenes[1]]} label="场景展示图 02" className="aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal className="col-span-5" delay={0.08}>
              <ImageBlock sources={[imagePaths.scenes[2]]} label="场景展示图 03" className="aspect-[3/4]" />
            </SectionReveal>
            <SectionReveal className="col-span-7" delay={0.12}>
              <ImageBlock sources={[imagePaths.scenes[3], imagePaths.scenes[6]]} label="场景展示图 04" className="aspect-[16/10]" />
            </SectionReveal>
            <SectionReveal className="col-span-7" delay={0.16}>
              <ImageBlock sources={[imagePaths.scenes[4]]} label="场景展示图 05" className="aspect-[16/10]" />
            </SectionReveal>
            <SectionReveal className="col-span-5" delay={0.2}>
              <ImageBlock sources={[imagePaths.scenes[5]]} label="场景展示图 06" className="aspect-[3/4]" />
            </SectionReveal>
          </div>
        </Spread>

        <Spread className="py-24">
          <SectionReveal>
            <CopyBlock title="产品模型">
              <p>
                通过实体模型、桌面打样和灯光测试，验证体量比例、表面纹理与夜间光效呈现。
              </p>
            </CopyBlock>
          </SectionReveal>
          <div className="grid grid-cols-12 gap-6">
            <SectionReveal className="col-span-6">
              <ImageBlock sources={[imagePaths.prototypes[0]]} label="产品模型图 01" className="aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal className="col-span-6" delay={0.04}>
              <ImageBlock sources={[imagePaths.prototypes[1]]} label="产品模型图 02" className="aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal className="col-span-12" delay={0.08}>
              <ImageBlock sources={[imagePaths.prototypes[2]]} label="产品模型图 03" className="aspect-[16/9]" />
            </SectionReveal>
            <SectionReveal className="col-span-12" delay={0.12}>
              <ImageBlock sources={[imagePaths.prototypes[3]]} label="产品模型图 04" className="aspect-[16/9]" />
            </SectionReveal>
          </div>
        </Spread>

        <section className="mx-auto max-w-[1180px] px-8 pb-20 pt-10">
          <SectionReveal>
            <div className="border-t border-black/10 pt-8 text-[11px] leading-[1.8] text-black/42">
              <p>
                本页面为“微光捕蚊器”产品设计项目的网页化长图展示。图片素材可后续替换，当前缺失素材以浅灰占位保持版式比例。
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="/#projects" className="text-black/58 transition hover:text-blue">
                  返回作品
                </Link>
                <Link href="/" className="text-black/58 transition hover:text-blue">
                  返回首页
                </Link>
              </div>
            </div>
          </SectionReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
