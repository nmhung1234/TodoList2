import { combineReducers } from 'redux';
import todoItems from './todoItems';
import doneTasks from './doneTasks';
import search from './search';
const myReducer = combineReducers({
    todoItems,
    doneTasks,
    search
});

export default myReducer