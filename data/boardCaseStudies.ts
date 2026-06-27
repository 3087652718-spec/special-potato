export type FullBoardSection = {
  title: string;
  subtitle?: string;
  english?: string;
  body: string;
  meta?: string;
  image: string;
  fallbackImages?: string[];
};

export type DirectionItem = {
  title: string;
  body: string;
};

export type DetailItem = {
  title: string;
  body: string;
  image: string;
  fallbackImages?: string[];
};

export type BoardCaseStudy = {
  slug: string;
  cover: FullBoardSection;
  background: FullBoardSection;
  direction: {
    title: string;
    subtitle: string;
    items: DirectionItem[];
    image: string;
    fallbackImages?: string[];
  };
  details: {
    title: string;
    subtitle: string;
    body: string;
    items: DetailItem[];
  };
  stackedScenes?: {
    title: string;
    subtitle: string;
    body: string;
    images: [DetailItem, DetailItem];
  };
  cmf?: {
    title: string;
    subtitle: string;
    body: string;
    image: string;
    fallbackImages?: string[];
  };
  closing: FullBoardSection;
};

export const guideRobotBoardCaseStudy: BoardCaseStudy = {
  slug: "guide-robot",
  cover: {
    title: "导盲机器人",
    english: "Guidance with trust.",
    body:
      "硬件导盲产品正在从固定辅助工具，转向能够感知环境并动态调整的自适应出行设备。\n本项目面向视障用户的城市出行场景，通过前向感知、避障绕行、握把反馈与稳定牵引，探索导盲产品从“被动辅助”到“主动导引”的体验转变。\n产品不只是提供方向，而是根据道路环境与用户行进状态，选择更合适的导引方式，让出行过程更清晰、更稳定，也更容易被信任。",
    meta: "产品设计项目｜2026",
    image: "/images/projects/guide-robot/page-01-cover.png",
    fallbackImages: ["/images/projects/guide-robot/cover.jpg", "/images/projects/guide-robot/cover.webp"]
  },
  background: {
    title: "面向城市出行的导盲设备",
    subtitle: "复杂环境中的稳定辅助",
    body:
      "视障用户在城市出行中面对的不确定性，并不只来自“看不见”，还来自道路环境的持续变化。\n\n盲道占用、临时障碍、路口等待、地面高差与方向判断，都会影响行进节奏与安全感。传统导盲工具更多依赖用户主动判断，而智能导盲机器人则尝试通过环境感知与动态反馈，降低用户在复杂路况中的判断负担。\n\n本项目希望建立一种更稳定、清晰、可理解的导引关系，让设备在移动过程中成为用户可以信任的出行伙伴。",
    image: "/images/projects/guide-robot/page-02-background.png",
    fallbackImages: ["/images/projects/guide-robot/scene.jpg", "/images/projects/guide-robot/scene.webp"]
  },
  direction: {
    title: "设计方向",
    subtitle: "自适应导引策略",
    image: "/images/projects/guide-robot/page-03-direction.png",
    items: [
      {
        title: "01 / 环境感知",
        body: "通过前向感知区域识别道路、障碍与通行状态，为避障绕行和路径调整提供判断基础。"
      },
      {
        title: "02 / 动态导引",
        body: "根据不同路况切换前进、减速、等待、绕行等导引方式，使产品不再只是固定方向提示工具。"
      },
      {
        title: "03 / 握把反馈",
        body: "通过握把结构与震动 / 牵引反馈，将复杂路径信息转化为用户更容易理解的身体感知。"
      },
      {
        title: "04 / 稳定牵引",
        body: "以低重心双轮结构和刚性连接关系，建立清晰的人机牵引节奏，提高行进过程中的稳定感。"
      }
    ]
  },
  details: {
    title: "细节展示",
    subtitle: "结构与交互细节",
    body:
      "围绕“感知—判断—反馈”的自适应导引逻辑，产品将前向感知、握把交互、驱动结构与安全反馈整合在同一移动平台中，使导盲过程更稳定，也更容易被用户理解。",
    items: [
      {
        title: "01 / 封闭式握把",
        body: "封闭式圆角矩形握把提供稳定抓握，帮助用户建立清晰的牵引关系，减少复杂操作带来的不确定感。",
        image: "/images/projects/guide-robot/detail-01.png",
        fallbackImages: ["/images/projects/guide-robot/detail-01.webp"]
      },
      {
        title: "02 / 前向感知区域",
        body: "黑色前脸集成感知模块，用于识别前方障碍、道路变化与通行状态，为后续避障和路径调整提供支持。",
        image: "/images/projects/guide-robot/detail-02.png",
        fallbackImages: ["/images/projects/guide-robot/detail-02.webp"]
      },
      {
        title: "03 / 大直径防滑主轮",
        body: "大直径主轮提升通过性与牵引稳定性，使产品能适应盲道接缝、砖缝和轻微不平整路面。",
        image: "/images/projects/guide-robot/detail-03.png",
        fallbackImages: ["/images/projects/guide-robot/detail-03.webp"]
      },
      {
        title: "04 / 杆体连接与牵引结构",
        body: "斜向连接杆将机器人主体与握把形成稳定的牵引关系，使设备的转向、减速与绕行动作能够更直接地传递到用户手部，提升导引过程中的可理解性与信任感。",
        image: "/images/projects/guide-robot/detail-04.png",
        fallbackImages: ["/images/projects/guide-robot/detail-04.webp"]
      }
    ]
  },
  stackedScenes: {
    title: "使用场景",
    subtitle: "从通路判断到避障绕行",
    body:
      "在真实城市环境中，视障用户需要不断判断前方是否可走、障碍是否需要绕行、路口是否可以通行，以及目的地入口是否已经到达。\n\n智能导盲机器人通过前向感知获取环境信息，并根据不同场景切换导引方式：在道路畅通时保持稳定牵引；遇到障碍时提前减速并辅助绕行；经过路口或复杂空间时，通过握把反馈和状态提示帮助用户理解当前节奏。\n\n“自适应导引”的重点不是自动移动，而是在每一次路径变化中，让用户知道设备正在做什么、为什么这样移动，以及下一步应该如何配合。",
    images: [
      { title: "场景图 01", body: "", image: "/images/projects/guide-robot/scene-01.png" },
      { title: "场景图 02", body: "", image: "/images/projects/guide-robot/scene-02.png" }
    ]
  },
  closing: {
    title: "项目总结",
    subtitle: "让导盲辅助从提醒走向导引",
    body:
      "本项目的重点不是堆叠复杂功能，而是以更少的操作完成可靠的连续引导。\n\n通过前向感知、本地判断、牵引式交互与多通道反馈，智能导盲机器人尝试在真实城市环境中建立一套自适应导引逻辑：感知道路变化，判断通行方式，再通过握把、轮组和灯光反馈传递给用户。\n\n它回应的不是“避开障碍”的问题，而是视障用户在出行过程中对稳定节奏、清晰反馈与可信陪伴的需求。",
    image: "/images/projects/guide-robot/page-06-summary.png",
    fallbackImages: ["/images/projects/guide-robot/scene.jpg", "/images/projects/guide-robot/scene.webp"]
  }
};

export const medicineRobotBoardCaseStudy: BoardCaseStudy = {
  slug: "medicine-robot",
  cover: {
    title: "智送药护",
    english: "Care delivery, safer medication.",
    body: "面向养老院与护理机构的末端给药场景，通过移动配送、身份核验与状态反馈，降低重复跑腿负担并提升给药流程的安全性。",
    meta: "产品设计项目｜2026",
    image: "/images/projects/medicine-robot/page-01-cover.png",
    fallbackImages: ["/images/projects/medicine-robot/cover.jpg", "/images/projects/medicine-robot/cover.webp"]
  },
  background: {
    title: "面向养老护理场景的送药设备",
    subtitle: "高频护理流程中的辅助角色",
    body:
      "在养老院场景中，送药是一项高频、重复且容易被时间压力影响的护理工作。\n\n护工需要在固定时间内完成药品准备、核对、配送、提醒与记录，老人则可能因为视力下降、记忆力减弱或行动不便，在取药和确认过程中出现理解困难。\n\n传统送药方式依赖人工反复往返与口头确认，流程中容易出现等待、漏取、错拿和信息不清晰的问题。养老院送药机器人希望通过更明确的药品组织、移动配送和状态反馈，降低护理过程中的重复负担。",
    image: "/images/projects/medicine-robot/page-02-background.png",
    fallbackImages: ["/images/projects/medicine-robot/scene.jpg", "/images/projects/medicine-robot/scene.webp"]
  },
  direction: {
    title: "设计方向",
    subtitle: "自适应护理配送策略",
    image: "/images/projects/medicine-robot/page-03-direction.png",
    items: [
      {
        title: "01 / 识别任务状态",
        body: "根据不同送药任务区分待配送、配送中、等待取药与完成状态，让护工能够快速理解当前流程。"
      },
      {
        title: "02 / 核对用户身份",
        body: "通过身份确认与取药提示，降低老人误取、漏取或错拿药品的风险。"
      },
      {
        title: "03 / 适应护理空间",
        body: "产品在养老院走廊、房间门口与护士站之间移动，保持低噪、稳定与安全的行进状态。"
      },
      {
        title: "04 / 转化沟通反馈",
        body: "通过灯光、界面与声音提示，将配送进度和取药状态转化为老人和护工都能理解的信息。"
      }
    ]
  },
  details: {
    title: "细节展示",
    subtitle: "结构与交互细节",
    body:
      "围绕“储药—配送—确认—反馈”的护理流程，产品将药品管理、移动平台、交互界面与状态表达整合在同一机身中，使送药过程更清晰，也更适合养老院日常使用。",
    items: [
      {
        title: "01 / 分区储药结构",
        body: "药仓采用清晰分区，便于护工按任务放置和补充药品，减少配送前的整理成本。",
        image: "/images/projects/medicine-robot/detail-01.png",
        fallbackImages: ["/images/projects/medicine-robot/detail-01.webp"]
      },
      {
        title: "02 / 表情交互屏",
        body: "前部倾斜式表情屏用于传达机器人的当前状态，例如等待、送达、确认或异常提示。相比单纯文字界面，表情化反馈更容易被老人理解，也能降低护理场景中的机器距离感。",
        image: "/images/projects/medicine-robot/detail-02.png",
        fallbackImages: ["/images/projects/medicine-robot/detail-02.webp"]
      },
      {
        title: "03 / 交互大屏",
        body: "顶部大屏作为机器人最直接的信息交互界面，用于显示配送任务、身份确认、舱位状态与操作提示。倾斜式屏幕角度更方便护理人员站立查看与操作，也让信息读取更加直观清晰。",
        image: "/images/projects/medicine-robot/detail-03.png",
        fallbackImages: ["/images/projects/medicine-robot/detail-03.webp"]
      },
      {
        title: "04 / 前向感知区域",
        body: "机身前部感知区域用于识别移动路径中的障碍与通行状态，提升在走廊环境中的安全性。",
        image: "/images/projects/medicine-robot/detail-04.png",
        fallbackImages: ["/images/projects/medicine-robot/detail-04.webp"]
      }
    ]
  },
  cmf: {
    title: "CMF",
    subtitle: "温和、洁净、专注",
    body:
      "养老院送药机器人的 CMF 设计围绕“护理感、亲和感与功能识别”展开。\n\n主体采用暖白色外壳，弱化医疗设备的冰冷感，使产品更容易融入养老院走廊、房间门口和护士站环境。深灰色侧板用于区分储药区域，黑色交互面板与前向感知区强化功能识别，使用时能够快速判断产品的使用方向和交互位置。\n\n整体材质以哑光塑料与圆角表面为主，减少高反光带来的距离感，同时提升清洁友好性与视觉稳定感。产品希望在专业护理场景中保持清晰、有序，但不过度强调机器感。",
    image: "/images/projects/medicine-robot/page-05-cmf.png"
  },
  closing: {
    title: "使用场景",
    subtitle: "融入护理流程，而不是打断护理节奏",
    body:
      "在养老院日常工作中，送药机器人需要同时面对护工的效率需求和老人的理解需求。\n\n机器人从护士站或药品管理区出发，根据任务顺序移动至指定房间或床位附近。到达后，产品通过状态提示提醒老人取药，并通过身份确认降低错拿风险。若老人未及时响应，设备可以保持等待状态或反馈给护工，使流程不再完全依赖人工反复确认。\n\n自适应送药的价值，不只是让机器人移动起来，而是让它能够根据任务进度、用户响应和护理场景变化，选择更合适的交互方式。",
    image: "/images/projects/medicine-robot/page-06-scene.png",
    fallbackImages: ["/images/projects/medicine-robot/scene.jpg", "/images/projects/medicine-robot/scene.webp"]
  }
};
