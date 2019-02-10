import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actionTypes'
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './actionTypes'
import { LOG_OUT } from './actionTypes'

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: SIGN_IN_SUCCESS})
    }).catch((err) => {
      dispatch({type: SIGN_IN_ERROR, err})
    })
  }
}

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() =>
      dispatch({type: LOG_OUT})
    )
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initial: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({type: SIGN_UP_SUCCESS})
    }).catch(err => {
      dispatch({type: SIGN_UP_ERROR, err})
    })
  }
}
