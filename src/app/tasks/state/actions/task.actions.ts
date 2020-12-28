import { Action } from '@ngrx/store';
import { Task } from '../../shared/models/task.model';

export enum TaskActionTypes {
    LoadTask = '[Task] Load Task',
    LoadTaskSuccess = '[Task] Load Task Success',
    LoadTaskFail = '[Task] Load Task Fail',
    UpdateTask = '[Task] Update Task',
    UpdateTaskSucess = '[Task] Update Task Success',
    UpdateTaskFail = '[Task] Update Task Fail',
}


//Can also use createAction() function to create actions
export class LoadTask implements Action{
    readonly type = TaskActionTypes.LoadTask
}

export class LoadTaskSuccess implements Action{
    readonly type = TaskActionTypes.LoadTaskSuccess
    constructor(public payload: Task) {
    }
}

export class LoadTaskFail implements Action{
    readonly type = TaskActionTypes.LoadTaskFail
    constructor(public payload: string) {
    }
}

export class UpdateTask implements Action{
    readonly type = TaskActionTypes.UpdateTask
    constructor(public payload: Task) {
    }
}

export class UpdateTaskSuccess implements Action{
    readonly type = TaskActionTypes.UpdateTaskSucess
    constructor(public payload: Task) {
    }
}

export class UpdateTaskFail implements Action{
    readonly type = TaskActionTypes.UpdateTaskFail
    constructor(public payload: string) {
    }
}

export type TaskActions =  LoadTask | LoadTaskSuccess | LoadTaskFail 
                         | UpdateTask | UpdateTaskSuccess | UpdateTaskFail;