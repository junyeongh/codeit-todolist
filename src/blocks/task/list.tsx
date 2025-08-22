import Link from "next/link";
import Image from "next/image";
import TaskDisplay from "@/blocks/task/display";

export default function TaskList() {
  const shouldDisplayTasks = false;

  return (
    <div className="flex flex-col xl:flex-row gap-x-8 mt-10">
      <div className="todo-section grow-1">
        <Image src="/todo.svg" alt="Todo Icon" width={97} height={36} />
        {
          shouldDisplayTasks ? (
            <div className="tasks">
              <Link href={"/items/123"}>
                <TaskDisplay isChecked={false} />
              </Link>
            </div>
          ) : (
            <div className="no-tasks">
              <Image src="empty_todo.svg" alt="Empty Todo" width={240} height={240} />
              <p>할 일이 없어요.</p>
              <p>TODO를 새롭게 추가해주세요.</p>
            </div>
          )
        }
      </div>
      <div className="done-section grow-1">
        <Image src="/done.svg" alt="Done Icon" width={97} height={36} />
        {
          shouldDisplayTasks ? (
            <Link href={"/items/123"}>
              <TaskDisplay isChecked={true} />
            </Link>
          ) : (
            <div className="no-tasks">
              <Image src="empty_done.svg" alt="Empty Todo" width={240} height={240} />
              <p>아직 다 한 일이 없어요</p>
              <p>해야 할 일을 체크해보세요</p>
            </div>
          )
        }
      </div>
    </div>
  )
}