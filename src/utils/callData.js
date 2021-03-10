import fire from './../config/fire';

let uid = JSON.parse(localStorage.getItem('uid'));
let db = fire.firestore().collection('tasks');

export function getDataID(uid) {
    return (
        db.where('id', "==", `${uid}`).get()
            .catch((err) => {
                console.log(err);
            })
    )
}

export function getDataAll() {
    return (
        db.get()
            .catch((err) => {
                console.log(err);
            })
    )
}


export function addData(task) {
    return (
        db.add({ task })
            .catch((err) => {
                console.log(err);
            })
    )
}

export function deleteTask(idTask) {
    return (
        db.doc(idTask).delete()
            .catch((err) => {
                console.log(err);
            })
    )

}

