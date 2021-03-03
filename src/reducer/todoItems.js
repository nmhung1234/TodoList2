import * as types from './../constants/actionTypes';
import animationdelete from './../image/animationdelete.gif'
import animationtrophy from './../image/trophy.gif'
import animationdance from './../image/dance.gif'
import Swal from 'sweetalert2'
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
            // console.log(Action.task);
            if (Action.task.id !== '') {
                let index = newState.findIndex(item => {
                    return item.id === Action.task.id
                })
                let name = Action.task.name.trim();
                if (!name) {
                    Swal.fire('Please enter your Todo');
                } else {
                    newState[index] = {
                        ...newState[index],
                        name: name,
                        deadline: Action.task.deadline,
                    }
                    localStorage.setItem('data', JSON.stringify(newState));
                    return newState;
                }
                return newState;
            } else {
                if (Action.task.name.trim() && Action.task.id === '') {
                    let task = {
                        id: idGenerator(),
                        name: Action.task.name,
                        complete: Action.task.complete,
                        timeadd: Action.task.timeadd,
                        deadline: Action.task.deadline,
                    }
                    newState.push(task);
                    Swal.fire({
                        title: 'Add todo Successfully',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(https://i.gifer.com/6ob.gif)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://i.gifer.com/PYh.gif")
                          left top
                          no-repeat
                        `
                    });
                    localStorage.setItem('data', JSON.stringify(newState));
                    return newState;
                } else {
                    Swal.fire('Please enter your Todo');
                }
                return newState;
            }
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
            Swal.fire({
                position: 'top-end',
                width: '15rem',
                icon: 'success',
                title: 'Delete Successfully',
                showConfirmButton: false,
                timer: 1200
            })
            let index = newState.findIndex(item => {
                return item.id === Action.id
            })
            newState.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(newState));
            return newState
        }
        case types.DELETE_ALL: {
            let newState = [...state];
            let deltaskDone = newState.filter(item => item.complete === false);
            let showAleart = newState.filter(item => item.complete === true);
            if (showAleart[0] === undefined) {
                Swal.fire({
                    title: 'Nothing to delete!',
                    text: 'Have a nice day!',
                    imageUrl: `${animationdelete}`,
                    imageWidth: 280,
                    imageHeight: 240
                })

            } else {
                Swal.fire({
                    position: 'top-end',
                    width: '20rem',
                    icon: 'success',
                    title: 'Little things make big days!',
                    showConfirmButton: false,
                    timer: 1700
                })
            };
            localStorage.setItem('data', JSON.stringify(deltaskDone));
            return deltaskDone
        }
        case types.MAKE_ALL_DONE: {
            let newState = [...state];
            let showAnimation = newState.filter(item => {
                return item.complete === false;
            })
            if (!showAnimation[0]) {
                Swal.fire({
                    title: 'Relax timeee',
                    text: 'No task today!',
                    imageUrl: `${animationdance}`,
                    imageWidth: 260,
                    imageHeight: 280
                })
            } else {
                Swal.fire({
                    title: 'Your Trophy',
                    text: 'A winner never stops trying',
                    imageUrl: `${animationtrophy}`,
                    imageWidth: 400,
                    imageHeight: 400
                })
            }

            newState.map(item => {
                return item.complete = true;
            })
            localStorage.setItem('data', JSON.stringify(newState));
            return newState
        }
        case types.UNDO_TODO: {
            let newState = [...state];
            let index = newState.findIndex(item => {
                return item.id === Action.id
            });
            newState[index] = {
                ...newState[index],
                complete: false
            }
            localStorage.setItem('data', JSON.stringify(newState));
            return newState
        }
        case types.SORT_BY_DEAD_LINE: {
            let newState = [...state];
            
            // add field for compare
            newState.map(task => {
                task.deadlinesort = task.deadline
                return null
            })
            // console.log(newState);
            if (Action.sort) {
                // convert deadline for compare
                var newarr = newState.map(task => {
                    let day = task.deadlinesort;
                    let dayarr = day.split('');
                    // console.log(dayarr);
                    let filter = dayarr.filter(letter => {
                        // console.log(letter);
                        return letter !== " "
                    })
                    filter = filter.filter(letter => {
                        // console.log(letter);
                        return letter !== "-"
                    })
                    filter = filter.filter(letter => {
                        // console.log(letter);
                        return letter !== ":"
                    })
                    // return filter.join('')
                    task.deadlinesort = filter.join('');
                    return task
                });
                // console.log(newarr);
                // sort as field dealinesort
                newarr.sort((a, b) => {
                    return a.deadlinesort - b.deadlinesort
                });
                // console.log(newarr);
                newState = newarr;
                // console.log(newState);
                return newState
            }
            else{
                return newState
            }

        }
        default: {
            let newState = [...state];
            return newState
        }

    }
}
export default myReducer