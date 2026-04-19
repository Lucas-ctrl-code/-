import Image from "next/image";

/** 楼层业态卡片（不动产页面使用） */
export default function FloorCard({ floor, title, desc, imageSrc }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-lg transition hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-stone-200">
        <Image
          src={imageSrc}
          alt={`${floor} ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col rounded-b-xl p-5">
        <p className="text-sm font-semibold text-amber-800">{floor}</p>
        <h3 className="mt-1 text-lg font-semibold text-stone-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-stone-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  );
}
