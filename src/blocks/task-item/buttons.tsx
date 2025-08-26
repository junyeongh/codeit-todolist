"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ItemDetail } from "@/types";
import { useRouter } from "next/navigation";
import { handleDeleteMemo } from "@/servers/taskService";

export default function TaskItemButtons(props: ItemDetail) {
  const { id } = props;
  const router = useRouter();

  const onClickDelete = async () => {
    await handleDeleteMemo(id);
    router.push("/");
  };

  return (
    <div className="px-[102px] pt-6 justify-end flex flex-row gap-5">
      <Button variant="secondary" type="submit">
        <Check />
        <span>수정완료</span>
      </Button>
      <Button variant="destructive" onClick={onClickDelete}>
        <X />
        <span>삭제하기</span>
      </Button>
    </div>
  );
}
