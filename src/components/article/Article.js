import React from 'react'
import MakeComment from './MakeComment'
import CommentSectionList from './CommentSectionList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { fetchComment } from '../../store/actions/commentActions'
import marked from 'marked';
import hljs from 'highlight.js';
import Loader from 'react-loader-spinner'
import placeholder from '../../static/placeholder.png'

class Article extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      imgOnLoad: false
    }
  }

  componentDidMount () {
    console.log('hi');
    const { fetchComment } = this.props;
    const articleId = this.props.match.params.id;
    fetchComment(articleId);
  }

  getMarkdownText = () => {
    const { article } = this.props;
    // Synchronous highlighting with highlight.js
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
    var rawMarkup = marked(article.file, {sanitize: true});

    return { __html: rawMarkup };
  }

  render() {
    const { article, comments} = this.props;
    const articleId = this.props.match.params.id;
    const { imgOnLoad } = this.state;
    return article ? (
      <div className="article-container container pb-5">
        <h1 className="text-center py-3">{article.title}</h1>
        <img src={article.img} alt="" className="img-fluid rounded"/>
        <div className="row mt-5">
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md-9">
            <div className="article" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
            <div className="comment-container container mt-5">
              <h2 className="text-center pt-5">Comment</h2>
              <MakeComment articleId={articleId}/>
              <CommentSectionList articleId={articleId} comments={comments}/>
            </div>
          </div>
          <div className="col-0 col-md-1"></div>
        </div>
      </div>
    ):
    (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
        {/* <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
       /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, selfProps) => {
  // Get article from firestoreConnect
  const id = selfProps.match.params.id;
  const data = state.firestore.data;
  const ordered = state.firestore.ordered
  const article = data.articles && data.articles[id];
  // Get comments by execute fetchComment and store data to state
  const comments = state.comment.comments;
  return {
    article: article,
    comments: comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchComment: (articleId) => dispatch(fetchComment(articleId))
  })
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    {collection: 'articles'}
])
)(Article)
