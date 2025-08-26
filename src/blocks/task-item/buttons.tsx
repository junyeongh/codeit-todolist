"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ItemDetail } from "@/types";
import { useRouter } from "next/navigation";
import { handleDeleteMemo } from "@/servers/taskService";
import { useState } from "react";

export default function TaskItemButtons(props: ItemDetail) {
  const { id } = props;
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const onClickDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      await handleDeleteMemo(id);
      router.push("/");
    } catch (error) {
      console.error("Failed to delete memo:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="xl:justify-end md:justify-center px-6 flex flex-row gap-5 pt-6">
      <Button variant="secondary" type="submit">
        <Check />
        <span>수정완료</span>
      </Button>
      <Button
        variant="destructive"
        onClick={onClickDelete}
        disabled={isDeleting}
      >
        <X />
        <span>삭제하기</span>
      </Button>
    </div>
  );
}
