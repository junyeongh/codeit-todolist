import TaskItemInput from "@/blocks/task-item/input";
import TaskItemButtons from "@/blocks/task-item/buttons";
import TaskItemTitle from "@/blocks/task-item/title";
import type { ItemDetail } from "@/types";
import { updateTaskAction } from "@/actions/update-task.action";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;

  const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;
  const response = await fetch(`${API_SERVER_URL}/items/${itemId}`);

  const task: ItemDetail | undefined = await response.json();
  console.log(task);

  if (!task) return null;

  return (
    <form action={updateTaskAction}>
      <div className="bg-white flex flex-col h-[calc(100vh-60px)]">
        <TaskItemTitle {...task} />
        <TaskItemInput {...task} />
        <TaskItemButtons {...task} />
      </div>
    </form>
  );
}
