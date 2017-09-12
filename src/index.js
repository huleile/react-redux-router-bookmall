/**
 * @Author: hully
 * @Date:   2017-09-06 10:06:55
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 16:29:29
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import Root from './routes';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';
import "./public/styles/style.less";

const middleware = [thunk];

const store = createStore(Reducers, applyMiddleware(...middleware));

store.subscribe(()=>{
  console.log(store.getState());
})

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
