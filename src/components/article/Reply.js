import React from 'react'
import Avatar from './Avatar'
import moment from 'moment'

const Reply = (props) => {
  const { reply } = props;
  return (
      <div className="reply row py-3 border-top">
        <Avatar initial={reply.initial}/>
        <div className="reply-body">
          <div className="user-name text-black-50">{`${reply.authorFirstName} ${reply.authorLastName}`}</div>
          <div className="date text-black-50">{moment(reply.createAt.toDate()).format('llll')}</div>
          <div className="reply-content pt-3 border-button text-secondary">{reply.content}</div>
        </div>
      </div>
  )
}

export default Reply
