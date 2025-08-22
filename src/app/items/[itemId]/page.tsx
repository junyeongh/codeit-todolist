import TaskItemInput from "@/blocks/task-item/input";
import TaskItemButtons from "@/blocks/task-item/buttons";
import TaskItemTitle from "@/blocks/task-item/title";

export default function ItemPage({ params }: { params: { itemId: string } }) {
  return (
    <div className="bg-white flex flex-col h-[calc(100vh-60px)]">
      {/* toggle & task title */}
      <TaskItemTitle />
      {/* task image & detail */}
      <TaskItemInput />
      {/* save & delete buttons */}
      <TaskItemButtons />
    </div>
  )
}
