import { useContext } from "react"
import { TaskContex } from "./TaskContext"


export const useTasks = () => {
    const context = useContext(TaskContex)
    if (!context) throw new Error("useTasks must be used within a TaskProvider")
    return context
}