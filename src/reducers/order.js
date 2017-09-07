/**
 * @Author: hully
 * @Date:   2017-09-07 16:14:03
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 19:02:46
 */

"use strict";

const order = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      if(state.book.id !== action.book.id) {
        return state;
      }
      return Object.assign({}, state, {nums: action.nums});
    case 'REDUCE_ORDER':
      if(state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {nums: state.nums--});
    default:
        return state;
  }
}

export default order;
