import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { signUp } = this.props;
    e.preventDefault();
    signUp(this.state);
    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    })
  }

  render() {
    const { error, auth} = this.props;
    if (auth.uid) return <Redirect to="/"/>
    return (
      <div className="container signup mt-3">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3 className="text-center">Sign up</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label frohtml="email">Email</label>
                <input onChange={this.handleChange} id="email" className="form-control" type="email" placeholder="Enter your email" required/>
              </div>
              <div className="form-group">
                <label frohtml="password">Password</label>
                <input onChange={this.handleChange} id="password" className="form-control" type="password" placeholder="Enter your password" required/>
              </div>
              <div className="form-group">
                <label frohtml="firstname">FirstName</label>
                <input onChange={this.handleChange} id="firstName" className="form-control" type="text" placeholder="Enter your firstname" required/>
              </div>
              <div className="form-group">
                <label frohtml="lastname">LastName</label>
                <input onChange={this.handleChange} id="lastName" className="form-control" type="text" placeholder="Enter your lastname" required/>
              </div>
              <div className="row d-flex justify-content-center">
                <button className="btn btn-primary">Sign up</button>
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
    signUp: (credentials) => {dispatch(signUp(credentials))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
