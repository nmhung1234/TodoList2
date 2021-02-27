import * as types from './../constants/actionTypes';

function idGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
function findIndex(state, id) {
    // console.log(state, id);
    let result;
    state.forEach((item, index) => {
        if (item.id === id) {
            result = index;
            return result;
        }
    })
    return result
}
let data = JSON.parse(localStorage.getItem('data'));
let initialize = data ? data : [];

const myReducer = (state = initialize, Action) => {
    switch (Action.type) {
        case types.ADD_TODOS: {
            let newState = [...state];
            if (Action.task.name) {
                let task = {
                    id: idGenerator(),
                    name: Action.task.name,
                    complete: Action.task.complete
                }
                newState.push(task);
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            } else {
                alert('Please add your todo');
            }
            return newState;
        }
        case types.DONE_TODOS: {
            let newState = [...state];
            let index = findIndex(newState, Action.id);
            // console.log(index);

            newState[index] = {
                ...newState[index],
                complete: true
            }
            localStorage.setItem('data', JSON.stringify(newState));
            // console.log(newState);
            return newState;
        }
        case types.DELETE_TODO: {
            let newState = [...state];
            // console.log(newState);
            let index = newState.findIndex(item => {
                return item.id === Action.id
            })
            newState.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(newState));
            return newState
        }
        case types.MAKE_ALL_DONE: {
            let newState = [...state];
            newState.map(item => {
                return item.complete = true;
            })
            localStorage.setItem('data', JSON.stringify(newState));
            return newState
        }
        default: {
            let newState = [...state];
            return newState
        }

    }
}
export default myReducer