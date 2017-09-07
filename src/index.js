/**
 * @Author: hully
 * @Date:   2017-09-06 10:06:55
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 14:03:08
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import Root from './routes';
import Reducers from './reducers/index';
import "./public/styles/style.less";

const store = createStore(Reducers);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
