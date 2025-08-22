import TaskItemInput from "@/blocks/task-item/input";
import TaskItemButtons from "@/blocks/task-item/buttons";
import TaskItemTitle from "@/blocks/task-item/title";
import { mockDetailedItems } from "@/mock/items";
import type { ItemDetail } from "@/types";

export default function ItemPage({ params }: { params: { itemId: string } }) {
  const itemId = parseInt(params.itemId, 10);
  const task: ItemDetail | undefined = mockDetailedItems.find(item => item.id === itemId);

  if (!task) return null;

  return (
    <div className="bg-white flex flex-col h-[calc(100vh-60px)]">
      <TaskItemTitle {...task} />
      <TaskItemInput {...task} />
      <TaskItemButtons {...task} />
    </div>
  )
}
