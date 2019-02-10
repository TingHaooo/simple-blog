import {
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  REPLY_COMMENT,
  REPLY_COMMENT_ERROR ,
  FETCH_COMMENT,
  FETCH_COMMENT_ERROR
} from './actionTypes'

export const makeComment = comment => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const state = getState();
    const { title, content, articleId } = comment;
    // Find the document by articleId and create comments Collections
    firestore
      .collection('articles')
      .doc(articleId)
      .collection('comments')
      .add({
          title: title,
          content: content,
          authorFirstName: state.firebase.profile.firstName,
          authorLastName: state.firebase.profile.lastName,
          initial: state.firebase.profile.initial,
          createAt: new Date(),
          replies: []
      })
      .then(() => {
        dispatch({type: CREATE_COMMENT, comment})
      })
      .catch(err => {
        dispatch({type: CREATE_COMMENT_ERROR, err})
      })
    }
}

export const fetchComment = articleId => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const state = getState();
    // Find comments by articleId
    firestore
      .collection('articles')
      .doc(articleId)
      .collection('comments')
      .orderBy('createAt', 'desc')
      .onSnapshot((querySnapshot) => {
        let comments = [];
        querySnapshot.forEach(function(doc) {
            comments.push({...doc.data(), id: doc.id});
        });
        dispatch({type: FETCH_COMMENT, comments})
      })
  }
}

export const replyComment = replyCommentInfo => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // Get info from paramater
    const { articleId, commentId, content } = replyCommentInfo;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const state = getState();
    // Find replies array by article and comments id
    firestore
      .collection('articles')
      .doc(articleId)
      .collection('comments')
      .doc(commentId)
      // Update reply to array
      .update({
        replies: firebase.firestore.FieldValue.arrayUnion({
          content: content,
          authorFirstName: state.firebase.profile.firstName,
          authorLastName: state.firebase.profile.lastName,
          initial: state.firebase.profile.initial,
          createAt: new Date()
        })
      })
      .then(() => {
        dispatch({type: REPLY_COMMENT, replyComment})
      })
      .catch(err => {
        dispatch({type: REPLY_COMMENT_ERROR, err})
      })
  }
}
