"use client";

import { Plus } from "lucide-react";
import { useActionState, useEffect } from "react";
import { addNewTask } from "@/actions/add-new-task";
import { Button } from "@/components/ui/button";

export default function TaskInput() {
  const [state, formAction, isPending] = useActionState(addNewTask, null);

  useEffect(() => {
    if (state && !state.success) {
      alert(state.error);
    }
  }, [state]);

  return (
    <div className="add-task">
      <form
        className="top-section flex flex-row gap-x-8 mt-6"
        action={formAction}
      >
        <div className="flex-grow">
          <input
            name="name"
            placeholder="할 일을 입력해 주세요"
            className="w-full p-6 h-14 border-solid border-2 border-slate-900 rounded-3xl bg-slate-200 text-slate-900 shadow-[3.65px_4px_#0f172a]"
          />
        </div>
        <Button disabled={isPending} type="submit" className="flex-shrink-0">
          <Plus />
          <span className="hidden sm:inline">추가 하기</span>
        </Button>
      </form>
    </div>
  );
}
