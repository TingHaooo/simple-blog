import React from 'react'
import moment from 'moment'

const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className="notification d-none d-md-block">
      <h5 className="text-center mt-5 h6 ml-1">Notification</h5>
      <ul className="list-group list-group-flush">
        { notifications && notifications.map(item => {
          return (
            <li className="list-group-item border-none text-center" key={item.id}>
              <span className="text-primary">{item.user}</span>
              <span> {item.content}</span>
              <div className="text-muted">{moment(item.time.toDate()).fromNow()}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Notification;
