/**
 * @Author: hully
 * @Date:   2017-09-06 16:01:09
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 16:53:07
 */

"use strict";
import book from './book';

const books = (state=[], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, book(undefined, action)];
    case "UPDATE_BOOK":
      return state.map(s => book(s, action));
    case "REMOVE_BOOK":
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}

export default books;
