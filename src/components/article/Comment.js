import React from 'react'
import Avatar from './Avatar'
import moment from 'moment'

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment py-3 border-top clearfix">
      <Avatar initial={comment.initial}/>
      <div className="comment-body float-left">
        <h4 className="comment-tile">{comment.title}</h4>
        <div className="user-name text-black-50">{`${comment.authorFirstName} ${comment.authorLastName}`}</div>
        <div className="date text-black-50">{moment(comment.createAt.toDate()).format('llll')}</div>
        <div className="comment-content pt-3 border-button text-secondary">{comment.content}</div>
      </div>
    </div>
  )
}

export default Comment
