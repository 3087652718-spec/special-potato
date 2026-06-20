export type DetailText = string | {
  title: string;
  body: string;
};

export type ProjectInfo = {
  type: string;
  year: string;
  role: string[];
  tools: string[];
  keywords?: string[];
  highlights?: string[];
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  intro: string;
  roles: string[];
  info: ProjectInfo;
  images: {
    cover: string;
    render: string;
    structure: string;
    cmf: string;
    scene: string;
  };
  pdfPages?: string[];
  renderVideo?: {
    title: string;
    label: string;
    src: string;
    poster: string;
  };
  modelVideos?: {
    title: string;
    src: string;
    poster: string;
  }[];
  sceneVideo?: {
    src: string;
    poster?: string;
  };
  overview: string;
  background: string;
  painPoints: DetailText[];
  goals: DetailText[];
  process: DetailText[];
  structureNotes: string[];
  cmfDescription?: string;
  cmf: {
    name: string;
    value: string;
    material?: string;
    position?: string;
    craft?: string;
    purpose?: string;
    note: string;
  }[];
  scene: string;
  summary: string;
};

const viHandbookPages = Array.from(
  { length: 52 },
  (_, index) => `/images/projects/vi-handbook/page-${String(index + 1).padStart(2, "0")}.webp`
);

const viIpPages = Array.from(
  { length: 52 },
  (_, index) => `/images/projects/vi-ip/page-${String(index + 1).padStart(2, "0")}.webp`
);

export const projects: Project[] = [
  {
    slug: "mosquito",
    index: "01",
    name: "智能静音光诱灭蚊器",
    category: "家电产品 / 智能硬件",
    intro: "面向卧室夜间使用场景的家居化灭蚊产品设计。",
    roles: ["用户分析", "造型设计", "CMF 设计", "产品渲染", "场景设计", "产品动画"],
    info: {
      type: "智能家居产品 / 消费级智能硬件",
      year: "2025",
      role: ["用户痛点分析", "产品定义", "造型设计", "CMF 设计", "渲染表现", "AI 场景辅助"],
      tools: ["Rhino", "KeyShot", "C4D", "AI 图像生成"],
      keywords: ["静音", "柔和光诱", "隐藏式捕蚊仓", "家居融合", "夜间友好"]
    },
    images: {
      cover: "/images/projects/智能静音光诱灭蚊器/cover.webp",
      render: "/images/projects/智能静音光诱灭蚊器/render.webp",
      structure: "/images/projects/智能静音光诱灭蚊器/structure.webp",
      cmf: "/images/projects/智能静音光诱灭蚊器/cmf.webp",
      scene: "/images/projects/智能静音光诱灭蚊器/scene.webp"
    },
    renderVideo: {
      title: "渲染视频展示",
      label: "RENDERING VIDEO",
      src: "/videos/projects/mosquito/render-video.mp4",
      poster: "/images/projects/mosquito/video-poster.webp"
    },
    modelVideos: [
      {
        title: "模型展示 01",
        src: "/videos/projects/mosquito/model-video-01.mp4",
        poster: "/images/projects/mosquito/model-video-01-poster.webp"
      },
      {
        title: "模型展示 02",
        src: "/videos/projects/mosquito/model-video-02.mp4",
        poster: "/images/projects/mosquito/model-video-02-poster.webp"
      }
    ],
    overview: "传统灭蚊灯常以功能效率为主，容易出现紫光外露、运行噪音明显、外观工具化和清洁维护不直观等问题。\n本项目通过柔和夜灯、无人光诱、低干扰风吸结构与可拆卸捕蚊仓，重新处理灭蚊功能与卧室环境之间的关系，让产品从临时工具转向可长期摆放的家居智能小电器。",
    background: "传统灭蚊灯多强调功能效率，外观偏工具化，常伴随紫光外露、结构开孔生硬和运行状态突兀等问题。面对卧室、床头等高频生活场景，用户更需要一款既能有效灭蚊，又能融入家居环境、夜间使用更温和的产品。",
    painPoints: [
      {
        title: "夜间运行噪音和强光影响睡眠",
        body: "传统灭蚊灯在夜间工作时，风扇噪音、紫光外露和突兀的运行状态容易干扰睡眠，使产品难以长期放置在卧室或床头等高频休息场景中。"
      },
      {
        title: "工具化外观破坏卧室氛围",
        body: "多数灭蚊产品外观偏工具化，结构开孔明显、灯光表达生硬，难以与现代家居空间融合，放置在卧室中容易产生视觉突兀感。"
      },
      {
        title: "捕蚊仓清洁路径不够直观",
        body: "传统捕蚊仓拆卸方式不够清晰，清洁路径复杂，用户在后期维护时容易产生抗拒感，影响产品的持续使用体验。"
      },
      {
        title: "功能状态反馈缺少温和表达",
        body: "灭蚊、夜灯、待机等状态之间缺少柔和且易理解的反馈方式，导致用户难以快速判断产品当前模式，也削弱了产品在夜间环境中的亲和感。"
      }
    ],
    goals: [
      {
        title: "提出适合卧室场景的灭蚊灯设计概念",
        body: "围绕卧室、床头和夜间休息环境，重新定义灭蚊灯的使用方式，使其从单一工具型电器转变为更适合长期摆放的家居小电器。"
      },
      {
        title: "平衡功能效率与生活美学",
        body: "在保留光诱与风吸灭蚊逻辑的基础上，通过更克制的灯光表达、柔和的形态语言和简洁的结构处理，降低灭蚊产品对生活氛围的干扰。"
      },
      {
        title: "优化捕蚊仓拆卸与清洁路径",
        body: "通过隐藏式捕蚊仓和更直观的拆卸方式，降低用户后期清洁维护的操作负担，使灭蚊功能在日常使用中更易被接受。"
      },
      {
        title: "通过 CMF 强化家居融合感与量产表达",
        body: "以白色主体、半透明灯罩、细腻纹理和克制灯效构建柔和的家居属性，同时通过分模线、结构细节与材质表达提升产品的可落地感。"
      }
    ],
    process: ["分析卧室、客厅、阳台等高频场景中的摆放方式", "推导竖向柔和体块与底部收集结构", "建立灯光、风道、捕蚊仓的结构关系", "通过材质和色彩降低功能设备的生硬感"],
    structureNotes: ["顶部柔和光诱模块", "低噪风道与隐藏式进风口", "可拆卸捕蚊仓", "双模式状态灯反馈"],
    cmfDescription: "本项目的 CMF 设计以“洁净、安静、温和科技感”为核心，重点解决传统灭蚊产品常见的廉价塑料感、工具感和夜间视觉刺激问题。通过雾面白主体、半透明乳白灯罩与隐藏式紫光处理，让产品在卧室环境中更接近家居小电器，而不是外露功能装置。",
    cmf: [
      {
        name: "雾面白 / Matte White",
        value: "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.95), transparent 36%), linear-gradient(135deg,#f7f6f1 0%,#e6e3dc 100%)",
        material: "ABS / PC",
        craft: "哑光喷涂 / 细砂纹",
        purpose: "融入卧室家居环境",
        note: "用于主体外壳，通过低饱和白色与细砂雾面质感降低工具感，减少强反光和廉价塑料感，使产品更接近现代家居小电器。"
      },
      {
        name: "半透明乳白 / Translucent PC",
        value: "linear-gradient(135deg,rgba(255,255,255,0.72),rgba(224,228,225,0.42)), repeating-linear-gradient(45deg,rgba(255,255,255,0.28) 0 8px,rgba(210,216,218,0.22) 8px 16px)",
        material: "半透明 PC",
        craft: "磨砂扩散纹理",
        purpose: "柔化夜间光线刺激",
        note: "用于上部灯罩区域，通过半透明 PC 与磨砂扩散纹理弱化内部灯源和结构暴露，让夜灯光线更柔和，适合卧室夜间使用。"
      },
      {
        name: "隐藏式紫光 / Hidden UV Light",
        value: "radial-gradient(circle at 50% 45%, rgba(118,104,255,0.72), rgba(26,20,55,0.72) 42%, #111 100%)",
        position: "内部风道与捕蚊区域",
        craft: "内嵌式光源布局 / 遮蔽式导光结构",
        purpose: "降低紫光外露感",
        note: "将诱蚊紫光控制在内部风道与捕蚊区域中，避免传统灭蚊灯常见的大面积紫光外露问题，在保留功能识别度的同时减少视觉刺激。"
      }
    ],
    scene: "产品适用于床头柜、客厅边柜和小户型阳台，强调安静、柔和与长期摆放的舒适度。",
    summary: "项目重点在于把灭蚊这一强功能需求转化为生活化产品体验，让设备更像家居物件，而不是临时工具。"
  },
  {
    slug: "medicine-robot",
    index: "03",
    name: "养老院送药机器人",
    category: "服务机器人 / 适老化设计",
    intro: "面向养老护理场景的移动送药辅助设备设计。",
    roles: ["用户研究", "场景分析", "产品定义", "外观设计", "交互流程"],
    info: {
      type: "医疗服务机器人 / 养老护理辅助设备",
      year: "2026",
      role: ["用户研究", "产品定义", "功能流程", "外观设计", "细节展示", "场景表达"],
      tools: ["Rhino", "KeyShot", "AI 图像生成"],
      keywords: ["一人一仓", "电子鉴权", "护理减负", "送药安全", "闭环交付"]
    },
    images: {
      cover: "/images/projects/养老院送药机器人/cover.webp",
      render: "/images/projects/养老院送药机器人/render.webp",
      structure: "/images/projects/养老院送药机器人/structure.webp",
      cmf: "/images/projects/养老院送药机器人/cmf.webp",
      scene: "/images/projects/养老院送药机器人/scene.webp"
    },
    overview: "本项目围绕养老机构日常送药流程展开，尝试通过移动配送、储药分区与身份核验等方式，提升药品交接过程的清晰度与可追溯性。方案重点关注护理人员在高频发药中的体力负担、核对压力与流程中断问题，以更直观的产品形态和交互反馈辅助完成末端送药任务。",
    background: "养老护理场景中，送药任务具有频次高、路径重复、对象多、核对要求高等特点。人工配送容易受到巡房打断、疲劳、药品相似和记录滞后的影响，导致错拿、漏送或二次确认困难。需要通过更明确的储药分区、身份确认与状态提示，帮助护理人员降低流程压力。",
    painPoints: [
      {
        title: "重复送药占用护理时间",
        body: "送药任务路径重复、频次较高，会占用护理人员大量基础工作时间，影响其对长者照护、巡视和沟通的精力分配。"
      },
      {
        title: "多人药品核对压力较高",
        body: "养老护理场景中服务对象多、药品种类多，人工核对容易受到疲劳、相似包装和临时打断的影响，增加错拿或漏送风险。"
      },
      {
        title: "任务中断影响流程连续性",
        body: "巡房、呼叫和突发情况会打断送药流程，使护理人员需要反复确认当前进度，增加记忆负担与二次核对压力。"
      },
      {
        title: "交接状态反馈不够清晰",
        body: "传统送药流程中，药品是否送达、是否核验、是否完成交接等状态不够直观，后续追踪和复盘较为依赖人工记录。"
      }
    ],
    goals: [
      {
        title: "通过储药分区提升流程清晰度",
        body: "以独立储药空间和清晰分区逻辑辅助护理人员管理不同对象的药品，减少混淆，提高取放与核对过程的可理解性。"
      },
      {
        title: "通过身份核验降低错拿风险",
        body: "结合身份识别、取药确认和状态提示，让药品交接过程更明确，辅助护理人员完成对象与药品之间的对应确认。"
      },
      {
        title: "通过移动配送减轻重复跑动",
        body: "利用移动机器人承担重复性路线配送，减少护理人员在楼层、房间与护理站之间的往返，提高日常送药流程效率。"
      },
      {
        title: "通过状态反馈增强交接可见性",
        body: "通过灯光、屏幕或提示信息反馈任务状态，让护理人员更清楚地了解配送进度、取药状态与交接结果。"
      }
    ],
    process: ["梳理护理站、走廊、房间、床边的完整服务流程", "定义储药舱、屏幕、状态灯和识别区域", "推导低重心体量与柔和前脸", "细化取药确认和异常提醒流程"],
    structureNotes: ["分区药盒抽屉", "老人识别与取药确认界面", "环形状态灯", "稳定低重心移动底盘"],
    cmfDescription: "本项目的 CMF 设计围绕养老护理场景中的清洁感、安全感与智能识别感展开。整体以暖白主体建立亲和、可靠的医疗护理气质，通过深灰功能侧板、黑色交互面板与前向感知区区分功能模块，同时结合静音滚轮材质，提升产品在护理院环境中的移动稳定性与维护友好度。",
    cmf: [
      {
        name: "暖白主体 / Warm White Body",
        value: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.92), transparent 36%), linear-gradient(135deg,#f7f4ed,#e8e5de)",
        material: "ABS / PC",
        craft: "哑光喷涂 / 圆角注塑",
        purpose: "传达清洁、温和的护理感。",
        note: "用于机身主要外壳，通过暖白色与哑光表面弱化传统医疗设备的冰冷感，使产品更容易融入养老院、护理站和走廊等公共护理环境。"
      },
      {
        name: "深灰储药侧板 / Dark Grey Panel",
        value: "linear-gradient(135deg,#5a6068,#2f3339), repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0 1px,transparent 1px 9px)",
        material: "ABS / PC",
        craft: "细砂纹喷涂 / 分件装配",
        purpose: "区分储药功能区域。",
        note: "用于储药仓或侧板区域，通过深灰色形成清晰的功能分区，帮助护理人员快速识别药品存放与取药区域，同时提升机身层次感。"
      },
      {
        name: "黑色交互面板 / Black Interface Panel",
        value: "radial-gradient(circle at 35% 18%, rgba(255,255,255,0.25), transparent 30%), linear-gradient(135deg,#1b1d21,#050607)",
        material: "高光黑 PC / 亚克力",
        craft: "镜面盖板 / 内嵌显示区",
        purpose: "强化智能识别感。",
        note: "用于屏幕、识别模组或操作界面区域，高光黑面板能够整合显示与交互部件，使产品在视觉上更具智能设备属性。"
      },
      {
        name: "黑色前向感知区 / Front Sensor Area",
        value: "linear-gradient(135deg,rgba(18,20,24,0.95),#050607), radial-gradient(circle at 72% 42%,rgba(20,120,255,0.24),transparent 26%)",
        material: "半透黑 PC",
        craft: "一体化传感器盖板",
        purpose: "整合感知模块。",
        note: "用于前向识别与感知区域，通过半透黑盖板隐藏传感器结构，减少外露零件带来的杂乱感，同时强化产品的科技识别度。"
      },
      {
        name: "静音滚轮 / Silent Wheels",
        value: "repeating-radial-gradient(circle at 50% 50%,#191b1f 0 10px,#2b2e33 10px 15px)",
        material: "橡胶 / PU",
        craft: "包胶成型 / 防滑纹理",
        purpose: "提升移动稳定性。",
        note: "用于底部移动结构，通过橡胶或 PU 包胶降低移动噪音，提升在护理院地面、走廊和病房环境中的通过稳定性与安全感。"
      }
    ],
    scene: "适用于养老院护理站、公共走廊与多人房间，重点呈现送药流程的清晰、安全和可追踪。",
    summary: "本项目并不是替代护理人员的专业判断，而是将高频、重复、易被打断的送药环节转化为更清晰的产品流程。通过储药分区、身份核验、移动配送与状态反馈，辅助护理人员降低错拿风险，提升养老护理场景中末端给药流程的秩序感与可理解性。"
  },
  {
    slug: "guide-robot",
    index: "02",
    name: "智能导盲机器人",
    category: "浙大亿听科技x广州美术学院",
    intro: "基于导盲场景的智能辅助移动设备设计，关注安全引导、交互反馈与结构落地。",
    roles: ["产品架构", "交互设计", "造型推导", "结构分析", "方案优化"],
    info: {
      type: "校企合作 / 智能辅助移动设备",
      year: "2026",
      role: ["产品架构推导", "握把交互", "结构细节", "场景表达", "功能视频规划"],
      tools: ["Rhino", "KeyShot", "AI 图像生成"],
      highlights: ["握把交互", "橙色安全手环", "大直径防滑主轮", "黑色前脸感知区"]
    },
    images: {
      cover: "/images/projects/智能导盲机器人/cover-new.webp",
      render: "/images/projects/智能导盲机器人/render.webp",
      structure: "/images/projects/智能导盲机器人/structure.webp",
      cmf: "/images/projects/智能导盲机器人/cmf.webp",
      scene: "/images/projects/智能导盲机器人/scene.webp"
    },
    sceneVideo: {
      src: "/videos/projects/guide-robot/scene-video.mp4"
    },
    overview: "项目将前向感知、本地判断与牵引式交互整合到轻量化导盲机器人中，帮助视障用户在真实城市环境中完成通路判断、避障绕行与最后 10 米精准到达。",
    background: "视障出行的难点不只是发现障碍，而是难以持续判断前方路线是否安全可通行。传统导盲杖依赖个人经验，导盲犬训练与维护成本高，现有电子辅助产品多停留在提醒层面，缺少稳定、连续的引导能力。",
    painPoints: [
      {
        title: "盲道占用导致通行中断",
        body: "共享单车、电动车、施工围挡等障碍物容易侵占盲道，使视障用户原本连续的通行路径被迫中断，增加绕行判断难度与出行风险。"
      },
      {
        title: "台阶、坡道与湿滑路面难判断",
        body: "复杂城市地面中常出现台阶、坡道、地砖高差和湿滑区域，传统导盲方式难以及时判断地面变化，容易造成绊倒、偏移或失衡风险。"
      },
      {
        title: "最后 10 米入口识别不精准",
        body: "到达目的地附近后，用户仍需要判断入口、门口、路口和建筑边界的位置，传统导航难以解决最后 10 米的精确引导问题。"
      },
      {
        title: "复杂按键与频繁提示增加负担",
        body: "过多按键、频繁语音提示和复杂操作流程会增加视障用户的认知负担，尤其在嘈杂街道中容易造成信息干扰与操作压力。"
      }
    ],
    goals: [
      {
        title: "建立自然可理解的牵引关系",
        body: "通过封闭式握把与牵引式交互，让用户以接近日常牵引的方式理解设备方向变化，降低学习成本并提升引导过程中的信任感。"
      },
      {
        title: "优先解决通路判断与连续引导",
        body: "设计重点不只是发现障碍，而是帮助用户持续判断前方路线是否可通行，并在遇到障碍时完成绕行、回正与继续前进的连续引导。"
      },
      {
        title: "以低重心双轮结构提升稳定通过",
        body: "通过低重心主体、大直径防滑主轮与后部万向轮支撑，提升设备在盲道、地砖、坡道和轻微不平路面上的通过性与牵引稳定性。"
      },
      {
        title: "构建声音、震动、灯带协同反馈",
        body: "通过语音、握把震动和机身灯带形成多通道反馈，让用户、陪同者和周围行人都能更清楚地理解设备状态与风险提示。"
      }
    ],
    process: [
      {
        title: "梳理真实出行场景与高频痛点",
        body: "从盲道通行、路口等待、障碍绕行、入口寻找等真实城市出行场景出发，梳理视障用户在连续移动过程中的高频风险点。"
      },
      {
        title: "聚焦障碍判断、绕行牵引与入口识别",
        body: "将方案重点集中在通路判断、障碍规避、牵引反馈和最后 10 米到达问题上，避免功能堆叠造成操作复杂化。"
      },
      {
        title: "推导低重心主体、双大轮与封闭式握把",
        body: "围绕稳定牵引和安全移动，推导出低重心主体、大直径主轮、后部万向轮与封闭式圆角握把的产品架构。"
      },
      {
        title: "建立本地 AI 决策、反馈层级与验证计划",
        body: "通过前向感知、本地判断与多通道反馈逻辑，建立从识别、判断、提示到牵引执行的完整交互闭环，并规划后续场景验证方向。"
      }
    ],
    structureNotes: ["前向感知模块", "触觉反馈手柄", "低重心移动轮组", "缓冲防撞外壳"],
    cmfDescription: "本项目的 CMF 设计围绕安全识别、导盲场景适配与结构可信度展开。整体以温润白主体降低工具感，以黑色前脸整合感知模块，以橙色安全手环强化关键安全部件识别，并通过防滑主轮与金属连接杆体现户外移动产品的稳定性与可靠性。",
    cmf: [
      {
        name: "温润白 / Warm White",
        value: "radial-gradient(circle at 35% 24%,rgba(255,255,255,0.92),transparent 34%), linear-gradient(135deg,#f4f1ea,#dedbd4)",
        material: "ABS / PC",
        craft: "哑光喷涂 / 细砂纹",
        purpose: "弱化工具感，提升亲和力。",
        note: "用于主体外壳，通过低饱和白色与细腻哑光质感降低设备的生硬感，使产品在城市出行场景中更友好、更易被接受。"
      },
      {
        name: "黑色前脸 / Black Sensor Area",
        value: "radial-gradient(circle at 70% 35%,rgba(20,120,255,0.22),transparent 28%), linear-gradient(135deg,#17191d,#050607)",
        material: "半透黑 PC",
        craft: "高光盖板 / 内嵌处理",
        purpose: "整合传感器，强化科技感。",
        note: "用于前向感知区域，通过黑色半透盖板隐藏传感器结构，形成清晰的视觉识别面，并传达产品具备环境感知与智能判断能力。"
      },
      {
        name: "橙色安全手环 / Safety Orange Strap",
        value: "linear-gradient(135deg,#ff8a22,#d95c00), repeating-linear-gradient(45deg,rgba(255,255,255,0.16) 0 4px,transparent 4px 10px)",
        material: "硅胶 / 编织尼龙",
        craft: "高饱和注塑 / 防滑纹理",
        purpose: "强化安全识别。",
        note: "用于连接握持手腕与握把区域，通过高识别度橙色提醒陪同者、路人和维护人员这是关键安全部件，同时在紧急情况下辅助防脱手与停止操作。"
      },
      {
        name: "黑色防滑主轮 / Anti-slip Wheel",
        value: "repeating-radial-gradient(circle at 50% 50%,#101114 0 9px,#2a2d31 9px 14px)",
        material: "橡胶 / TPE",
        craft: "包胶成型 / 防滑胎纹",
        purpose: "提升通过性与稳定感。",
        note: "用于大直径主轮，通过黑色橡胶材质与防滑纹理增强抓地能力，使产品在盲道、地砖、坡道和轻微不平整路面中保持稳定牵引。"
      },
      {
        name: "金属连接杆 / Metal Rod",
        value: "linear-gradient(105deg,#c9cdd0 0%,#70777f 35%,#eef0f1 50%,#7f868d 70%,#d7dadd 100%)",
        material: "铝合金 / 不锈钢",
        craft: "阳极氧化 / 拉丝处理",
        purpose: "增强结构可信度。",
        note: "用于主体与握把之间的连接结构，通过金属材质传达稳定、可靠和可承力的产品属性，使牵引关系在视觉上更可信。"
      }
    ],
    scene: "覆盖人行道、路口、公共建筑入口等场景，强调安全引导的连续性。",
    summary: "项目的重点不是堆叠复杂功能，而是以最少操作完成可靠引导。通过前向感知、通路判断、牵引绕行与多通道反馈，让视障用户在真实城市环境中获得更连续、更明确、更可信的出行辅助。"
  },
  {
    slug: "houseboat",
    index: "A01",
    name: "房船 / 船屋设计",
    category: "交通工具 / 空间产品",
    intro: "探索水上生活方式的居住产品设计，结合空间规划、外观造型与使用场景。",
    roles: ["概念设计", "空间规划", "外观设计", "场景渲染"],
    info: {
      type: "交通工具 / 空间产品",
      year: "2026",
      role: ["概念设计", "空间规划", "外观设计", "场景渲染"],
      tools: ["Rhino", "KeyShot", "Photoshop", "AI 图像生成"],
      keywords: ["水上生活", "空间规划", "外观比例", "场景表达", "复合居住"]
    },
    images: {
      cover: "/images/projects/房船船屋设计/cover.webp",
      render: "/images/projects/房船船屋设计/render.webp",
      structure: "/images/projects/房船船屋设计/structure.webp",
      cmf: "/images/projects/房船船屋设计/cmf.webp",
      scene: "/images/projects/房船船屋设计/scene.webp"
    },
    overview: "项目把交通工具与居住空间结合，探索更轻盈、现代、可停泊的水上生活单元。",
    background: "船屋需要同时处理航行稳定性、居住效率、景观视野和停泊场景。传统船屋容易笨重，空间体验和外观语言不够统一。",
    painPoints: ["内部空间利用率不足", "外观体量容易显得笨重", "居住与甲板活动动线冲突", "水上场景的安全边界需要明确"],
    goals: ["建立清晰的空间分区", "让外观比例体现低重心与轻盈感", "强化采光、观景和室外活动体验", "平衡交通属性与居住属性"],
    process: ["从平面动线和生活场景开始定义空间", "推导船体比例、窗带和甲板关系", "建立室内外过渡界面", "用场景渲染表达水上生活方式"],
    structureNotes: ["低重心船体", "连续景观窗带", "前后甲板空间", "紧凑复合储物模块"],
    cmf: [
      { name: "浅灰外壳", value: "#deded9", note: "降低体量压迫感" },
      { name: "深灰窗框", value: "#34383d", note: "强调横向比例" },
      { name: "自然木色", value: "#b99665", note: "引入生活温度" }
    ],
    scene: "适用于湖泊、湿地和文旅场景，呈现短居、观景和移动休闲的复合体验。",
    summary: "项目重点处理尺度和生活方式表达，让船屋既是交通工具，也是具有情绪价值的空间产品。"
  },
  {
    slug: "solar-cleaner",
    index: "A02",
    name: "VI手册与IP设计",
    category: "品牌设计 / VI 设计 / IP 设计",
    intro: "基于品牌视觉识别系统与 IP 形象的视觉设计项目，包含 VI 规范、IP 角色与应用延展。",
    roles: ["VI 设计", "IP 形象设计", "视觉规范", "应用延展"],
    info: {
      type: "品牌设计 / VI 设计 / IP 设计",
      year: "2026",
      role: ["品牌视觉设计", "VI 规范设计", "IP 形象设计", "版式排版", "视觉提案"],
      tools: ["Illustrator", "Photoshop", "Figma"],
      keywords: ["品牌识别", "VI规范", "IP形象", "视觉系统", "应用延展"]
    },
    images: {
      cover: "/images/projects/vi-handbook/page-01.webp",
      render: "/images/projects/vi-handbook/page-02.webp",
      structure: "/images/projects/vi-handbook/page-03.webp",
      cmf: "/images/projects/vi-handbook/page-04.webp",
      scene: "/images/projects/vi-handbook/page-05.webp"
    },
    pdfPages: viHandbookPages,
    overview: "基于品牌视觉识别系统与 IP 形象的视觉设计项目，包含 VI 规范、IP 角色与应用延展。",
    background: "品牌视觉和 IP 形象需要在不同媒介中保持统一识别，同时具备足够的亲和力和传播延展性。",
    painPoints: ["视觉元素缺少统一规范", "IP 形象与品牌调性连接不足", "应用场景分散导致识别不稳定", "后续传播物料需要清晰的使用标准"],
    goals: ["建立清晰的 VI 基础规范", "塑造可延展的 IP 角色形象", "统一色彩、字体、图形和版式语言", "形成便于后续应用的设计手册"],
    process: ["梳理品牌定位与关键词", "推导标志、色彩和辅助图形系统", "设计 IP 角色比例、表情和动作", "整理手册规范与应用展示页面"],
    structureNotes: ["品牌标志规范", "标准色与辅助图形", "IP 角色设定", "物料与场景应用"],
    cmf: [
      { name: "基础白", value: "#f4f4f1", note: "用于保持手册页面的清晰与留白" },
      { name: "品牌深灰", value: "#20242a", note: "用于文字、规范说明和视觉骨架" },
      { name: "科技蓝", value: "#1478ff", note: "用于强调识别点和关键应用" }
    ],
    scene: "适用于品牌手册、宣传物料、周边产品、线上传播和空间导视等多种应用场景。",
    summary: "项目重点在于把品牌视觉和 IP 角色整合为可复用的规范系统，让视觉表达更统一、更容易延展。"
  },
  {
    slug: "other-work",
    index: "A03",
    name: "其他作品占位",
    category: "产品设计 / 概念设计",
    intro: "用于展示其他课程项目、概念设计或后续补充作品。",
    roles: ["概念设计", "造型推导", "视觉表达", "作品集排版"],
    info: {
      type: "设计练习 / 渲染练习 / 视觉表达",
      year: "2026",
      role: ["造型探索", "渲染表现", "AI 辅助设计", "排版练习"],
      tools: ["Rhino", "KeyShot", "Photoshop", "AI 图像生成"],
      keywords: ["造型练习", "渲染表现", "视觉积累", "AI 辅助", "排版探索"]
    },
    images: {
      cover: "/images/projects/其他作品占位/cover.webp",
      render: "/images/projects/其他作品占位/render.webp",
      structure: "/images/projects/其他作品占位/structure.webp",
      cmf: "/images/projects/其他作品占位/cmf.webp",
      scene: "/images/projects/其他作品占位/scene.webp"
    },
    overview: "该页面用于后续补充课程项目、概念方案或实验性作品，保持与其他 Case Study 一致的展示结构。",
    background: "作品集会持续更新，该占位项目为后续新增作品预留独立详情页和完整内容结构。",
    painPoints: ["后续作品需要统一展示入口", "课程项目需要独立叙事空间", "概念方案需要便于替换图文和图片素材"],
    goals: ["预留可扩展项目页", "保持作品集整体结构一致", "方便后期替换真实项目内容"],
    process: ["确定项目主题", "整理研究与草图", "替换项目图片与结构展示图", "补充最终方案说明"],
    structureNotes: ["项目封面图", "过程图与结构图", "CMF 与场景图", "可替换结构展示图"],
    cmf: [
      { name: "基础白", value: "#f2f2ef", note: "用于概念表达的干净底色" },
      { name: "结构灰", value: "#7d858f", note: "用于强调层次和结构关系" },
      { name: "科技蓝", value: "#1478ff", note: "用于状态与视觉重点" }
    ],
    scene: "后续可替换为真实项目的应用场景图、产品渲染图或展板图。",
    summary: "这是一个可维护的作品占位页，后期只需在数据文件中替换文字和图片路径即可。"
  },
  {
    slug: "serpent-gafa",
    index: "A01",
    name: "Serpent x 广州美术学院",
    category: "校企合作 / 产品设计 / 品牌联名",
    intro: "基于 Serpent 与广州美术学院合作背景展开的设计项目，围绕品牌调性、产品概念与视觉表达进行系统化设计呈现。",
    roles: ["概念设计", "视觉表达", "产品提案", "版式排版"],
    info: {
      type: "校企合作 / 产品设计 / 品牌联名",
      year: "2026",
      role: ["概念设计", "视觉表达", "产品提案", "版式排版"],
      tools: ["Rhino", "KeyShot", "Photoshop", "AI 图像生成"],
      keywords: ["校企合作", "品牌联名", "产品概念", "视觉表达", "提案排版"]
    },
    images: {
      cover: "/images/projects/serpent-gafa/cover-serpent.webp",
      render: "/images/projects/serpent-gafa/page-01.webp",
      structure: "/images/projects/serpent-gafa/page-02.webp",
      cmf: "/images/projects/serpent-gafa/page-03.webp",
      scene: "/images/projects/serpent-gafa/page-04.webp"
    },
    pdfPages: [
      "/images/projects/serpent-gafa/cover-serpent.webp",
      "/images/projects/serpent-gafa/page-01.webp",
      "/images/projects/serpent-gafa/page-02.webp",
      "/images/projects/serpent-gafa/page-03.webp",
      "/images/projects/serpent-gafa/page-04.webp",
      "/images/projects/serpent-gafa/page-05.webp",
      "/images/projects/serpent-gafa/page-06.webp",
      "/images/projects/serpent-gafa/page-07.webp",
      "/images/projects/serpent-gafa/page-08.webp",
      "/images/projects/serpent-gafa/page-09.webp",
      "/images/projects/serpent-gafa/page-10.webp"
    ],
    overview: "基于 Serpent 与广州美术学院合作背景展开的设计项目，围绕品牌调性、产品概念与视觉表达进行系统化设计呈现。",
    background: "该项目用于展示校企合作语境下的产品概念、视觉提案与版式表达。",
    painPoints: ["品牌调性需要转译为清晰的产品概念", "提案内容需要形成完整视觉叙事", "项目资料需要便于后续替换和扩展"],
    goals: ["建立清晰的联名项目表达", "呈现产品概念与视觉方向", "形成可浏览的提案页面"],
    process: ["梳理合作背景", "提炼品牌关键词", "展开产品概念与视觉表达", "整理提案页面"],
    structureNotes: ["品牌联名方向", "产品概念表达", "视觉提案页面", "版式排版系统"],
    cmf: [
      { name: "基础白", value: "#f4f4f1", note: "用于保持提案页面清晰" },
      { name: "深灰", value: "#20242a", note: "用于建立视觉秩序" },
      { name: "科技蓝", value: "#1478ff", note: "用于关键强调" }
    ],
    scene: "后续可替换为 Serpent x 广州美术学院项目的真实提案页面和展示图。",
    summary: "该页面作为校企合作项目的基础详情页，后续可直接替换图片与文字。"
  },
  {
    slug: "3d-innovation",
    index: "A02",
    name: "三维创新大赛",
    category: "竞赛项目 / 3D设计 / 创新设计",
    intro: "面向 3D 创新设计竞赛的作品项目，结合造型设计、三维表现与视觉提案，展示设计方案的创新性与表达完整度。",
    roles: ["3D建模", "造型设计", "创新设计", "视觉提案"],
    info: {
      type: "竞赛项目 / 3D设计 / 创新设计",
      year: "2026",
      role: ["3D建模", "造型设计", "创新设计", "视觉提案"],
      tools: ["Rhino", "KeyShot", "Photoshop", "AI 图像生成"],
      keywords: ["三维建模", "造型探索", "竞赛提案", "视觉表达", "创新设计"]
    },
    images: {
      cover: "/images/projects/3d-innovation/cover.webp",
      render: "/images/projects/3d-innovation/page-01.webp",
      structure: "/images/projects/3d-innovation/page-02.webp",
      cmf: "/images/projects/3d-innovation/page-03.webp",
      scene: "/images/projects/3d-innovation/page-04.webp"
    },
    pdfPages: [
      "/images/projects/3d-innovation/cover.webp",
      "/images/projects/3d-innovation/page-01.webp",
      "/images/projects/3d-innovation/page-02.webp",
      "/images/projects/3d-innovation/page-03.webp",
      "/images/projects/3d-innovation/page-04.webp",
      "/images/projects/3d-innovation/page-05.webp",
      "/images/projects/3d-innovation/page-06.webp",
      "/images/projects/3d-innovation/page-07.webp",
      "/images/projects/3d-innovation/page-08.webp",
      "/images/projects/3d-innovation/page-09.webp",
      "/images/projects/3d-innovation/page-10.webp",
      "/images/projects/3d-innovation/page-11.webp",
      "/images/projects/3d-innovation/page-12.webp"
    ],
    overview: "面向 3D 创新设计竞赛的作品项目，结合造型设计、三维表现与视觉提案，展示设计方案的创新性与表达完整度。",
    background: "竞赛项目需要在有限页面中清晰呈现设计概念、三维表现和创新价值。",
    painPoints: ["方案创新点需要被快速理解", "三维表现和视觉提案需要统一", "项目页面需要便于后续补充真实图片"],
    goals: ["展示 3D 设计能力", "强化竞赛提案完整度", "预留可替换的图片展示结构"],
    process: ["确定竞赛主题", "展开造型探索", "完成三维表现", "整理视觉提案"],
    structureNotes: ["3D 建模", "造型推导", "创新设计", "视觉提案"],
    cmf: [
      { name: "基础白", value: "#f4f4f1", note: "用于保持展示页面清晰" },
      { name: "结构灰", value: "#8c949d", note: "用于体现三维层次" },
      { name: "科技蓝", value: "#1478ff", note: "用于视觉重点" }
    ],
    scene: "后续可替换为 3D 创新大赛作品图、展板图和过程图。",
    summary: "该页面作为竞赛项目的基础详情页，后续可直接替换为完整作品图片。"
  },
  {
    slug: "vi-ip",
    index: "A03",
    name: "VI手册与IP设计",
    category: "品牌设计 / VI设计 / IP设计",
    intro: "基于品牌视觉识别系统与 IP 形象的视觉设计项目，包含 VI 规范、IP 角色与应用延展。",
    roles: ["VI设计", "IP形象设计", "视觉规范", "应用延展"],
    info: {
      type: "品牌设计 / VI 设计 / IP 设计",
      year: "2026",
      role: ["品牌视觉设计", "VI 规范设计", "IP 形象设计", "版式排版", "视觉提案"],
      tools: ["Illustrator", "Photoshop", "Figma"],
      keywords: ["品牌识别", "VI规范", "IP形象", "视觉系统", "应用延展"]
    },
    images: {
      cover: "/images/projects/vi-ip/cover.webp",
      render: "/images/projects/vi-ip/page-01.webp",
      structure: "/images/projects/vi-ip/page-02.webp",
      cmf: "/images/projects/vi-ip/page-03.webp",
      scene: "/images/projects/vi-ip/page-04.webp"
    },
    pdfPages: viIpPages,
    overview: "基于品牌视觉识别系统与 IP 形象的视觉设计项目，包含 VI 规范、IP 角色与应用延展。",
    background: "品牌视觉和 IP 形象需要在不同媒介中保持统一识别，同时具备足够的亲和力和传播延展性。",
    painPoints: ["视觉元素缺少统一规范", "IP 形象与品牌调性连接不足", "应用场景分散导致识别不稳定", "后续传播物料需要清晰的使用标准"],
    goals: ["建立清晰的 VI 基础规范", "塑造可延展的 IP 角色形象", "统一色彩、字体、图形和版式语言", "形成便于后续应用的设计手册"],
    process: ["梳理品牌定位与关键词", "推导标志、色彩和辅助图形系统", "设计 IP 角色比例、表情和动作", "整理手册规范与应用展示页面"],
    structureNotes: ["品牌标志规范", "标准色与辅助图形", "IP 角色设定", "物料与场景应用"],
    cmf: [
      { name: "基础白", value: "#f4f4f1", note: "用于保持手册页面的清晰与留白" },
      { name: "品牌深灰", value: "#20242a", note: "用于文字、规范说明和视觉骨架" },
      { name: "科技蓝", value: "#1478ff", note: "用于强调识别点和关键应用" }
    ],
    scene: "适用于品牌手册、宣传物料、周边产品、线上传播和空间导视等多种应用场景。",
    summary: "项目重点在于把品牌视觉和 IP 角色整合为可复用的规范系统，让视觉表达更统一、更容易延展。"
  }
];

export const featuredProjects = ["mosquito", "guide-robot", "medicine-robot"]
  .map(slug => projects.find(project => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
export const otherProjects = ["serpent-gafa", "3d-innovation", "vi-ip"]
  .map(slug => projects.find(project => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export function getProject(slug: string) {
  return projects.find(project => project.slug === slug);
}
