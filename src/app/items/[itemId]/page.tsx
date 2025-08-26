import TaskItemInput from "@/blocks/task-item/input";
import TaskItemButtons from "@/blocks/task-item/buttons";
import TaskItemTitle from "@/blocks/task-item/title";
import type { ItemDetail } from "@/types";
import { updateTask } from "@/actions/update-task";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;

  const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;
  const response = await fetch(`${API_SERVER_URL}/items/${itemId}`);

  const task: ItemDetail | undefined = await response.json();

  if (!task) return null;

  const updateTaskActionWithId = updateTask.bind(null, itemId);

  return (
    <div className="xl:px-90">
      <div className="bg-white flex flex-col h-[calc(100vh-60px)]">
        <div className="lg:px-[102px] px-6">
          <form action={updateTaskActionWithId}>
            <TaskItemTitle {...task} />
            <TaskItemInput {...task} />
            <TaskItemButtons {...task} />
          </form>
        </div>
      </div>
    </div>
  );
}
