/**
 * @Author: hully
 * @Date:   2017-09-06 15:05:48
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 12:20:01
 */
"use strict";
import React from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Welcome from './components/welcome';
import Root from './components/root';
import AddBook from './containers/addBook';
import Books from './containers/books';
import Orders from './containers/orders';
import BookDetail from './containers/addOrder';
import Users from './containers/users';


export default class extends React.Component {
  render() {
    let {store} = this.props;
    return (
      <Provider store = {store}>
        <Router>
          <Root>
            <Route exact path="/" component={Welcome}/>
            <Route path="/books" component={Books}/>
            <Route path="/bookman" component={AddBook}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/book/:id" component={BookDetail}/>
            <Route path="/axios" component={Users}/>
          </Root>
        </Router>
      </Provider>
    )
  }
}
