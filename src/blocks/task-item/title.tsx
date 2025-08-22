import { ItemDetail } from "@/types";

export default function TaskItemTitle(props: ItemDetail) {
  const { id, name, memo, imageUrl, isCompleted } = props;

  return (
    <div className="px-[102px] pt-6">
      <div className="border-solid border-2 border-slate-900 flex flex-row justify-center items-center gap-4 rounded-[27px] h-12.5 bg-white">
        <div className="size-8 bg-yellow-50 rounded-full border-2 border-slate-900 ml-3" />
        <span className="underline font-bold">{name}</span>
      </div>
    </div>
  );
}
