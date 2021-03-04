import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTvHpCSAwQMtsJGyHItdWaTzA8JWZGoK4",
    authDomain: "todoapp-91483.firebaseapp.com",
    projectId: "todoapp-91483",
    storageBucket: "todoapp-91483.appspot.com",
    messagingSenderId: "253485291736",
    appId: "1:253485291736:web:60d9aeea29f75a8cca5fad",
    measurementId: "G-TD0S1FJ75V"
  };

const fire = firebase.initializeApp(config);
export default fire