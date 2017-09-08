/**
 * @Author: hully
 * @Date:   2017-09-07 10:24:36
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 10:46:17
 */

"use strict";

import React from 'react';
import Book from './bookCard';

export default class extends React.Component {
  render() {
    let {books} = this.props;
    return (
      <div className="container">
        <div className="book_list">
          {
            books.length ?
            books.map((b, k) => {
              return (
                <Book
                  key = {k}
                  book = {b.book}
                />
              )
            })
            : "空空如也"
          }
        </div>
      </div>
    )
  }
}
