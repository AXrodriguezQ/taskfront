import { CreateTask, UpdateTask } from "../interfaces/task.interface"

const API = 'http://localhost:3000/api'

export const createTaskRequest = (task: CreateTask) => 
    fetch(`${API}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

export const getTaskRequest = () => fetch(`${API}/tasks`)

export const deleteTaskRequest = (id: string) => fetch(`${API}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const updateTaskRequest = (id: string, task: UpdateTask) => fetch(`${API}/tasks/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
})