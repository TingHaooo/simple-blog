import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Notification from './Notification'
import Profile from './Profile'
import ArticleSummary from './ArticleSummary'
import Pagination from './Pagination'
import Loader from 'react-loader-spinner'

class HomePage extends Component {

  divideToPages = (articles, n) => {
    var articlePages = [];
    if (articles) {
      for (let i = 0; i < articles.length; i += n) {
        articlePages.push(articles.slice(i, i + n))
      }
    }
    return articlePages
  }

  render() {
    const { notifications, articles} = this.props;
    let articleSummaryList;
    let numberOfArticlePages;
    let currentPage;
    // if article is not empty
    if (articles) {
      // create article pages
      const articlePages = this.divideToPages(articles, 2);
      // get number of article pages
      numberOfArticlePages = articlePages.length;
      // get params
      const matchPage = parseInt(this.props.match.params.page);
      // route "/" rener page 1
      currentPage = matchPage ? matchPage  : 1;
      // get articlepage
      const articlePage = articlePages[currentPage - 1];
      // create article summary list
      articleSummaryList = articlePage.map(article => {
        return (
          <ArticleSummary article={article} key={article.id}/>
        )
      })
    }

    return (notifications && articles) ?
    (
      <div className="homepage pb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-4 container">
              <Profile />
              <Notification notifications={notifications}/>
            </div>
            <div className="col-12 col-md-7">
              {articleSummaryList}
              {<Pagination numberOfPages={numberOfArticlePages} currentPage={currentPage}/>}
            </div>
          </div>
        </div>
      </div>
    )
    :
    (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
        <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
       />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    articles: state.firestore.data.articles && state.firestore.ordered.articles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
  { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  { collection: 'articles', orderBy: ['createAt', 'desc'] }]))
  (HomePage)
