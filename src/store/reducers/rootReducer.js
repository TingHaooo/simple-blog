import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import commentReducer from './commentReducer'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
  article: articleReducer,
  auth: authReducer,
  comment: commentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default RootReducer
