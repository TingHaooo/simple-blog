import React, { Component } from 'react';
import PageItem from './PageItem'
import { Link } from 'react-router-dom'

class Pagination extends Component {

  createPageItem() {
    const { numberOfPages, currentPage } = this.props;
    var pageList = [];
    for (let i = 0; i < numberOfPages; i++) {
      pageList.push(<PageItem page={i + 1} current={(i + 1) === currentPage} key={i}/>)
    }
    return pageList
  }

  render() {
    const { numberOfPages, currentPage} = this.props;
    return (
      <nav aria-label="Page" className="w-100 d-flex justify-content-center mt-4">
        <ul className="pagination">
          {/* if page equals one -> previous disabled */}
          <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
            <Link className="page-link" to={"/homepage/" + (currentPage - 1)}>Previous</Link>
          </li>
          { numberOfPages && this.createPageItem()}
          {/* {if page equals numberOfPages -> next disabled} */}
          <li className={"page-item " + (currentPage === numberOfPages ? "disabled" : "")}>
            <Link className="page-link" to={"/homepage/" + (currentPage + 1)}>Next</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
