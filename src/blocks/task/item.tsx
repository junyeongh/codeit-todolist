import type { ItemDetail } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function TaskItem(props: ItemDetail) {
  const { id, name, memo, imageUrl, isCompleted } = props;

  return (
    <Link href={`/items/${id}`} className="w-full">
      <div className="border-solid border-2 border-slate-900 flex flex-row items-center gap-4 rounded-[27px] h-12.5 bg-white mt-4">
        <div
          className={clsx(
            "size-8 rounded-full ml-3",
            !isCompleted && "bg-yellow-50  border-2 border-slate-900",
            isCompleted &&
              "bg-violet-600 line-through flex items-center justify-center",
          )}
        >
          {isCompleted && (
            <Image
              src="/checked.svg"
              alt="Checked Icon"
              width={20}
              height={14}
            />
          )}
        </div>
        <span className="flex-1">{name}</span>
      </div>
    </Link>
  );
}
