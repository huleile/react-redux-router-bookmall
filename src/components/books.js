/**
 * @Author: hully
 * @Date:   2017-09-07 10:24:36
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 10:30:51
 */

"use strict";

import React from 'react';
import Book from './bookCard';

export default class extends React.Component {
  render() {
    let {books} = this.props;
    return (
      <div className="book_list">
        {
          books.map(b => {
            return (
              <Book
                key={b.id}
                book={b}
              />
            )
          })
        }
      </div>
    )
  }
}
