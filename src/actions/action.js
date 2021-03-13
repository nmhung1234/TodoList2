import * as Types from './../constants/actionTypes';

export const addTodoItems = (task) => {
    return {
        type: Types.ADD_TODOS,
        task
    }
}
export const onEditTask = (task) => {
    return {
        type: Types.EDIT_TASK,
        task
    }
}
export const doneTask = (id) => {
    return {
        type: Types.DONE_TODOS,
        id
    }
}
export const getDoneTask = () => {
    return {
        type: Types.LIST_ALL_ALREADY_DONES,
    }
}
export const deleteTask = (id) => {
    return {
        type: Types.DELETE_TODO,
        id
    }
}
export const deleteAll = () => {
    return {
        type: Types.DELETE_ALL,
    }
}
export const makeAllDone = () => {
    return {
        type: Types.MAKE_ALL_DONE,
    }
}
export const undoTask = (id) => {
    return {
        type: Types.UNDO_TODO,
        id
    }
}
export const search = (item) => {
    return {
        type: Types.SEARCH,
        item
    }
}
export const sort = (value) => {
    return {
        type: Types.SORT_BY_DEAD_LINE,
        sort : value
    }
}
export const importantTask = (id) => {
    return {
        type: Types.IMPORTANT_TASK,
        id
    }
}