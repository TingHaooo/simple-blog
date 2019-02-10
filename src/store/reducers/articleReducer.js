import { CREATE_ARTICLE, CREATE_ARTICLE_ERROR } from '../actions/actionTypes';

const initState = {};

const articleReducer = (state=initState, action) => {
  switch(action.type) {
    case CREATE_ARTICLE:
      console.log(action.article);
      return state;

    case CREATE_ARTICLE_ERROR:
      console.log(action.err);
      return state;

    default:
      return state;
  }
}

export default articleReducer;
