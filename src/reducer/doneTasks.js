let data = JSON.parse(localStorage.getItem('data'));
let initialize = data ? data : [];

const myReducer = (state = initialize, Action) => {
    switch (Action.type) {
        default: {
            let newState = [...state];
            return newState
        }

    }
}
export default myReducer