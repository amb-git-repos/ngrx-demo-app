import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError,  single, first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    private taskApiUrl = 'api/task';
    private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private httpClient: HttpClient) {

    }

    getTask(): Observable<Task> {
        return this.httpClient.get<Task>(`${this.taskApiUrl}`).pipe(
            //tap((task) => console.log(`(task.service.ts) Data returned by in memory API: ${JSON.stringify(task)}`)),
            catchError(this.exceptionHandling)
        );
    }

    updateTask(task: Task) {
        return this.httpClient.put<Task>(`${this.taskApiUrl}/${task.id}`, task, { headers: this.httpHeader }).pipe(
            //tap(() => console.log(`(task.service.ts) Updated task: ${JSON.stringify(task)}`)),
            map(() => task),
            catchError(this.exceptionHandling)
        );
    }

    private exceptionHandling(error: any) {
        //In live project we may send the error to the server for logging
        // console.log(error);
        return throwError(JSON.stringify(error));
    }

}