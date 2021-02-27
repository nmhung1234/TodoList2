import * as Types from './../constants/actionTypes';

export const addTodoItems = (task) => {
    return{
        type: Types.ADD_TODOS,
        task
    } 
}
export const doneTask = (id) => {
    return{
        type: Types.DONE_TODOS,
        id
    } 
}
export const getDoneTask = () => {
    return{
        type: Types.LIST_ALL_ALREADY_DONES,
    } 
}
export const deleteTask = (id) => {
    return{
        type: Types.DELETE_TODO,
        id
    } 
}
export const makeAllDone = () => {
    return{
        type: Types.MAKE_ALL_DONE,
    } 
}
export const search = (item) => {
    return{
        type: Types.SEARCH,
        item
    } 
}