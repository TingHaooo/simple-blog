import React from 'react'
import Comment from './Comment'
import Reply from './Reply'
import ReplyComment from './ReplyComment'

const CommentSection = (props) => {
  const { comment, articleId } = props;
  const replyList = comment.replies.map((reply, index) => {
    return (
      <Reply reply={reply} key={index}/>
    )
  });
  return  (
    <div className="comment-section mt-5">
      <Comment comment={comment} />
      <div className="pl-5">
        {replyList}
        <ReplyComment articleId={articleId} commentId={comment.id}/>
      </div>
    </div>
  )
}

export default CommentSection
