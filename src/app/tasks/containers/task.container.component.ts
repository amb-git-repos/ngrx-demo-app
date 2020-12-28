import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { State } from '../state/task.state';
import { Observable } from 'rxjs';
import { Task } from '../shared/models/task.model';
import * as taskSelectors from '../state/selectors/task-selectors';
import * as taskActions from '../state/actions/task.actions';

@Component({
    templateUrl: './task.container.component.html'
})

export class TaskComponent implements OnInit {

    taskEstimation$: Observable<Task>;
    error$ : Observable<string>;

    constructor(private store: Store<State>) { }

    ngOnInit(): void { 

        //I have used async pipe so have not subscribed it and unsubscribed it.
        //Async pipe will handle it
        this.taskEstimation$ = this.store.pipe(select(taskSelectors.selectTaskEstimation));
        
        //I have used async pipe so have not subscribed it and unsubscribed it.
        //Async pipe will handle it
        this.error$ = this.store.pipe(select(taskSelectors.selectError));

        this.store.dispatch(new taskActions.LoadTask());
    }

    updateEstimatedTask(task: Task): void{
        this.store.dispatch(new taskActions.UpdateTask(task));
    }
}