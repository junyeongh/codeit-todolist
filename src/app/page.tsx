import { Check, Pencil, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="top-section flex flex-row gap-x-8">
        <input
          placeholder="할 일을 입력해 주세요"
          className="p-6 box-border h-14 border-solid border-2 border-slate-900 rounded-3xl bg-slate-200 text-slate-900 shadow-[3.65px_4px_#0f172a]"
        />
        <Button>
          <Plus />
          <span className="hidden md:inline">추가 하기</span>
        </Button>
      </div>
      <div className="tasks flex flex-col xl:flex-row gap-x-8">
        <div className="todo-section">
          <div>Todo</div>
          <div className="tasks">
            <div className="w-[588px] border-solid border-2 border-slate-900">
              비타민 챙겨 먹기
            </div>
            <div className="w-[588px] border-solid border-2 border-slate-900">
              맥주 마시기
            </div>
            <div className="w-[588px] border-solid border-2 border-slate-900">
              운동하기
            </div>
          </div>
        </div>
        <div className="done-section">
          <div>Done</div>
          <div className="w-[588px] border-solid border-2 border-slate-900">
            은행 다녀오기
          </div>
          <div className="w-[588px] border-solid border-2 border-slate-900">
            비타민 챙겨 먹기
          </div>
        </div>
      </div>
      <Buttons />
    </>
  );
}

function Buttons() {
  return (
    <div className="buttons flex flex-col gap-5 m-4">
      <Button>
        <Plus />
        <span className="hidden md:inline">추가 하기</span>
      </Button>
      <Button variant="destructive">
        <X />
        <span className="hidden md:inline">삭제하기</span>
      </Button>
      <Button variant="secondary">
        <Check />
        <span className="hidden md:inline">수정완료</span>
      </Button>
      <Button
        variant="flat"
        size="icon"
        className="bg-slate-200 text-slate-500 "
      >
        <Plus />
      </Button>
      <Button
        variant="flat"
        size="icon"
        className="bg-[#0F172A80] text-white border-solid border-2 border-slate-900"
      >
        <Pencil />
      </Button>
    </div>
  );
}
