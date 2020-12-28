import { Task } from '../shared/models/task.model';

export interface State {
    taskState: TaskState
}

export interface TaskState {
    taskToEstimate: Task,
    error: string
}

export const InitialTaskState: TaskState = {
    taskToEstimate: {
        id: 0,
        taskDescription: '',
        taskEstimation: 0
    },
    error: ''
}