import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeArticle } from '../../store/actions/articleActions'

class CreateArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      img: '',
      label: '',
      summary: '',
      fileUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { makeArticle } = this.props;
    e.preventDefault();
    makeArticle(this.state);
    //setState to initial
    this.setState({
      title: '',
      img: '',
      label: '',
      summary: '',
      fileUrl: ''
    });
  }

  render() {
    const { title, summary, label, img, fileUrl} = this.state;
    const { auth } = this.props;
    return (
      <div className="make-comment mt-3 container">
        <h3 className="h3">Create Article</h3>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label frohtml="title">Title</label>
            <input onChange={this.handleChange} id="title" className="form-control" type="text" value={title} required/>
          </div>
          <div className="form-group">
            <label frohtml="summary">Summary</label>
            <input onChange={this.handleChange} id="summary" className="form-control" type="text" value={summary} required/>
          </div>
          <div className="form-group">
            <label frohtml="label">Label</label>
            <input onChange={this.handleChange} id="label" className="form-control" type="text" value={label} required/>
          </div>
          <div className="form-group">
            <label frohtml="img">Img</label>
            <input onChange={this.handleChange} id="img" className="form-control" type="url" value={img} required/>
          </div>
          <div className="form-group">
            <label frohtml="fileUrl">File Url</label>
            <input onChange={this.handleChange} id="fileUrl" className="form-control" type="url" value={fileUrl} required/>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary">POST</button>
          </div>
        </form>
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
    makeArticle: (article) => { dispatch(makeArticle(article)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
