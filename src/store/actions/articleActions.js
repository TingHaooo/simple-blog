import { CREATE_ARTICLE, CREATE_ARTICLE_ERROR } from './actionTypes';
import axios from 'axios';

export const makeArticle = article => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var storage = firebase.storage();
    // var filePathReference = storage.ref(article.filePath);
    // fetch article file from firebase storage
    axios.get(article.fileUrl).then(res => res.data).then(file => {
      // add ariticle to filrebase
      firestore.collection('articles').add({
        title :article.title,
        label: article.label,
        img: article.img,
        summary: article.summary,
        file: file,
        createAt: new Date()
      })
      .then(() => {
        dispatch({type: CREATE_ARTICLE, article})
      })
      .catch(err => {
        dispatch({type: CREATE_ARTICLE_ERROR, err})
      })
    })
  }
}
