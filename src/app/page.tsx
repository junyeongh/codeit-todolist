import TaskInput from "@/blocks/task/input";
import TaskList from "@/blocks/task/list";

export default function Home() {
  return (
    <div className="xl:px-90 lg:px-6 px-4">
      <TaskInput />
      <TaskList />
    </div>
  );
}
