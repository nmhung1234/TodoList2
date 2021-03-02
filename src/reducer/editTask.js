import * as types from './../constants/actionTypes';

let initialize = {
    id: "",
    name: "",
    complete: false,
    search: "",
    timeadd: "",
    deadline: "",
}

const myReducer = (state = initialize, Action) => {
    switch (Action.type) {
        case types.EDIT_TASK: {
            // console.log(Action.task);
            return Action.task
        }
        default: return state

    }
}
export default myReducer