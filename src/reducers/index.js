/**
 * @Author: hully
 * @Date:   2017-09-06 15:58:24
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 17:13:26
 */

"use strict";
import {combineReducers} from "redux";
import books from './books';
import orders from './orders'

const Reducers = combineReducers({
  books,
  orders
});

export default Reducers;
