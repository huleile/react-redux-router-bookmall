/**
 * @Author: hully
 * @Date:   2017-09-07 09:29:34
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 16:51:23
 */

"use strict";

const book = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        book: action.book
      }
    case "UPDATE_BOOK":
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, action.newbook);
    default:
      return state;
  }
}

export default book;
