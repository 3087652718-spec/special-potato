import { existsSync } from "node:fs";
import path from "node:path";
import Footer from "@/components/Footer";
import type { BoardCaseStudy, DetailItem, FullBoardSection } from "@/data/boardCaseStudies";

type ImageSlotProps = {
  sources: string[];
  label: string;
  className?: string;
  imgClassName?: string;
};

function publicAssetExists(assetPath: string) {
  return existsSync(path.join(process.cwd(), "public", assetPath.replace(/^\//, "")));
}

function firstExistingImage(sources: string[]) {
  return sources.find((source) => source && publicAssetExists(source));
}

function sectionSources(section: Pick<FullBoardSection, "image" | "fallbackImages">) {
  return [section.image, ...(section.fallbackImages ?? [])];
}

function ImageSlot({
  sources,
  label,
  className = "",
  imgClassName = "object-cover object-center"
}: ImageSlotProps) {
  const image = firstExistingImage(sources);

  return (
    <div className={`overflow-hidden bg-[#dedede] ${className}`}>
      {image ? (
        <img src={image} alt={label} className={`h-full w-full ${imgClassName}`} />
      ) : (
        <div
          data-image-placeholder
          className="flex h-full w-full items-center justify-center text-sm tracking-[0.18em] text-neutral-400"
        >
          图片待替换
        </div>
      )}
    </div>
  );
}

function BodyText({ body }: { body: string }) {
  return <p className="whitespace-pre-line text-[15px] leading-[1.85] text-neutral-600">{body}</p>;
}

function TextBlock({
  section,
  large = false
}: {
  section: FullBoardSection;
  large?: boolean;
}) {
  return (
    <div className="max-w-[560px]">
      {section.english ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-neutral-500">{section.english}</p>
      ) : null}
      <h1 className={`${large ? "text-[54px]" : "text-[42px]"} font-black leading-none text-[#111]`}>
        {section.title}
      </h1>
      {section.subtitle ? (
        <p className="mt-5 text-xl font-semibold text-neutral-500">{section.subtitle}</p>
      ) : null}
      <div className="mt-9">
        <BodyText body={section.body} />
      </div>
      {section.meta ? <p className="mt-8 text-lg font-semibold text-neutral-700">{section.meta}</p> : null}
    </div>
  );
}

function FullImageSection({
  section,
  largeTitle = false
}: {
  section: FullBoardSection;
  largeTitle?: boolean;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f1f1f1]">
      <ImageSlot
        sources={sectionSources(section)}
        label={section.title}
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover object-center"
      />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(241,241,241,0.96)_0%,rgba(241,241,241,0.82)_55%,rgba(241,241,241,0)_100%)]" />
      <div className="relative z-10 flex min-h-screen items-center px-[clamp(76px,12vw,240px)] py-24">
        <TextBlock section={section} large={largeTitle} />
      </div>
    </section>
  );
}

function DirectionSection({ caseStudy }: { caseStudy: BoardCaseStudy }) {
  const { direction } = caseStudy;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f1f1f1]">
      <ImageSlot
        sources={[direction.image, ...(direction.fallbackImages ?? [])]}
        label={direction.title}
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover object-center"
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-[clamp(64px,8vw,150px)] py-[clamp(90px,10vh,140px)]">
        <div className="w-[36%] min-w-[360px] max-w-[520px]">
          <h2 className="text-[42px] font-black leading-none text-[#111]">{direction.title}</h2>
          <p className="mt-5 text-xl font-semibold text-neutral-500">{direction.subtitle}</p>
          <div className="mt-14 space-y-10">
            {direction.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-neutral-800">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailFigure({ item }: { item: DetailItem }) {
  return (
    <figure>
      <ImageSlot
        sources={[item.image, ...(item.fallbackImages ?? [])]}
        label={item.title}
        className="aspect-[1.55] w-full"
        imgClassName="object-cover object-center"
      />
      <figcaption className="mt-5">
        <h3 className="text-base font-bold text-neutral-800">{item.title}</h3>
        <p className="mt-2 text-[13px] leading-[1.65] text-neutral-600">{item.body}</p>
      </figcaption>
    </figure>
  );
}

function DetailsSection({ caseStudy }: { caseStudy: BoardCaseStudy }) {
  const { details } = caseStudy;

  return (
    <section className="min-h-screen bg-[#f1f1f1] px-[clamp(64px,8vw,150px)] py-[clamp(90px,10vh,140px)]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[0.33fr_0.67fr] gap-[clamp(72px,7vw,132px)]">
        <div className="pt-24">
          <h2 className="text-[42px] font-black leading-none text-[#111]">{details.title}</h2>
          <p className="mt-5 text-xl font-semibold text-neutral-500">{details.subtitle}</p>
          <div className="mt-10">
            <BodyText body={details.body} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16">
          {details.items.map((item) => (
            <DetailFigure key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackedScenesSection({ caseStudy }: { caseStudy: BoardCaseStudy }) {
  if (!caseStudy.stackedScenes) return null;

  const { stackedScenes } = caseStudy;
  const isGuideRobot = caseStudy.slug === "guide-robot";

  return (
    <section className="min-h-screen bg-[#f1f1f1] px-[clamp(64px,8vw,150px)] py-[clamp(90px,10vh,140px)]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[0.34fr_0.66fr] items-center gap-[clamp(72px,7vw,132px)]">
        <div>
          <h2 className="text-[42px] font-black leading-none text-[#111]">{stackedScenes.title}</h2>
          <p className="mt-5 text-xl font-semibold text-neutral-500">{stackedScenes.subtitle}</p>
          <div className="mt-10">
            <BodyText body={stackedScenes.body} />
          </div>
        </div>
        <div
          className={`grid grid-rows-2 ${
            isGuideRobot
              ? "h-[82vh] min-h-[720px] max-h-[860px] w-[80%] justify-self-end gap-12"
              : "h-[76vh] min-h-[620px] gap-8"
          }`}
        >
          {stackedScenes.images.map((image) => (
            <ImageSlot
              key={image.title}
              sources={[image.image, ...(image.fallbackImages ?? [])]}
              label={image.title}
              className="h-full w-full"
              imgClassName="object-cover object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CmfSection({ caseStudy }: { caseStudy: BoardCaseStudy }) {
  if (!caseStudy.cmf) return null;

  const { cmf } = caseStudy;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f1f1f1]">
      <ImageSlot
        sources={[cmf.image, ...(cmf.fallbackImages ?? [])]}
        label={cmf.title}
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover object-center"
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-[clamp(64px,8vw,150px)] py-[clamp(90px,10vh,140px)]">
        <div className="w-[36%] min-w-[360px] max-w-[520px]">
          <h2 className="text-[42px] font-black leading-none text-[#111]">{cmf.title}</h2>
          <p className="mt-5 text-xl font-semibold text-neutral-500">{cmf.subtitle}</p>
          <div className="mt-10">
            <BodyText body={cmf.body} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideGallerySection() {
  return (
    <section className="bg-[#f1f1f1]">
      <ImageSlot
        sources={["/images/projects/guide-robot/page-07-gallery.png"]}
        label="导盲机器人使用场景展示"
        className="aspect-video w-full bg-[#dedede]"
        imgClassName="object-cover object-center"
      />
    </section>
  );
}

function GuideVideoSection() {
  const videoPath = "/videos/projects/guide-robot/guide-robot-demo.mp4";
  const videoExists = publicAssetExists(videoPath);

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#f1f1f1]">
      <div className="aspect-video w-[min(76vw,1360px)] overflow-hidden bg-[#d9d9d9]">
        {videoExists ? (
          <video
            src={videoPath}
            className="block h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
          />
        ) : null}
      </div>
    </section>
  );
}

function MedicineGallerySection() {
  const images = [
    "/images/projects/medicine-robot/gallery-01.png",
    "/images/projects/medicine-robot/gallery-02.png",
    "/images/projects/medicine-robot/gallery-03.png",
    "/images/projects/medicine-robot/gallery-04.png"
  ];

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#f1f1f1] py-16">
      <div className="grid w-[min(86vw,1360px)] grid-cols-2 gap-[22px]">
        {images.map((image, index) => {
          const src = firstExistingImage([image]);

          return (
            <div key={image} className="aspect-[16/10] overflow-hidden bg-[#d9d9d9]">
              {src ? (
                <img
                  src={src}
                  alt={`智送药护场景展示 ${index + 1}`}
                  className="block h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function ProductBoardCaseStudy({ caseStudy }: { caseStudy: BoardCaseStudy }) {
  const isGuideRobot = caseStudy.slug === "guide-robot";
  const isMedicineRobot = caseStudy.slug === "medicine-robot";

  return (
    <>
      <main
        className={`bg-[#f1f1f1] pt-16 text-[#111] ${
          isGuideRobot ? "[&_[data-image-placeholder]]:text-[0px]" : ""
        }`}
      >
        <FullImageSection section={caseStudy.cover} largeTitle />
        <FullImageSection section={caseStudy.background} />
        <DirectionSection caseStudy={caseStudy} />
        <DetailsSection caseStudy={caseStudy} />
        <StackedScenesSection caseStudy={caseStudy} />
        <CmfSection caseStudy={caseStudy} />
        <FullImageSection section={caseStudy.closing} />
        {isMedicineRobot ? <MedicineGallerySection /> : null}
        {isGuideRobot ? <GuideGallerySection /> : null}
        {isGuideRobot ? <GuideVideoSection /> : null}
      </main>
      <Footer />
    </>
  );
}
