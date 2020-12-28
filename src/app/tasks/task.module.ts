import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaskComponent,TaskEditComponent, taskReducer, TaskEffects} from './';

const routes:Routes = [
    { path: '', component: TaskComponent }
]

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('tasks',taskReducer),
        EffectsModule.forFeature([TaskEffects])
    ],
    declarations:[
        TaskComponent,
        TaskEditComponent
    ]
})

export class TaskModule{

}