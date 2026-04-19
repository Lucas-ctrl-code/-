import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-stone-100">後半彩り株式会社</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed">
              不动产・民宿・餐饮・美容・玉石销售
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            aria-label="页脚导航"
          >
            <Link href="/" className="hover:text-stone-200">
              首页
            </Link>
            <Link href="/building" className="hover:text-stone-200">
              不动产楼层介绍
            </Link>
            <Link href="/jade" className="hover:text-stone-200">
              玉石展示
            </Link>
            <Link href="/contact" className="hover:text-stone-200">
              联系我们
            </Link>
          </nav>
        </div>
        <p className="mt-10 border-t border-stone-700 pt-8 text-center text-sm text-stone-500">
          © {year} 後半彩り株式会社 · 保留所有权利
        </p>
      </div>
    </footer>
  );
}
