"use client";

import { handleCompletionToggle } from "@/servers/taskService";
import type { ItemDetail } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TaskItem(props: ItemDetail) {
  const { id, name, isCompleted } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClickCompletion = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) return;

    setIsLoading(true);
    try {
      await handleCompletionToggle(id, isCompleted);
      router.refresh();
    } catch (error) {
      console.error("Failed to toggle completion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Link href={`/items/${id}`} className="w-full">
      <div className="border-solid border-2 border-slate-900 flex flex-row items-center gap-4 rounded-[27px] h-12.5 bg-white mt-4">
        <button
          type="button"
          className={clsx(
            "size-8 rounded-full ml-3",
            !isCompleted && "bg-yellow-50  border-2 border-slate-900",
            isCompleted &&
              "bg-violet-600 line-through flex items-center justify-center",
          )}
          onClick={handleClickCompletion}
          disabled={isLoading}
        >
          {isCompleted && (
            <Image
              src="/checked.svg"
              alt="Checked Icon"
              width={20}
              height={14}
            />
          )}
        </button>
        <span className="flex-1">{name}</span>
      </div>
    </Link>
  );
}
