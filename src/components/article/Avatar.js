import React from 'react'
import { Link } from 'react-router-dom'

const Avatar = (props) => {
  return (
    <div className="avatar float-left mr-4">
      <Link to="/">
        <div className="user-img d-flex align-items-center rounded-circle bg-warning"
             style={{width: "50px", height: "50px"}}>
          <span className="d-block mx-auto">{props.initial}</span>
        </div>
      </Link>
    </div>
  )
}

export default Avatar
