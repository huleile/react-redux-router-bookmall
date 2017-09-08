/**
 * @Author: hully
 * @Date:   2017-09-07 17:15:28
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 12:28:14
 */

"use strict";
import {connect} from 'react-redux';
import BookDetail from '../components/bookDetail';
import {AddOrder} from '../actions/index';


const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddOrderClick: (book, nums) => {
      dispatch(AddOrder(book, nums));
    }
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
