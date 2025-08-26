"use client";

import { handleCompletionToggle } from "@/servers/taskService";
import type { ItemDetail } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export default function TaskItemTitle(props: ItemDetail) {
  const { id, name, isCompleted } = props;

  const handleClickCompletion = () => {
    handleCompletionToggle(id, isCompleted);
  };

  return (
    <div className="px-[102px] pt-6">
      <div className="border-solid border-2 border-slate-900 flex flex-row justify-center items-center gap-4 rounded-[27px] h-12.5 bg-white">
        <button
          type="button"
          className={clsx(
            "size-8 rounded-full ml-3",
            !isCompleted && "bg-yellow-50  border-2 border-slate-900",
            isCompleted &&
            "bg-violet-600 line-through flex items-center justify-center",
          )}
          onClick={handleClickCompletion}
        >
          <input
            type="checkbox"
            name="isCompleted"
            checked={isCompleted}
            readOnly
            onClick={handleClickCompletion}
          />
          {isCompleted && (
            <Image
              src="/checked.svg"
              alt="Checked Icon"
              width={20}
              height={14}
            />
          )}
        </button>
        <input
          type="text"
          className="underline font-bold"
          defaultValue={name}
          name="name"
        />
      </div>
      <input type="hidden" name="id" value={id} />
    </div>
  );
}
