import React from 'react'
import _ from 'lodash';
import propTypes from 'prop-types'; // caches the bug using the PropTypes 
// Lodash is a JavaScript library which provides utility functions for common programming tasks. 
// It uses functional programming paradigm. ... Lodash helps programmers write more concise and 
// easier to maintain JavaScript code.
//  Lodash contains tools to simplify programming with strings, numbers, arrays, functions and objects.
const Pagination = props => {  // type checking requirement of this function
    const {itemsCount, pageSize,onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if( pagesCount=== 1) return null;
    
    const pages = _.range(1,pagesCount+1);
    return (
        <nav>
  <ul className="pagination">
      {pages.map(page =>( <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
        <a className="page-link" onClick = {() =>  onPageChange(page)}>{page}</a>
        </li>))
}
    {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
     
  </ul>
</nav>
    )
}

Pagination.propTypes = {
itemsCount:propTypes.number.isRequired,
pageSize:propTypes.number.isRequired,
currentPage:propTypes.number.isRequired,
onPageChange:propTypes.func.isRequired
}
// PropTypes exports a range of validators that can be used 
// to make sure the data you receive is valid. In this example,
//  we’re using PropTypes.string. When an invalid value is provided for a prop, 
//  a warning will be shown in the JavaScript console. 
//  For performance reasons, propTypes is only checked in development mode.


 

export default Pagination;