import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const SignedInLink = (props) => {
  return (
    <ul className="signed-in-link navbar-nav ml-auto">
      <li className="nav-item d-flex align-items-center">
        <a href="/" className="nav-link" onClick={props.logout}>Log out</a>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link btn btn-warning rounded-circle">
          <div className="user-img d-flex align-items-center rounded-circle bg-warning"
               style={{width: "30px", height: "30px"}}>
            <span className="d-block mx-auto">{props.profile.initial}</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {dispatch(logOut())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink)
