import React, { Component } from 'react';
import { connect } from 'react-redux'
import { replyComment } from '../../store/actions/commentActions'
import { withRouter } from 'react-router'

class ReplyComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  commentButton = (e) => {
    const { auth } = this.props;
    auth.uid ? this.commentTrigger() : this.props.history.push('/signin');
  }

  commentTrigger = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { replyComment } = this.props;
    const { articleId, commentId } = this.props;
    e.preventDefault();
    replyComment({...this.state, articleId, commentId});
    this.setState({
      content: '',
      isOpen: false
    });
  }

  render() {
    const { isOpen, content } = this.state;
    const { auth } = this.props;
    return (
      <div className="reply-comment border-top py-3">
        <div className="d-flex justify-content-end">
        <button className="btn btn-secondary" onClick={this.commentButton}>
          {auth.uid ? 'Reply' : 'Sign in to make a reply'}
        </button>
        </div>
        {isOpen && (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label frohtml="content">Content</label>
            <textarea onChange={this.handleChange} rows="2" id="content" className="form-control" value={content} required></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary">POST</button>
          </div>
        </form>
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    replyComment: (replyCommentInfo) => { dispatch(replyComment(replyCommentInfo)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReplyComment));
