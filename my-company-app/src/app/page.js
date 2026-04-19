import Image from "next/image";

/**
 * 企业官网首页
 * 图片资源请放在 public/images/ 目录下，文件名与下方路径一致即可替换占位图。
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ========== Hero：全屏主视觉（背景图 + 公司名 + 三语标语）========== */}
      <section
        className="relative flex min-h-screen w-full items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat px-6 py-24"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* 背景遮罩：可调整透明度或删除以更换视觉强度 */}
        <div
          className="absolute inset-0 bg-stone-900/55"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            M&apos;s 玉造集团
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
      </section>

      {/* ========== 楼层业务：四张卡片（1F–4F）========== */}
      <section
        id="floors"
        className="border-b border-stone-200 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            楼层业态
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            四层不动产大楼，分层经营多元业态。以下为各楼层简介，图片与文案可自行替换。
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FloorCard
              floor="1F"
              title="餐饮"
              desc="重餐饮业态，欢迎品牌与顾客垂询。"
              imageSrc="/images/floor-1f.jpg"
            />
            <FloorCard
              floor="2F"
              title="理发店（美容美发）"
              desc="美容美发服务，舒适空间与专业团队。"
              imageSrc="/images/floor-2f.jpg"
            />
            <FloorCard
              floor="3F"
              title="民宿"
              desc="精品民宿体验，旅居之选。"
              imageSrc="/images/floor-3f.jpg"
            />
            <FloorCard
              floor="4F"
              title="民宿"
              desc="高层景观民宿，静谧休憩。"
              imageSrc="/images/floor-4f.jpg"
            />
          </div>
        </div>
      </section>

      {/* ========== 不动产介绍：整栋建筑大图 + 文案 ========== */}
      <section
        id="property"
        className="border-b border-stone-200 bg-stone-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            不动产介绍
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600">
            以下为整栋建筑示意大图与项目说明，您可在此替换为实拍外观、区位或产权说明等正式文案。
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[21/9] w-full min-h-[220px]">
              <Image
                src="/images/building.jpg"
                alt="整栋建筑外观"
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
              />
            </div>
          </div>
          <div className="mt-10 max-w-3xl space-y-4 text-stone-700 leading-relaxed">
            <p>
              本项目为四层独立不动产物业，集重餐饮、美容美发、民宿及公司玉石销售业务于一体，
              区位与建筑条件可根据贵司实际资料在此展开：建筑面积、电梯与消防、停车位、
              招商业态与合作方式等。
            </p>
            <p>
              【此处可继续补充】例如：交通位置、周边配套、楼层荷载与排油烟条件、
              民宿客房数量与房型、合作招商联系方式等。
            </p>
          </div>
        </div>
      </section>

      {/* ========== 玉石展示区：Jade Collection ========== */}
      <section
        id="jade"
        className="border-b border-stone-200 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Jade Collection
          </h2>
          <p className="mt-2 text-lg text-stone-600">玉石精选</p>
          <p className="mt-4 max-w-3xl text-stone-700 leading-relaxed">
            公司同步经营玉石销售业务。以下为展示画廊占位图（jade1–jade5），
            您之后可替换为实拍商品图，并在此补充材质、工艺、鉴定与购买渠道等说明文字。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <JadeImage src="/images/jade1.jpg" alt="玉石展品 1" />
            <JadeImage src="/images/jade2.jpg" alt="玉石展品 2" />
            <JadeImage src="/images/jade3.jpg" alt="玉石展品 3" />
            <JadeImage src="/images/jade4.jpg" alt="玉石展品 4" />
            <JadeImage src="/images/jade5.jpg" alt="玉石展品 5" />
          </div>
          <p className="mt-10 max-w-3xl text-sm text-stone-600 leading-relaxed">
            【玉石业务说明占位】可在此撰写品牌故事、选石标准、门店/线上渠道、
            售后服务与鉴定合作等信息。
          </p>
        </div>
      </section>

      {/* ========== 联系方式：地址 / 电话 / 邮箱 + Google Map 预留 ========== */}
      <section id="contact" className="bg-stone-900 px-6 py-20 text-stone-100">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            联系方式
          </h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-stone-400">
                  地址
                </p>
                <p className="mt-1 text-lg">
                  【请填写】中国 XX 省 XX 市 XX 区 XX 路 XX 号
                </p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-stone-400">
                  电话
                </p>
                <p className="mt-1 text-lg">
                  <a
                    href="tel:+8600000000000"
                    className="underline-offset-4 hover:underline"
                  >
                    +86 000-0000-0000
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-stone-400">
                  邮箱
                </p>
                <p className="mt-1 text-lg">
                  <a
                    href="mailto:contact@example.com"
                    className="underline-offset-4 hover:underline"
                  >
                    contact@example.com
                  </a>
                </p>
              </div>
            </div>
            {/* Google Map：将下方 iframe 替换为 Google 地图「嵌入地图」提供的代码即可 */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-400">
                地图位置
              </p>
              <div className="mt-3 overflow-hidden rounded-xl border border-stone-700 bg-stone-800">
                <div className="flex aspect-video w-full items-center justify-center p-8 text-center text-stone-500">
                  <span>
                    在此粘贴 Google Maps iframe，或嵌入其他地图组件。
                    <br />
                    <span className="text-sm text-stone-600">
                      预留区域 · 高度随 aspect-video 自适应
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} M&apos;s 玉造集团 · 保留所有权利
          </p>
        </div>
      </section>
    </div>
  );
}

/** 楼层卡片：图片占位 + 文案 */
function FloorCard({ floor, title, desc, imageSrc }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-stone-200">
        <Image
          src={imageSrc}
          alt={`${floor} ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-amber-800">{floor}</p>
        <h3 className="mt-1 text-lg font-semibold text-stone-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-stone-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  );
}

/** 玉石画廊单项 */
function JadeImage({ src, alt }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
