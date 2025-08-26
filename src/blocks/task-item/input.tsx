"use client"

import { Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ItemDetail } from "@/types";
import Image from "next/image";

const TaskItemInputImage = ({ imageUrl }: { imageUrl: string | undefined }) => {
  const hasImage = !!imageUrl;

  const handleImageUpload = async () => {};

  return (
    <div className="relative flex flex-row justify-center">
      {hasImage ? (
        <div className="min-w-[375px] min-h-[300px]">
          <input name="imageUrl" value={imageUrl} hidden readOnly />
          <Image
            src={imageUrl}
            alt="Placeholder"
            fill
            className="rounded-3xl"
          />
          <Button
            variant="flat"
            size="icon"
            className="absolute bottom-4 right-4 bg-[#0F172A80] text-white border-solid border-2 border-slate-900"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <Pencil />
          </Button>
        </div>
      ) : (
        <>
          <div className="xl:px-40 py-31 bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Image placeholder"
            >
              <title>Image placeholder</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.9466 0.333496H21.6666C9.88457 0.333496 0.333313 9.88475 0.333313 21.6668V32.9735C0.333313 44.7556 9.88457 54.3068 21.6666 54.3068H32.9466C44.7287 54.3068 54.28 44.7556 54.28 32.9735V21.6668C54.28 9.88475 44.7287 0.333496 32.9466 0.333496ZM16.6533 11.3202C19.5988 11.3202 21.9866 13.708 21.9866 16.6535C21.9866 19.599 19.5988 21.9868 16.6533 21.9868C13.7078 21.9868 11.32 19.599 11.32 16.6535C11.32 13.708 13.7078 11.3202 16.6533 11.3202ZM36.36 48.6535C43.9097 45.834 48.9231 38.6325 48.9466 30.5735L48.8666 25.9868C48.8666 24.8935 48.6533 22.8402 48.6533 22.8402H44.3066C34.2437 22.8707 25.0548 28.5634 20.5466 37.5602C17.2744 34.6349 13.0424 33.0124 8.65331 33.0002H5.42665C5.18862 39.1995 8.55574 44.9776 14.0666 47.8268C16.0367 48.8763 18.2345 49.4257 20.4666 49.4268H31.5866C33.2107 49.45 34.8263 49.1883 36.36 48.6535Z"
                fill="#E2E8F0"
              />
            </svg>
          </div>
          <Button
            variant="flat"
            size="icon"
            className="absolute bottom-4 right-4 bg-slate-200 text-slate-500"
          >
            <Plus />
          </Button>
        </>
      )}
    </div>
  );
};

const TaskItemInputText = ({ memo }: { memo: string | undefined }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/note.png')",
        backgroundSize: "cover",
      }}
      className="flex-1 rounded-3xl min-h-50 flex flex-col"
    >
      <div className="pt-6 flex justify-center text-amber-800">Memo</div>
      <textarea
        name="memo"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#fcd34d transparent",
        }}
        className="flex-1 w-full resize-none mt-4 p-4"
        defaultValue={memo}
      ></textarea>
    </div>
  );
};

export default async function TaskItemInput(props: ItemDetail) {
  const { memo, imageUrl } = props;

  return (
    <div className="px-[102px] pt-6 flex flex-col lg:flex-row gap-5">
      <TaskItemInputImage imageUrl={imageUrl} />
      <TaskItemInputText memo={memo} />
    </div>
  );
}
