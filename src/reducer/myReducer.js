import { combineReducers } from 'redux';
import todoItems from './todoItems';
import doneTasks from './doneTasks';
import search from './search';
import editTask from './editTask';

const myReducer = combineReducers({
    todoItems,
    doneTasks,
    search,
    editTask,
});

export default myReducer