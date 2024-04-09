import TaskItem from "./TaskItem"
import { useTasks } from "../context/useTask"

const TaskList = () => {

  const {tasks} = useTasks()

  return (
    <div>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id} />
        ))
      }
    </div>
  )
}

export default TaskList