import { firebase, googleAuthProvider } from '../firebase/firebase'


export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const signOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}