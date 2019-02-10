import {
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  REPLY_COMMENT,
  REPLY_COMMENT_ERROR,
  FETCH_COMMENT,
  FETCH_COMMENT_ERROR
} from '../actions/actionTypes'

const initState = {}

const commentReducer = (state = initState, action) => {
  switch (action.type) {

    case FETCH_COMMENT:
      console.log(action.comments);
      return {
        comments: [...action.comments]
      }

    case CREATE_COMMENT:
      console.log(action.comment);
      return state;

    case CREATE_COMMENT_ERROR:
      console.log(action.err);
      return state;

    case REPLY_COMMENT:
      console.log(action.replyComment);
      return state;

    case REPLY_COMMENT_ERROR:
      console.log(action.err);
      return state;

    default:
      return state;
  }
}

export default commentReducer
