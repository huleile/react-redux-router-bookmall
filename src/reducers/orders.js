/**
 * @Author: hully
 * @Date:   2017-09-07 16:22:17
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 15:58:11
 */

"use strict";
import order from './order';
import _ from 'lodash';

let nextOrder = 0;
const orders = (state=[], action) => {
  switch (action.type) {
    case "ADD_ORDER":
      let inOrder = state.filter(s => s.book.id == action.book.id);
      if (!inOrder.length) {
        return [...state, {id: nextOrder++, book: action.book, nums: action.nums}];
      }
      return state.map(s => order(s, action));
    case "REDUCE_ORDER":
      return state.map(s => order(s, action));
    case "REMOVE_ORDER":
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}

export default orders;
