import { existsSync } from "node:fs";
import path from "node:path";
import Footer from "./Footer";
import type { Project } from "@/data/projects";
import type { ReactNode } from "react";

type MosquitoCaseStudyExactProps = {
  project: Project;
};

type ImageSlotProps = {
  sources: string[];
  label: string;
  className?: string;
  imgClassName?: string;
};

const copy = {
  intro:
    "如果灭蚊器不再只是卧室里的功能工具，而是能以更温和的光感融入睡眠环境，会发生什么？\n本项目面向卧室夜间场景，通过人在 / 无人模式切换、隐藏式紫光诱蚊、静音风吸结构与柔和夜灯反馈，重新思考家用灭蚊产品的安全感与家居融合体验。",
  bedroom:
    "传统灭蚊产品往往强调捕蚊效率，却容易忽略卧室场景对安静、柔和与家居融合感的需求。\n\n在夜间使用中，用户不仅关心产品是否能捕蚊，也在意光线是否刺眼、噪音是否影响睡眠、外观是否突兀，以及清洁过程是否方便。\n\n本项目尝试将灭蚊器从“工具型小家电”转化为一件更适合床头与卧室空间长期放置的智能产品。",
  details:
    "传统灭蚊器正在从单一功能型产品，转向能够理解使用场景的自适应家居硬件。\n过去的灭蚊产品更多是“开启—运行—关闭”的固定逻辑，用户需要主动判断何时使用、如何切换、是否会影响休息。\n微光捕蚊器尝试将这一过程转化为更自然的场景响应：人在时，以柔和暖光营造低干扰的卧室氛围；无人时，切换至紫光诱蚊与风吸捕蚊模式，提高夜间捕蚊效率。\n“自适应”的核心不只是自动切换，而是通过对使用状态的感知与判断，让产品在不同场景中选择更合适的工作方式。它不再只是一个灭蚊工具，而是一件能够融入卧室节奏的智能家居产品。",
  cmf:
    "微光捕蚊器的 CMF 设计围绕“温和、干净、低干扰”展开。主体采用雾面白色外壳，弱化传统灭蚊器的工具属性，使产品更接近家居小电器与床头灯的视觉感受。\n半透明菱形纹理灯罩用于柔化内部光线，让暖光在夜间呈现更柔和的扩散效果。紫色功能区域被控制在局部范围内，仅在工作状态下作为诱蚊与状态提示出现。\n表面工艺以细砂哑光触感为主，减少高反光带来的廉价感，同时提升产品在卧室场景中的亲和度与稳定感。"
};

const directionItems = [
  {
    title: "01 / 温和化使用体验",
    body: "降低传统灭蚊器强光、噪音与工具感带来的夜间干扰，让产品更适合卧室环境。"
  },
  {
    title: "02 / 双模式工作逻辑",
    body: "根据人在 / 无人两种状态，切换暖光陪伴与高效诱蚊逻辑，平衡安全感与功能效率。"
  },
  {
    title: "03 / 家居化产品语言",
    body: "通过简洁圆润的塔式比例、半透明纹理灯罩与低饱和色彩，使产品自然融入床头空间。"
  },
  {
    title: "04 / 易维护清洁结构",
    body: "通过可拆卸集蚊仓与更直观的清洁路径，降低用户维护时的心理负担与操作成本。"
  }
];

const detailItems = [
  {
    title: "01 / 暖光陪伴模式",
    body: "人在卧室时，产品以柔和暖光作为状态反馈，降低紫光外露带来的视觉刺激，营造更安心的夜间氛围。",
    sources: ["/images/projects/mosquito/detail-01.png", "/images/projects/mosquito/detail-01.jpg", "/images/projects/mosquito/mode-ambient.webp"]
  },
  {
    title: "02 / 顶部旋钮调光",
    body: "顶部旋钮用于调节亮度与使用模式，让用户在床头场景中可以快速控制灯光强弱，降低夜间操作负担。",
    sources: ["/images/projects/mosquito/detail-02.png", "/images/projects/mosquito/detail-02.jpg", "/images/projects/mosquito/featured-bg.jpg"]
  },
  {
    title: "03 / 隐藏式捕蚊区",
    body: "紫光诱蚊区域被适度隐藏在机身下部，在保留诱蚊功能的同时，减少产品的工具感与夜间干扰。",
    sources: ["/images/projects/mosquito/detail-03.png", "/images/projects/mosquito/detail-03.jpg", "/images/projects/mosquito/mode-trapping.webp"]
  },
  {
    title: "04 / 可拆卸集蚊仓",
    body: "底部集蚊仓支持拆卸清理，清洁路径更直观，减少用户直接接触污物带来的不适感。",
    sources: ["/images/projects/mosquito/detail-04.png", "/images/projects/mosquito/detail-04.jpg", "/images/projects/mosquito/featured-bg.jpg"]
  }
];

function publicAssetExists(assetPath: string) {
  return existsSync(path.join(process.cwd(), "public", assetPath.replace(/^\//, "")));
}

function firstExisting(sources: string[]) {
  return sources.find(publicAssetExists);
}

function ImageSlot({ sources, label, className = "", imgClassName = "object-cover object-center" }: ImageSlotProps) {
  const src = firstExisting(sources);

  if (!src) {
    return (
      <div className={`flex items-center justify-center bg-[#dedede] text-[12px] tracking-[0.18em] text-[#999] ${className}`}>
        图片待替换
      </div>
    );
  }

  return <img src={src} alt={label} className={`block h-full w-full ${imgClassName}`} loading="lazy" decoding="async" />;
}

function VideoFrame({ src, className }: { src: string; className: string }) {
  const videoExists = publicAssetExists(src);

  return (
    <div className={`overflow-hidden bg-[#d9d9d9] ${className}`}>
      {videoExists ? (
        <video
          src={src}
          className="block h-full w-full object-cover"
          controls
          preload="metadata"
          playsInline
        />
      ) : null}
    </div>
  );
}

function TextBlock({
  title,
  subtitle,
  children,
  className = ""
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[430px] ${className}`}>
      <h2 className="text-[clamp(32px,2.6vw,44px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#111]">{title}</h2>
      {subtitle ? <p className="mt-4 text-[clamp(18px,1.25vw,22px)] font-medium leading-[1.4] text-[#666]">{subtitle}</p> : null}
      {children ? <div className="mt-10 whitespace-pre-line text-[16px] font-normal leading-[1.7] text-[#555]">{children}</div> : null}
    </div>
  );
}

function FullBleedSection({
  children,
  sources,
  label,
  imagePosition = "center right"
}: {
  children: ReactNode;
  sources: string[];
  label: string;
  imagePosition?: string;
}) {
  const src = firstExisting(sources);

  return (
    <section className="relative m-0 min-h-screen w-full overflow-hidden bg-[#f1f1f1] p-0">
      {src ? (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 block h-full w-full object-cover"
          style={{ objectPosition: imagePosition }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#dedede] text-[12px] tracking-[0.18em] text-[#999]">
          图片待替换
        </div>
      )}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-[48%] bg-[linear-gradient(90deg,rgba(241,241,241,0.62),rgba(241,241,241,0.18)_72%,rgba(241,241,241,0))]" />
      </div>
      <div className="relative z-10 flex min-h-screen w-full items-center px-[clamp(70px,13.4vw,280px)]">
        {children}
      </div>
    </section>
  );
}

function BoardSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative m-0 flex min-h-screen w-full items-center overflow-hidden bg-[#f1f1f1] p-0 ${className}`}>
      <div className="mx-auto w-full max-w-[1760px] px-[clamp(64px,8vw,180px)] py-[clamp(58px,7vh,104px)]">
        {children}
      </div>
    </section>
  );
}

function DirectionBackground() {
  const src = firstExisting(["/images/projects/mosquito/page-03-direction.png"]);

  if (!src) {
    return <div className="absolute inset-0 bg-[#e4e4e4]" />;
  }

  return (
    <img
      src={src}
      alt="微光捕蚊器设计方向背景"
      className="absolute inset-0 h-full w-full object-cover object-center"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function MosquitoCaseStudyExact({ project: _project }: MosquitoCaseStudyExactProps) {
  return (
    <main
      className="mosquito-page overflow-x-hidden bg-[#f1f1f1] text-[#111]"
      style={{
        fontFamily: 'Helvetica, "Helvetica Neue", Arial, "Noto Sans SC", "Source Han Sans SC", sans-serif'
      }}
    >
      <FullBleedSection
        sources={[
          "/images/projects/mosquito/page-01-cover.png",
          "/images/projects/mosquito/cover.jpg",
          "/images/projects/mosquito/featured-bg.jpg"
        ]}
        label="微光捕蚊器封面图"
      >
        <div className="mt-[18vh] max-w-[580px]">
          <h1 className="text-[clamp(44px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111]">
            微光捕蚊器
          </h1>
          <p className="mt-5 text-[17px] font-medium leading-[1.4] tracking-[0.02em] text-[#4f4f4f]">
            “Quiet light, gentle protection.”
          </p>
          <p className="mt-9 max-w-[580px] whitespace-pre-line text-[16px] font-normal leading-[1.7] text-[#555]">{copy.intro}</p>
          <p className="mt-7 text-[17px] font-medium leading-[1.4] text-[#222]">产品设计项目｜2025</p>
        </div>
      </FullBleedSection>

      <FullBleedSection
        sources={[
          "/images/projects/mosquito/page-02-bedroom.png",
          "/images/projects/mosquito/overview.jpg",
          "/images/projects/mosquito/featured-bg.jpg"
        ]}
        label="为卧室而设计的捕蚊器"
      >
        <TextBlock title="为卧室而设计的捕蚊器" subtitle="卧室中的低干扰解决方案" className="mt-[8vh]">
          {copy.bedroom}
        </TextBlock>
      </FullBleedSection>

      <section className="relative m-0 min-h-screen w-full overflow-hidden bg-[#f1f1f1] p-0">
        <DirectionBackground />
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-[45%] bg-[linear-gradient(90deg,rgba(241,241,241,0.76),rgba(241,241,241,0.28)_70%,rgba(241,241,241,0))]" />
        </div>
        <div className="relative z-10 flex min-h-screen w-full items-center px-[clamp(70px,14vw,300px)]">
          <div className="max-w-[560px]">
            <h2 className="text-[clamp(32px,2.6vw,44px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#111]">设计方向</h2>
            <p className="mt-4 text-[clamp(18px,1.25vw,22px)] font-medium leading-[1.4] text-[#666]">核心策略</p>
            <div className="mt-12 space-y-8">
              {directionItems.map(item => (
                <div key={item.title}>
                  <h3 className="text-[18px] font-semibold leading-[1.45] text-[#333]">{item.title}</h3>
                  <p className="mt-1 max-w-[520px] text-[16px] leading-[1.6] text-[#555]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BoardSection>
        <div className="grid min-h-[72vh] grid-cols-[0.32fr_0.68fr] items-start gap-[clamp(80px,6vw,130px)]">
          <TextBlock title="细节展示" subtitle="核心策略" className="pt-[14vh]">
            {copy.details}
          </TextBlock>
          <div className="grid grid-cols-2 gap-x-12 gap-y-20">
            {detailItems.map(item => (
              <figure key={item.title}>
                <div className="aspect-[1.46] overflow-hidden bg-[#d9d9d9]">
                  <ImageSlot sources={item.sources} label={item.title} className="h-full w-full" />
                </div>
                <figcaption className="mt-7 max-w-[520px]">
                  <h3 className="text-[16px] font-semibold leading-[1.4] text-[#222]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-[#555]">{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </BoardSection>

      <BoardSection>
        <div className="grid min-h-[72vh] grid-cols-[0.4fr_0.6fr] items-center gap-[clamp(80px,7vw,150px)]">
          <TextBlock title="CMF" subtitle="温和、干净、融入卧室">
            {copy.cmf}
          </TextBlock>
          <div className="ml-auto h-[84vh] min-h-[700px] w-full max-w-[620px]">
            <ImageSlot
              sources={["/images/projects/mosquito/cmf.png", "/images/projects/mosquito/cmf.jpg", "/images/projects/mosquito/page-05-cmf.png"]}
              label="微光捕蚊器 CMF 展示"
              className="h-full w-full"
              imgClassName="object-contain object-center"
            />
          </div>
        </div>
      </BoardSection>

      <BoardSection>
        <div className="grid min-h-[72vh] grid-cols-[0.34fr_0.66fr] items-center gap-[clamp(80px,6vw,130px)]">
          <TextBlock title="融入卧室环境" subtitle="从灭蚊工具到床头设备">
            {copy.cmf}
          </TextBlock>
          <div className="grid h-[72vh] min-h-[660px] grid-cols-[0.82fr_1.08fr] grid-rows-2 gap-8">
            <div className="overflow-hidden bg-[#dedede]">
              <ImageSlot
                sources={["/images/projects/mosquito/scene-01.png", "/images/projects/mosquito/scene-01.jpg", "/images/projects/mosquito/mode-ambient.webp"]}
                label="卧室场景图 01"
                className="h-full w-full"
              />
            </div>
            <div className="row-span-2 overflow-hidden bg-[#dedede]">
              <ImageSlot
                sources={["/images/projects/mosquito/scene-03.png", "/images/projects/mosquito/scene-03.jpg", "/images/projects/mosquito/mode-ambient.webp"]}
                label="卧室场景图 03"
                className="h-full w-full"
              />
            </div>
            <div className="overflow-hidden bg-[#dedede]">
              <ImageSlot
                sources={["/images/projects/mosquito/scene-02.png", "/images/projects/mosquito/scene-02.jpg", "/images/projects/mosquito/mode-trapping.webp"]}
                label="卧室场景图 02"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </BoardSection>

      <BoardSection>
        <div className="mx-auto grid h-[clamp(540px,70vh,760px)] w-[84vw] max-w-[1320px] grid-cols-[0.4fr_0.6fr] gap-6">
          <div className="overflow-hidden bg-[#dedede]">
            <ImageSlot
              sources={[
                "/images/projects/mosquito/gallery-01.png",
                "/images/projects/mosquito/gallery-01.jpg",
                "/images/projects/mosquito/prototype-01.jpg",
                "/images/projects/mosquito/video-poster.webp"
              ]}
              label="微光捕蚊器组合展示 01"
              className="h-full w-full"
            />
          </div>
          <div className="grid h-full grid-rows-[0.42fr_0.58fr] gap-6">
            <div className="overflow-hidden bg-[#dedede]">
              <ImageSlot
                sources={[
                  "/images/projects/mosquito/gallery-02.png",
                  "/images/projects/mosquito/gallery-02.jpg",
                  "/images/projects/mosquito/prototype-02.jpg",
                  "/images/projects/mosquito/mode-ambient.webp"
                ]}
                label="微光捕蚊器组合展示 02"
                className="h-full w-full"
              />
            </div>
            <div className="overflow-hidden bg-[#dedede]">
              <ImageSlot
                sources={[
                  "/images/projects/mosquito/gallery-03.png",
                  "/images/projects/mosquito/gallery-03.jpg",
                  "/images/projects/mosquito/prototype-03.jpg",
                  "/images/projects/mosquito/featured-bg.jpg"
                ]}
                label="微光捕蚊器组合展示 03"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </BoardSection>

      <section className="flex min-h-screen w-full items-center justify-center bg-[#f1f1f1]">
        <VideoFrame
          src="/videos/projects/mosquito/mosquito-demo-01.mp4"
          className="aspect-video w-[min(76vw,1360px)]"
        />
      </section>

      <section className="flex min-h-screen w-full items-center justify-center bg-[#f1f1f1]">
        <div className="flex items-center justify-center gap-[clamp(120px,18vw,320px)]">
          <VideoFrame
            src="/videos/projects/mosquito/mosquito-demo-02.mp4"
            className="h-[min(76vh,820px)] aspect-[9/16]"
          />
          <VideoFrame
            src="/videos/projects/mosquito/mosquito-demo-03.mp4"
            className="h-[min(76vh,820px)] aspect-[9/16]"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
