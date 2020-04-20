import * as firebase from 'firebase'

const config = {

    apiKey: "AIzaSyCyRx3MsynbZW67NT6wh6LkZt2UakKdJnk",
    authDomain: "expensify-alpha-app.firebaseapp.com",
    databaseURL: "https://expensify-alpha-app.firebaseio.com",
    projectId: "expensify-alpha-app",
    storageBucket: "expensify-alpha-app.appspot.com",
    messagingSenderId: "896235756459",
    appId: "1:896235756459:web:12c00bc60142f2df5d90ee"
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }