/**
 * @Author: hully
 * @Date:   2017-09-07 10:34:18
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 13:57:08
 */

"use strict";
import {connect} from 'react-redux';
import Books from '../components/books';


const mapStatetoProps = (state) => {
  return {
    books: state.books
  }
}


export default connect(mapStatetoProps)(Books);
