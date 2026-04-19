import Image from "next/image";
import Link from "next/link";

/**
 * 首页：Hero + 公司简介 + 联系方式摘要
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ========== Hero ========== */}
      <section className="relative w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="relative mx-auto max-w-7xl min-h-[min(88vh,920px)] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/images/building1.jpg"
            alt="後半彩り株式会社 · 建筑外观"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-900/55" aria-hidden />
          <div className="relative z-10 flex min-h-[min(88vh,920px)] items-center justify-center px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                後半彩り株式会社
              </h1>
              <p className="mt-4 text-lg text-stone-100 sm:text-xl">
                不动产・民宿・餐饮・美容・玉石销售
              </p>
              <p className="mt-2 text-sm text-stone-200 sm:text-base">
                不動産・民宿・飲食・美容・玉石販売
              </p>
              <p className="mt-1 text-sm text-stone-300 sm:text-base">
                Real Estate, Hostel, Dining, Hair Salon, Jade Sales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 公司简介 ========== */}
      <section
        id="about"
        className="border-b border-stone-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            公司简介
          </h2>
          <p className="mt-6 text-left text-stone-700 leading-relaxed sm:text-lg">
            後半彩り株式会社运营四层不动产物业，整合<strong className="font-semibold text-stone-900">重餐饮</strong>、
            <strong className="font-semibold text-stone-900">美容美发</strong>、
            <strong className="font-semibold text-stone-900">民宿</strong>及
            <strong className="font-semibold text-stone-900">玉石销售</strong>等业态，
            致力于为顾客与合作伙伴提供多元、专业的服务体验。欢迎浏览各楼层介绍与玉石精选，或与我们联系洽谈合作。
          </p>
        </div>
      </section>

      {/* ========== 联系方式（摘要，完整信息见 /contact）========== */}
      <section
        id="contact-preview"
        className="bg-stone-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            联系方式
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            以下信息可在此修改；地图与完整说明请见「联系我们」页面。
          </p>
          <div className="mx-auto mt-10 max-w-xl space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                地址
              </p>
              <p className="mt-1 text-stone-800">
                【请填写】中国 XX 省 XX 市 XX 区 XX 路 XX 号
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                电话
              </p>
              <p className="mt-1">
                <a
                  href="tel:+8600000000000"
                  className="text-lg text-amber-900 underline-offset-4 hover:underline"
                >
                  +86 000-0000-0000
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                邮箱
              </p>
              <p className="mt-1">
                <a
                  href="mailto:contact@example.com"
                  className="text-lg text-amber-900 underline-offset-4 hover:underline"
                >
                  contact@example.com
                </a>
              </p>
            </div>
            <div className="border-t border-stone-100 pt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                查看地图与完整联系信息
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
