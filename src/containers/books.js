/**
 * @Author: hully
 * @Date:   2017-09-07 10:34:18
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 09:30:31
 */

"use strict";
import {connect} from 'react-redux';
import Books from '../components/books';


const mapStateToProps = (state) => {
  console.log("containers books: ", state);
  return {
    books: state.books
  }
}


export default connect(mapStateToProps)(Books);
