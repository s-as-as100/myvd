import React from 'react'
import _ from 'lodash';
// Lodash is a JavaScript library which provides utility functions for common programming tasks. 
// It uses functional programming paradigm. ... Lodash helps programmers write more concise and 
// easier to maintain JavaScript code.
//  Lodash contains tools to simplify programming with strings, numbers, arrays, functions and objects.
const Pagination = props => {
    const {itemsCount, pageSize} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if( pagesCount=== 1) return null;
    
    const pages = _.range(1,pagesCount+1);
    return (
        <nav>
  <ul className="pagination">
      {pages.map(page =>( <li key={page} className="page-item">
        <a className="page-link" href="#">{page}</a>
        </li>))
}
    {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
     
  </ul>
</nav>
    )
}
 
export default Pagination;