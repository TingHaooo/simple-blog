import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLink = (props) => {
  return (
    <ul className="signed-out-link navbar-nav ml-atuo">
      <li className="nav-item">
        <Link to="/signup" className="nav-link">Sign up</Link>
      </li>
      <li className="nav-item">
        <Link to="/signin" className="nav-link">Sign in</Link>
      </li>
    </ul>
  )
}

export default (SignedOutLink)
