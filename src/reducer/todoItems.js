import * as types from './../constants/actionTypes';
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
async function confirmMakeAllDone() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    await swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            var rs = result.isConfirmed;
            console.log(rs);
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            return rs
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
            console.log(rs = false);
            return rs
        }
    })

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
                    complete: Action.task.complete,
                    time: Action.task.time
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
        case types.MAKE_ALL_DONE: {
            let newState = [...state];
            // Swal.fire({
            //     title: 'Are you sure?',
            //     text: "You won't be able to revert this!",
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Yes, delete it!'
            // }).then(async (result) => {
            //     if (result.isConfirmed) {
            //         await Swal.fire(
            //             'Deleted!',
            //             'Your file has been deleted.',
            //             'success'
            //         );
            //         newState.map(item => {
            //             return item.complete = true;
            //         })
            //         await localStorage.setItem('data', JSON.stringify(newState));
            //         return newState
            //     }
            // })
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
        default: {
            let newState = [...state];
            // console.log(newState);
            return newState
        }

    }
}
export default myReducer