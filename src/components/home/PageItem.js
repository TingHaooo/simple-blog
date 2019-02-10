import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageItem extends Component {

  render() {
    const {page, current} = this.props;
    return current ?
      (
        <li className="page-item active">
          <span className="page-link">
            {page}
            <span className="sr-only">(current)</span>
          </span>
        </li>
      ):
      (
      <li className="page-item">
        <Link className="page-link" to={"/homepage/" + page}>{page}</Link>
      </li>
      )
  }
}

export default PageItem;
