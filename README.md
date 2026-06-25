# 产品设计作品集网站

这是一个基于 Next.js / TypeScript / Tailwind CSS / Framer Motion 的产品设计作品集网站，用于本地预览和后期替换作品图片、文字内容。

## 目录说明

- `app/`：Next.js 页面与路由，包括首页和项目详情页。
- `components/`：导航、Hero、关于我、项目画廊、技能、联系、鼠标跟随等组件。
- `data/`：项目数据，包含项目名称、介绍、职责、图片路径和详情页内容。
- `public/images/projects/`：项目图片，已按项目名称分文件夹。
- `styles/`：全局样式、字体系统、占位图和基础视觉系统。
- `docs/`：项目说明、后续设计文档或素材记录。

## 本地运行

进入项目目录：

```powershell
cd "D:\作品集\作品集总\wz"
```

如果本机已安装 npm：

```powershell
npm install
npm run dev
```

如果本机没有全局 npm，可使用项目内临时 npm：

```powershell
$env:Path = "C:\Users\定的态度\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;" + $env:Path
& "C:\Users\定的态度\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" .\.tools\npm\bin\npm-cli.js install
& "C:\Users\定的态度\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" .\.tools\npm\bin\npm-cli.js run dev
```

浏览器打开：

```text
http://localhost:3000
```

## 替换项目图片

项目图片按项目名称放入对应文件夹：

```text
public/images/projects/微光捕蚊器/
public/images/projects/养老院送药机器人/
public/images/projects/智能导盲机器人/
public/images/projects/房船船屋设计/
public/images/projects/仿生太阳能清洁系统/
public/images/projects/其他作品占位/
```

每个项目默认使用以下文件名：

- `cover.jpg`：项目封面图
- `render.jpg`：产品渲染图
- `structure.jpg`：产品结构展示图
- `cmf.jpg`：CMF 图
- `scene.jpg`：场景图

如果想改文件名或路径，编辑：

```text
data/projects.ts
```

找到对应项目的 `images` 字段，替换路径即可。

## 构建检查

```powershell
npm run build
```

或使用项目内临时 npm：

```powershell
& "C:\Users\定的态度\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" .\.tools\npm\bin\npm-cli.js run build
```

## 如何打包 100MB 以内作品集网站

打包给他人预览时，只需要保留网站代码和正在使用的 `public` 资源。

不要打包以下目录：

- `node_modules/`：本地依赖，接收方运行 `npm install` 后会重新生成。
- `.next/`：Next.js 开发/构建缓存，运行或构建时会重新生成。
- `.git/`：版本库记录，不属于作品集展示文件。
- `backup_unused/`：原始大图、原始视频、旧 PDF 和未使用素材备份。
- `out/`、`dist/`：除非明确作为最终静态导出目录，否则不需要打包。

推荐打包内容：

- `app/`
- `components/`
- `data/`
- `public/`
- `styles/`
- `package.json`
- `package-lock.json`（如果存在）
- `next.config.ts`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `tsconfig.json`
- `README.md`

接收方预览方式：

```powershell
npm install
npm run dev
```

然后打开：

```text
http://localhost:3000
```

当前优化后的展示资源主要集中在 `public/images` 和 `public/videos`。原始未压缩素材已移动到 `backup_unused`，不应计入最终作品集压缩包。
