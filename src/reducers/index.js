/**
 * @Author: hully
 * @Date:   2017-09-06 15:58:24
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-10 14:15:27
 */

"use strict";
import {combineReducers} from "redux";
import books from './books';
import orders from './orders';
import users from './users';

const Reducers = combineReducers({
  books,
  orders,
  users
});

export default Reducers;
