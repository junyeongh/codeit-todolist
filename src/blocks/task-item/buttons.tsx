import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ItemDetail } from "@/types";

export default function TaskItemButtons(props: ItemDetail) {
  return (
    <div className="px-[102px] pt-6 justify-end flex flex-row gap-5">
      <Button variant="secondary">
        <Check />
        <span>수정완료</span>
      </Button>
      <Button variant="destructive">
        <X />
        <span>삭제하기</span>
      </Button>
    </div>
  );
}
