import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import placeholder from '../../static/placeholder.png'

class ArticleSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgOnLoad: false
    }
  }

  loadImage = () => {
    this.setState({
      imgOnLoad: true
    })
  }

  render() {
    const { article } = this.props;
    const { imgOnLoad } = this.state;
    return (
        <div className="post-summary mt-3 container">
          <Link to={`/article/${article.id}`}>
            <div className="card bg-white border">
              <div className="summary-img position-relative">
                {imgOnLoad || <img src={placeholder} alt="" className="img-fluid" />}
                <img src={article.img} alt="" className="img-fluid" onLoad={this.loadImage}/>
              </div>
              <div className="card-body">
                <p className="date text-black-50">{moment(article.createAt.toDate()).format('llll')}</p>
                <h4 className="card-title">{article.title}</h4>
                <p className="card-text text-black-50">{article.summary}</p>
              </div>
            </div>
          </Link>
        </div>
    )
  }
}

export default ArticleSummary
