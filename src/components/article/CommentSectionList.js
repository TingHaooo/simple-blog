import React from 'react'
import CommentSection from './CommentSection'

const CommentSectionList = (props) => {
  const { comments, articleId } = props;
  console.log(comments);
  const commentSectionList = comments && comments.map(comment => {
    return (
      <CommentSection articleId={articleId} comment={comment} key={comment.id}/>
    )
  });
  return (
    <div className="commentSectionList">
      {commentSectionList}
    </div>
  )
}

export default (CommentSectionList)
