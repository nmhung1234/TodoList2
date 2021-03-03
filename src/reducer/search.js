import * as types from './../constants/actionTypes';


let initialize = '';

const myReducer = (state = initialize, Action) => {
    switch (Action.type) {
        case types.SEARCH: {
            return Action.item.toLowerCase()
        }
        default: return state

    }
}
export default myReducer