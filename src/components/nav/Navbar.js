import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const links = props.auth.uid ? <SignedInLink /> : <SignedOutLink />
  return (
    <nav className="navbar navbar-light navbar-expand">
      <div className="container">
        <Link to="/" className="navbar-brand">Ting-Hao-Blog</Link>
          { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
