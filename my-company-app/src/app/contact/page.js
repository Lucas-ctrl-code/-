export const metadata = {
  title: "联系我们 | 後半彩り株式会社",
  description: "地址、电话、邮箱与地图。",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* ========== 页头 ========== */}
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            联系我们
          </h1>
          <p className="mt-2 text-lg text-stone-600">
            欢迎通过电话、邮件或到访与我们取得联系。
          </p>
        </div>
      </section>

      {/* ========== 联系信息 ========== */}
      <section className="bg-stone-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                地址
              </p>
              <p className="mt-2 text-lg text-stone-900">
                【请填写】中国 XX 省 XX 市 XX 区 XX 路 XX 号
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                电话
              </p>
              <p className="mt-2 text-lg">
                <a
                  href="tel:+8600000000000"
                  className="text-amber-900 underline-offset-4 hover:underline"
                >
                  +86 000-0000-0000
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                Email
              </p>
              <p className="mt-2 text-lg">
                <a
                  href="mailto:contact@example.com"
                  className="text-amber-900 underline-offset-4 hover:underline"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </div>

          {/* ========== Google Map：请在此处粘贴 iframe 嵌入代码 ========== */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
              地图位置
            </p>
            <div className="mt-3 min-h-[280px] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-lg">
              {/* 将下方占位替换为 Google 地图「嵌入地图」iframe */}
              <div className="flex aspect-video w-full items-center justify-center p-8 text-center text-stone-500">
                <span className="text-sm">
                  在此粘贴 Google Maps iframe
                  <br />
                  <span className="text-stone-400">预留区域</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
