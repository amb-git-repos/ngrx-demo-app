import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../task.state';

//Feature slice name same as defined in task.module.ts
//Don't want to make it available for other class so have not defined it with export
const featureKey = 'tasks';

//Get the feature task slice from state
//Don't want to make it available for other class so have not defined it with export 
const selectTaskFeatureState = createFeatureSelector<TaskState>(featureKey);

//Selector for getting task
export const selectTaskEstimation = createSelector(
    selectTaskFeatureState,
    state => state.taskToEstimate
);

//Selector for getting error
export const selectError = createSelector(
    selectTaskFeatureState,
    state => state.error
);