import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../shared/models/task.model';

@Component({
selector:'task-edit',
templateUrl:'./task-edit.component.html'
})

export class TaskEditComponent implements OnInit{
    
    estHours = null;
    taskForm : FormGroup;
    @Input() errorMessage: string;
    @Input() taskEst: Task;
    @Output() updateTask = new EventEmitter<Task>();

    constructor(private formbuilder: FormBuilder) 
    {
    }

    ngOnInit() {

        this.taskForm = this.formbuilder.group({
            taskEstimation: [this.taskEst.taskEstimation],
        });
    
    }

    saveEstimatedHours(){

        const task = { ...this.taskEst, ...this.taskForm.value } as Task;

        if(task.id && task.taskEstimation){
            this.updateTask.emit(task);
        }
        else{
            this.taskForm.patchValue({
                taskEstimation: this.taskEst.taskEstimation
            })
        }
    }

}