import { TaskState, InitialTaskState } from '../task.state';
import { TaskActions, TaskActionTypes } from '../actions/task.actions';

//Reducer
//Can also create reducer using createReducer() function
export function taskReducer(state = InitialTaskState, action: TaskActions): TaskState {
    switch (action.type) {

        case TaskActionTypes.LoadTaskSuccess:

            //Check in Redux devtool for more state info or any errors
            // console.log(`Existing state - ${TaskActionTypes.LoadTaskSuccess}: ${JSON.stringify(state)}`);
            // console.log(`Action - ${TaskActionTypes.LoadTaskSuccess}: ${JSON.stringify(action)}`);

            return {
                ...state,
                taskToEstimate: action.payload[0],//Requires first one only for this demo app
                error: ''
            }
        case TaskActionTypes.LoadTaskFail:

            //Check in Redux devtool for more state info or any errors
            // console.log(`Existing state - ${TaskActionTypes.LoadTaskFail}: ${JSON.stringify(state)}`);
            // console.log(`Action - ${TaskActionTypes.LoadTaskFail}: ${JSON.stringify(action)}`);

            return {
                ...state,
                error: action.payload
            }
        case TaskActionTypes.UpdateTaskSucess:

            //Check in Redux devtool for more state info or any errors
            // console.log(`Existing state - ${TaskActionTypes.UpdateTaskSucess}: ${JSON.stringify(state)}`);
            // console.log(`Action - ${TaskActionTypes.UpdateTaskSucess}: ${JSON.stringify(action)}`);

            return {
                ...state,
                taskToEstimate: action.payload,
                error: ''
            }
        case TaskActionTypes.UpdateTaskFail:

            //Check in Redux devtool for more state info or any errors
            // console.log(`Existing state - ${TaskActionTypes.UpdateTaskFail}: ${JSON.stringify(state)}`);
            // console.log(`Action - ${TaskActionTypes.UpdateTaskFail}: ${JSON.stringify(action)}`);

            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}