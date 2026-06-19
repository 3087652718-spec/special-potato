import Link from "next/link";
import { notFound } from "next/navigation";
import { existsSync } from "node:fs";
import path from "node:path";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectInfoCard from "@/components/ProjectInfoCard";
import SectionReveal from "@/components/SectionReveal";
import VisualPlaceholder from "@/components/VisualPlaceholder";
import { getProject, projects, type DetailText } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function publicAssetExists(assetPath: string) {
  return existsSync(path.join(process.cwd(), "public", assetPath.replace(/^\//, "")));
}

function isStructuredText(item: DetailText): item is Exclude<DetailText, string> {
  return typeof item !== "string";
}

function detailTextKey(item: DetailText, index: number) {
  return isStructuredText(item) ? `${item.title}-${index}` : item;
}

function cmfGridClass(count: number) {
  if (count === 4) return "grid-cols-2";
  return "grid-cols-3";
}

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.name} | 产品设计作品集` : "项目详情"
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const modelVideos = project.modelVideos ?? [];
  const cmfDescription =
    project.cmfDescription ?? "通过材质、色彩和结构分区控制产品气质，让方案具备更清晰的视觉秩序与落地表达。";
  const useStackedCmfLayout = project.slug === "guide-robot" || project.slug === "medicine-robot";
  const productDetails =
    project.slug === "guide-robot"
      ? {
          title: "核心细节展示",
          intro:
            "该模块聚焦产品在握持、感知、提示与移动过程中的关键细节，通过握把、传感器、轮组与灯光反馈等局部设计，体现产品在人机牵引场景中的安全性与可用性。",
          cards: [
            {
              title: "握把交互",
              description: "封闭式圆角矩形握把提供稳定抓握，帮助视障用户建立清晰的牵引关系。顶部滚轮用于调节速度上限，内侧扳机按钮用于确认、暂停或紧急制动，减少复杂操作带来的使用负担。",
              image: "/images/projects/guide-robot/detail-01.webp"
            },
            {
              title: "橙色安全手环",
              description: "安全手环套在握持手腕上，用于防止脱手，并在紧急情况下辅助触发停止。橙色高识别度主要面向陪同者、路人和维护人员，帮助他人快速理解这是关键安全部件。",
              image: "/images/projects/guide-robot/detail-02.webp"
            },
            {
              title: "大直径防滑主轮",
              description: "大直径主轮提供稳定驱动力与地面通过能力。防滑胎纹增强抓地表现，使产品在盲道、人行道接缝、砖缝和轻微不平整路面中保持稳定牵引。",
              image: "/images/projects/guide-robot/detail-03.webp"
            },
            {
              title: "黑色前脸感知区",
              description: "黑色前脸感知区集成前向环境识别能力，用于感知道路状态、前方障碍与通行风险，为自动避障、通路判断和安全引导提供基础。",
              image: "/images/projects/guide-robot/detail-04.webp"
            }
          ]
        }
      : project.slug === "medicine-robot"
        ? {
            title: "产品细节展示",
            intro:
              "该模块聚焦产品在护理院场景中的使用细节，通过机身圆角、交互界面、移动结构、状态提示与药品存放区域等设计，体现产品的安全性、亲和感与护理场景适配性。",
            cards: [
              {
                title: "机身外观细节",
                description: "展示机身整体造型、圆角过渡与体块关系，体现产品在护理场景中的亲和感与安全感。",
                image: "/images/projects/medicine-robot/detail-01.webp"
              },
              {
                title: "交互界面细节",
                description: "搭载符合黄金人机仰角的智能中控台，深度整合人脸追踪与 NFC 射频识别。抛弃繁琐的层级菜单，以直觉化的极简 UI 界面引导护士完成秒级鉴权，用算力彻底接管人工记忆。",
                image: "/images/projects/medicine-robot/detail-02.webp"
              },
              {
                title: "药品存放与功能细节",
                description: "内部构建严密的“一人一仓”独立锁控矩阵。当核验匹配后，仅唯一对应格口自动弹出，并联动高亮环境语义灯圈（通行绿/警示红），以零思考成本的“机械防呆”机制，阻断一切邻近格口错拿的可能。",
                image: "/images/projects/medicine-robot/detail-03.webp"
              },
              {
                title: "移动与场景适配细节",
                description: "采用低重心布局与静音轮组，适应机构内的无障碍坡道与狭窄走廊。深灰色防撞底盘结合前向感知区域，辅助设备在移动配送过程中保持稳定路径与安全距离。",
                image: "/images/projects/medicine-robot/detail-04.webp"
              }
            ]
          }
        : null;
  const dualModes =
    project.slug === "mosquito"
      ? [
          {
            index: "01",
            title: "人在模式",
            label: "Ambient Light Mode",
            description:
              "当用户在卧室、床头或客厅等场景中活动时，产品以柔和白暖光作为环境夜灯使用，弱化传统灭蚊器的工具感，使产品更自然地融入家居空间。",
            image: "/images/projects/mosquito/mode-ambient.webp",
            imageLabel: "人在模式场景图",
            tags: ["白暖灯光", "家居氛围", "卧室 / 床头场景", "安静陪伴"]
          },
          {
            index: "02",
            title: "无人灭蚊模式",
            label: "Mosquito Trapping Mode",
            description:
              "当用户离开或进入休息状态后，产品切换为低干扰灭蚊工作模式，通过紫色诱蚊光与内部风道吸入结构完成灭蚊过程，减少蚊虫对睡眠和生活的干扰。",
            image: "/images/projects/mosquito/mode-trapping.webp",
            imageLabel: "无人灭蚊模式场景图",
            tags: ["紫色诱蚊光", "风吸灭蚊", "无人环境", "低干扰运行"]
          }
        ]
      : null;

  if (project.pdfPages?.length) {
    return (
      <main className="bg-paper pt-16 text-ink">
        <section className="bg-ink py-24 text-white">
          <div className="container-wide">
            <SectionReveal className="max-w-5xl">
              <div className="mb-8 flex items-center gap-5">
                <span className="text-sm font-semibold text-blue">{project.index}</span>
                <span className="blue-line" />
                <span className="text-xs uppercase tracking-[0.22em] text-white/45">PDF Proposal Preview</span>
              </div>

              <p className="text-sm text-white/52">{project.category}</p>
              <h1 className="mt-5 text-7xl font-semibold leading-[1.04] tracking-[-0.01em]">{project.name}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/62">{project.intro}</p>

              <Link
                href="/#projects"
                className="hover-target mt-10 inline-flex rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white transition hover:border-blue hover:bg-blue"
              >
                返回作品
              </Link>
            </SectionReveal>
          </div>
        </section>

        <ProjectInfoCard info={project.info} />

        <section className="py-16">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-8">
            {project.pdfPages.map((page, index) => {
              const pageExists = publicAssetExists(page);

              return (
                <figure
                  key={page}
                  className="group overflow-hidden rounded-[6px] border border-black/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
                >
                  {pageExists ? (
                    <img
                      src={page}
                      alt={`${project.name} PDF 页面 ${String(index + 1).padStart(2, "0")}`}
                      className="block h-auto w-full"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(20,120,255,0.13),transparent_30%),linear-gradient(135deg,#f7f7f5_0%,#dfe3e7_48%,#9aa1a9_100%)]">
                      <div className="text-center">
                        <div className="mx-auto mb-5 h-px w-24 bg-blue" />
                        <p className="text-xs uppercase tracking-[0.22em] text-black/38">PAGE {String(index + 1).padStart(2, "0")}</p>
                        <p className="mt-4 text-xl font-semibold text-black/70">图片待替换</p>
                      </div>
                    </div>
                  )}
                </figure>
              );
            })}
          </div>
        </section>

        <section className="bg-paper pb-24 text-center">
          <Link
            href="/#projects"
            className="hover-target inline-flex rounded-full border border-black/14 px-7 py-3 text-sm font-medium text-ink transition hover:border-blue hover:bg-blue hover:text-white"
          >
            返回作品
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-ink pt-16 text-white">
      <section className="min-h-[92vh] py-20">
        <div className="container-wide grid min-h-[calc(92vh-160px)] grid-cols-12 items-center gap-10">
          <SectionReveal className="col-span-5">
            <div className="mb-8 flex items-center gap-5">
              <span className="text-sm font-semibold text-blue">{project.index}</span>
              <span className="blue-line" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/42">Case Study</span>
            </div>
            <p className="text-sm text-white/48">{project.category}</p>
            <h1 className="mt-5 text-7xl font-semibold leading-[1.05] tracking-[-0.01em]">{project.name}</h1>
            <p className="mt-8 text-lg leading-9 text-white/62">{project.overview}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {project.roles.map(role => (
                <span key={role} className="rounded-full border border-white/12 px-4 py-2 text-xs text-white/58">
                  {role}
                </span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="col-span-7" delay={0.14}>
            <VisualPlaceholder
              image={project.images.cover}
              label="项目详情 Hero 大封面"
              className="hover-target h-[650px] rounded-[38px] shadow-2xl shadow-black/40"
            />
          </SectionReveal>
        </div>
      </section>

      <ProjectInfoCard info={project.info} />

      <CaseStudySection eyebrow="OVERVIEW" title="项目概览">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="BACKGROUND" title="设计背景" dark>
        <p>{project.background}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="PAIN POINTS" title="用户痛点">
        <div className="grid grid-cols-2 gap-4">
          {project.painPoints.map((point, index) => (
            <div key={detailTextKey(point, index)} className="border-t border-black/10 pt-5 text-base leading-8 text-black/64">
              {isStructuredText(point) ? (
                <>
                  <p className="text-lg font-semibold leading-7 text-black">{point.title}</p>
                  <p className="mt-3">{point.body}</p>
                </>
              ) : (
                point
              )}
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="DESIGN GOALS" title="设计目标" dark>
        <div className="grid grid-cols-2 gap-4">
          {project.goals.map((goal, index) => (
            <div key={detailTextKey(goal, index)} className="border-t border-white/12 pt-5 text-base leading-8 text-white/64">
              {isStructuredText(goal) ? (
                <>
                  <p className="text-lg font-semibold leading-7 text-white">{goal.title}</p>
                  <p className="mt-3">{goal.body}</p>
                </>
              ) : (
                goal
              )}
            </div>
          ))}
        </div>
      </CaseStudySection>

      <section className="bg-paper py-28 text-ink">
        <div className="container-wide">
          <SectionReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">PROCESS</p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight">设计过程</h2>
          </SectionReveal>
          <div className="mt-14 grid grid-cols-4 gap-px overflow-hidden rounded-[30px] border border-black/10 bg-black/10">
            {project.process.map((step, index) => (
              <SectionReveal key={detailTextKey(step, index)} delay={index * 0.05}>
                <div className="min-h-64 bg-paper p-8">
                  <span className="text-sm font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                  {isStructuredText(step) ? (
                    <>
                      <p className="mt-10 text-xl font-semibold leading-7 text-black">{step.title}</p>
                      <p className="mt-5 text-sm leading-7 text-black/60">{step.body}</p>
                    </>
                  ) : (
                    <p className="mt-12 text-base leading-8 text-black/64">{step}</p>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-white">
        <div className="container-wide">
          <SectionReveal className="mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">{productDetails ? "PRODUCT DETAILS" : "STRUCTURE DISPLAY"}</p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight">{productDetails ? productDetails.title : "产品结构展示"}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/56">
              {productDetails ? productDetails.intro : "通过结构展示图、功能区域说明和关键细节标签，呈现方案的可落地性、使用逻辑与产品完成度。"}
            </p>
          </SectionReveal>

          {productDetails ? (
            <div className="grid grid-cols-2 gap-6">
              {productDetails.cards.map((card, index) => (
                <SectionReveal key={card.title} delay={index * 0.06}>
                  <article className="hover-target group h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-4 transition duration-500 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_28px_90px_rgba(20,120,255,0.12)]">
                    <div className="overflow-hidden rounded-[22px]">
                      <VisualPlaceholder
                        image={publicAssetExists(card.image) ? card.image : undefined}
                        label="产品细节图"
                        showLabel={false}
                        className="h-[320px] transition duration-700 group-hover:scale-[1.025]"
                      />
                    </div>
                    <div className="px-2 pb-2 pt-6">
                      <div className="mb-4 flex items-center gap-4">
                        <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                        <span className="h-px w-12 bg-white/14 transition group-hover:bg-blue" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/58">{card.description}</p>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-10">
              <SectionReveal className="col-span-7">
                <VisualPlaceholder
                  image={project.images.structure}
                  label="产品结构展示图"
                  className="hover-target h-[560px] rounded-[34px] border border-white/10 shadow-2xl shadow-black/30"
                />
              </SectionReveal>

              <SectionReveal className="col-span-5 self-center" delay={0.12}>
                <div className="border-y border-white/12 py-8">
                  <p className="text-lg leading-9 text-white/64">
                    结构展示重点说明产品的功能分区、装配逻辑和细节处理方式，帮助评审快速理解方案如何从概念走向可制造表达。
                  </p>
                </div>

                <div className="mt-10 space-y-5">
                  {project.structureNotes.map((note, index) => (
                    <div key={note} className="group flex items-center gap-4 border-t border-white/12 pt-5">
                      <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-px w-10 bg-white/14 transition group-hover:bg-blue" />
                      <span className="text-white/72">{note}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  {["分模线", "按键区域", "灯光区域", "进风口", "出风口", "电池仓"].map(detail => (
                    <span key={detail} className="rounded-full border border-white/12 px-4 py-2 text-xs text-white/54 transition hover:border-blue hover:text-white">
                      {detail}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            </div>
          )}
        </div>
      </section>

      <section className="bg-paper py-28 text-ink">
        <div className={useStackedCmfLayout ? "container-wide" : "container-wide grid grid-cols-12 gap-10"}>
          <SectionReveal className={useStackedCmfLayout ? "max-w-[900px]" : "col-span-5"}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">CMF DESIGN</p>
            <h2 className="text-5xl font-semibold leading-tight">CMF 设计</h2>
            <p className="mt-7 text-lg leading-9 text-black/60">
              {cmfDescription}
            </p>
          </SectionReveal>
          <SectionReveal className={useStackedCmfLayout ? "mt-14" : "col-span-7"} delay={0.12}>
            <div className={`grid gap-4 ${useStackedCmfLayout ? "grid-cols-3" : cmfGridClass(project.cmf.length)}`}>
              {project.cmf.map(item => (
                <div key={item.name} className="hover-target rounded-[28px] border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
                  <div className="relative h-36 overflow-hidden rounded-[22px] border border-black/8" style={{ background: item.value }}>
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.34),transparent_38%,rgba(0,0,0,0.08))]" />
                    <div className="absolute right-5 top-5 h-px w-14 bg-blue shadow-[0_0_18px_rgba(20,120,255,0.48)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug">{item.name}</h3>
                  {item.material || item.position || item.craft || item.purpose ? (
                    <div className="mt-5 space-y-3 border-y border-black/8 py-4">
                      {item.material ? (
                        <div className="grid grid-cols-[48px_1fr] gap-3 text-sm leading-6">
                          <span className="font-semibold text-blue">材质</span>
                          <span className="text-black/68">{item.material}</span>
                        </div>
                      ) : null}
                      {item.position ? (
                        <div className="grid grid-cols-[48px_1fr] gap-3 text-sm leading-6">
                          <span className="font-semibold text-blue">位置</span>
                          <span className="text-black/68">{item.position}</span>
                        </div>
                      ) : null}
                      {item.craft ? (
                        <div className="grid grid-cols-[48px_1fr] gap-3 text-sm leading-6">
                          <span className="font-semibold text-blue">工艺</span>
                          <span className="text-black/68">{item.craft}</span>
                        </div>
                      ) : null}
                      {item.purpose ? (
                        <div className="grid grid-cols-[48px_1fr] gap-3 text-sm leading-6">
                          <span className="font-semibold text-blue">目的</span>
                          <span className="text-black/68">{item.purpose}</span>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  {item.material || item.position || item.craft || item.purpose ? null : (
                    <p className="mt-4 text-sm leading-7 text-black/56">{item.note}</p>
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-ink py-28 text-white">
        <div className="container-wide">
          <SectionReveal className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">{dualModes ? "DUAL MODE DISPLAY" : "SCENARIO"}</p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight">{dualModes ? "双模式展示" : "场景展示"}</h2>
            {!dualModes ? <p className="mt-6 max-w-3xl text-lg leading-9 text-white/62">{project.scene}</p> : null}
          </SectionReveal>
          {dualModes ? (
            <div className="grid grid-cols-2 gap-8">
              {dualModes.map((mode, index) => (
                <SectionReveal key={mode.index} delay={index * 0.1}>
                  <article className="hover-target group h-full overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_30px_100px_rgba(20,120,255,0.13)]">
                    <div className="overflow-hidden rounded-[26px]">
                      <VisualPlaceholder
                        image={publicAssetExists(mode.image) ? mode.image : undefined}
                        label={mode.imageLabel}
                        className="h-[520px] transition duration-700 group-hover:scale-[1.025]"
                      />
                    </div>
                    <div className="px-2 pb-2 pt-7">
                      <div className="mb-5 flex items-center gap-4">
                        <span className="text-sm font-semibold text-blue">{mode.index}</span>
                        <span className="h-px w-12 bg-white/14 transition group-hover:bg-blue" />
                        <span className="text-xs uppercase tracking-[0.18em] text-white/42">{mode.label}</span>
                      </div>
                      <h3 className="text-3xl font-semibold text-white">{mode.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-white/58">{mode.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {mode.tags.map(tag => (
                          <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/48 transition group-hover:border-blue/45 group-hover:text-white/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal>
              {project.sceneVideo ? (
                <div className="hover-target overflow-hidden rounded-[36px] border border-white/10 bg-black shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue/55">
                  <video
                    className="h-[640px] w-full object-contain"
                    src={project.sceneVideo.src}
                    poster={project.sceneVideo.poster}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : (
                <VisualPlaceholder image={project.images.scene} label="场景图" className="hover-target h-[640px] rounded-[36px]" />
              )}
            </SectionReveal>
          )}
        </div>
      </section>

      {project.renderVideo ? (
        <section className="bg-paper py-28 text-ink">
          <div className="container-wide">
            <SectionReveal className="mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">{project.renderVideo.label}</p>
              <h2 className="max-w-3xl text-5xl font-semibold leading-tight">{project.renderVideo.title}</h2>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <div className="mx-auto max-w-6xl">
                <div className="hover-target group overflow-hidden rounded-[36px] border border-black/10 bg-ink p-5 shadow-[0_32px_120px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_36px_130px_rgba(20,120,255,0.14)]">
                  <div className="overflow-hidden rounded-[28px]">
                    <div className="relative aspect-video bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.13),transparent_32%),linear-gradient(135deg,#060708_0%,#1b1d20_54%,#050506_100%)]">
                      {publicAssetExists(project.renderVideo.src) ? (
                        <video
                          className="h-full w-full object-contain"
                          src={project.renderVideo.src}
                          poster={publicAssetExists(project.renderVideo.poster) ? project.renderVideo.poster : undefined}
                          controls
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="px-6 text-center">
                            <div className="mx-auto mb-5 h-px w-24 bg-blue shadow-[0_0_24px_rgba(20,120,255,0.48)]" />
                            <p className="text-xs uppercase tracking-[0.28em] text-white/38">{project.renderVideo.label}</p>
                            <p className="mt-4 text-2xl font-semibold text-white">渲染视频待替换</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      ) : null}

      {modelVideos.length ? (
        <section className="bg-ink py-28 text-white">
          <div className="container-wide">
            <SectionReveal className="mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue">MODEL DISPLAY</p>
              <h2 className="max-w-3xl text-5xl font-semibold leading-tight">模型展示</h2>
            </SectionReveal>

            <div className="grid grid-cols-2 items-center justify-center gap-10">
              {modelVideos.map((video, index) => (
                <SectionReveal key={video.src} delay={0.1 + index * 0.08}>
                  <article className="hover-target group mx-auto w-full max-w-[42vh] rounded-[34px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.20)] transition duration-500 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_32px_110px_rgba(20,120,255,0.14)]">
                    <div className="overflow-hidden rounded-[26px] bg-black">
                      <div className="relative aspect-[9/16] max-h-[76vh] bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.13),transparent_32%),linear-gradient(135deg,#060708_0%,#1b1d20_54%,#050506_100%)]">
                        {publicAssetExists(video.src) ? (
                          <video
                            className="h-full w-full object-contain"
                            src={video.src}
                            poster={publicAssetExists(video.poster) ? video.poster : undefined}
                            controls
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center">
                              <div className="mx-auto mb-5 h-px w-24 bg-blue shadow-[0_0_24px_rgba(20,120,255,0.48)]" />
                              <p className="text-xs uppercase tracking-[0.28em] text-white/38">MODEL DISPLAY</p>
                              <p className="mt-4 text-2xl font-semibold text-white">模型展示视频待替换</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CaseStudySection eyebrow="SUMMARY" title="项目总结">
        <p>{project.summary}</p>
        <div className="mt-12">
          <Link
            href="/#projects"
            className="hover-target inline-flex rounded-full border border-black/14 px-6 py-3 text-sm font-medium text-ink transition hover:border-blue hover:bg-blue hover:text-white"
          >
            返回作品
          </Link>
        </div>
      </CaseStudySection>
    </main>
  );
}
