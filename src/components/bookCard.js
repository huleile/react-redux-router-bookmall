/**
 * @Author: hully
 * @Date:   2017-09-07 10:13:56
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 18:46:54
 */

"use strict";
import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  render() {
    let {book} = this.props;
    return (
      <div className="book_card">
        <div className="card_img">
          <Link to="/detail">
            <img src="" alt={book.name} />
          </Link>
        </div>
        <div className="card_name"><Link to="/detail">{book.name}</Link></div>
        <div className="card_store">{book.store}</div>
        <div className="card_price">
          <span className="card_now_price">{book.nowPrice}</span>
          <span className="card_ori_price">{book.oriPrice}</span>
        </div>
      </div>
    )
  }
}
