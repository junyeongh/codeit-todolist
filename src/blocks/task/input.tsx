import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaskInput() {
  return (
    <div className="add-task">
      <form className="top-section flex flex-row gap-x-8 mt-6">
        <div className="flex-grow">
          <input
            placeholder="할 일을 입력해 주세요"
            className="w-full p-6 h-14 border-solid border-2 border-slate-900 rounded-3xl bg-slate-200 text-slate-900 shadow-[3.65px_4px_#0f172a]"
          />
        </div>
        <Button type="submit" className="flex-shrink-0">
          <Plus />
          <span className="hidden sm:inline">추가 하기</span>
        </Button>
      </form>
    </div>
  )
}