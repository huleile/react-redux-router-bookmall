/**
 * @Author: hully
 * @Date:   2017-09-07 11:17:23
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 16:07:45
 */

"use strict";
import React from 'react';

export default class extends React.Component {
  render() {
    let {order} = this.props;
    const book = order.book;
    const count = parseInt(book.nowPrice) * parseInt(order.nums);
    return (
      <div className="order_card">
        <span className="order_img">
          <img src="/src/public/images/rd.png" alt={book.name} />
        </span>
        <span className="order_name">{book.name}</span>
        <span className="order_price">￥{book.nowPrice}</span>
        <span className="order_nums">{order.nums}</span>
        <span className="order_count">￥{count}</span>
      </div>
    )
  }
}
