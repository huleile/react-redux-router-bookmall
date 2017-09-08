/**
 * @Author: hully
 * @Date:   2017-09-07 10:13:56
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 11:13:50
 */

"use strict";
import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  render() {
    let {book} = this.props;
    console.log("components card: ", book);
    console.log(book.id , book.name);
    return (
      <div className="book_card">
        <div className="card_img">
          <Link to={`/book/${book.id}`}>
            <img src="/src/public/images/rd.png" alt={book.name} />
          </Link>
        </div>
        <div className="card_text">
          <div className="card_name"><Link to={`/book/${book.id}`}>{book.name}</Link></div>
          <div className="card_store">{book.store}</div>
          <div className="card_price">
            <span className="card_now_price">￥{book.nowPrice}</span>
            <span className="card_ori_price">￥{book.oriPrice}</span>
          </div>
        </div>
      </div>
    )
  }
}
