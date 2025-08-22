import clsx from "clsx";

export default function TaskDisplay({ isChecked }: { isChecked: boolean }) {
  return (
    <div className="border-solid border-2 border-slate-900 flex flex-row items-center gap-4 rounded-[27px] h-12.5 bg-white">
      <div className={clsx(
        "size-8 rounded-full ml-3",
        !isChecked && "bg-yellow-50  border-2 border-slate-900",
        isChecked && "bg-violet-600 line-through flex items-center justify-center",
      )}>
        {
          isChecked &&
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Checked Icon</title>
            <path d="M2 6.28571L7.81818 12L18 2" stroke="#FEFCE8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }
      </div>
      <span>비타민 챙겨 먹기</span>
    </div>
  )
}
