import Image from "next/image";
import TaskItem from "@/blocks/task/item";
import { mockItems } from "@/mock/items";

export default function TaskList() {
  // fetch tasks from API (currently using mock data)
  const todoTasks = mockItems.filter(item => !item.isCompleted);
  const doneTasks = mockItems.filter(item => item.isCompleted);

  const hasTodoTasks: boolean = todoTasks.length > 0;
  const hasDoneTasks: boolean = doneTasks.length > 0;

  return (
    <div className="flex flex-col xl:flex-row gap-x-8 mt-10">
      <div className="todo-section grow-1">
        <Image src="/todo.svg" alt="Todo Icon" width={97} height={36} />
        <div className="todo-tasks flex flex-col justify-center items-center">
          {
            hasTodoTasks
              ? todoTasks.map((task) => <TaskItem key={task.id} {...task} />)
              : <div className="no-tasks text-center">
                <Image src="empty_todo.svg" alt="Empty Todo" width={240} height={240} />
                <p>할 일이 없어요.</p>
                <p>TODO를 새롭게 추가해주세요.</p>
              </div>
          }
        </div>
      </div>
      <div className="done-section grow-1 pt-12 md:pt-0">
        <Image src="/done.svg" alt="Done Icon" width={97} height={36} />
        <div className="done-tasks flex flex-col justify-center items-center">
          {
            hasDoneTasks ? doneTasks.map((task) => <TaskItem key={task.id} {...task} />
            ) : (
              <div className="no-tasks text-center">
                <Image src="empty_done.svg" alt="Empty Todo" width={240} height={240} />
                <p>아직 다 한 일이 없어요</p>
                <p>해야 할 일을 체크해보세요</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}