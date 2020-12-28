import { Injectable } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/task.model';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import * as taskActions from '../actions/task.actions';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class TaskEffects {

    constructor(private taskService: TaskService, private action$: Actions) {
    }

    @Effect()
    loadTask$: Observable<Action> = this.action$.pipe(
        ofType(taskActions.TaskActionTypes.LoadTask),
        mergeMap(() => this.taskService.getTask().pipe(
            map(task => (new taskActions.LoadTaskSuccess(task))),
            catchError(error => of(new taskActions.LoadTaskFail(error)))
        ))
    );

    @Effect()
    updateTask$: Observable<Action> = this.action$.pipe(
        ofType(taskActions.TaskActionTypes.UpdateTask),
        map((action: taskActions.UpdateTask) => action.payload),
        mergeMap((task: Task) => this.taskService.updateTask(task).pipe(
            //tap(data=> console.log(`(task.effects.ts) Updated data: ${JSON.stringify(data)}`)),
            map(task => new taskActions.UpdateTaskSuccess(task)),
            catchError(error => of(new taskActions.UpdateTaskFail(error)))
        ))
    );

}