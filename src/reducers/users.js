/**
 * @Author: hully
 * @Date:   2017-09-10 14:11:25
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 17:14:50
 */

"use strict";

const users = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return [...action.users];
    default:
      return state;
  }
}

export default users;
