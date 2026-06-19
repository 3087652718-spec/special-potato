import Link from "next/link";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper py-32 text-ink">
      <div className="container-wide">
        <SectionReveal className="rounded-[36px] bg-ink p-16 text-white shadow-2xl shadow-black/20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue">联系我 / CONTACT</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-tight">期待交流产品设计、工业设计与作品集机会。</h2>
          <div className="mt-12 grid grid-cols-4 gap-6 border-y border-white/12 py-8 text-sm">
            <div><span className="block text-white/38">邮箱</span><strong className="mt-2 block font-medium">3087652718@qq.com</strong></div>
            <div><span className="block text-white/38">微信</span><strong className="mt-2 block font-medium">ljh3087652718</strong></div>
            <div><span className="block text-white/38">电话</span><strong className="mt-2 block font-medium">+86 19065336504</strong></div>
            <div><span className="block text-white/38">简历</span><strong className="mt-2 block font-medium">PDF 简历暂未上传</strong></div>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="mailto:3087652718@qq.com" className="hover-target rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-blue hover:text-white">发送邮件</a>
            <Link href="#" className="hover-target rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white/78 transition hover:border-blue hover:text-white">下载简历</Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
