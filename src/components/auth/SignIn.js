import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { signIn } = this.props;
    e.preventDefault();
    signIn(this.state);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { error, auth} = this.props
    if (auth.uid) return <Redirect to="/"/>
    return (
      <div className="container Signin mt-3">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3 className="text-center">Sign in</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label frohtml="email">Email</label>
                <input onChange={this.handleChange} id="email" className="form-control" type="email" placeholder="Please input your email" required/>
              </div>
              <div className="form-group">
                <label frohtml="password">Password</label>
                <input onChange={this.handleChange} id="password" className="form-control" type="password" placeholder="Please input your password" required/>
              </div>
              <div className="row d-flex justify-content-center">
                  <button className="btn btn-primary">Sign in</button>
              </div>
            </form>
            <p className="error-text text-danger mt-3">{error}</p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => {dispatch(signIn(credentials))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
