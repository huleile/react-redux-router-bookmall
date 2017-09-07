/**
 * @Author: hully
 * @Date:   2017-09-07 11:17:23
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 13:14:55
 */

"use strict";
import React from 'react';

export default class extends React.Component {
  render() {
    let {order} = this.props;
    return (
      <div className="order_card">
        <span className="order_img">
          <img src="" alt={order.name} />
        </span>
        <span className="order_name">{order.name}</span>
        <span className="order_price">{order.price}</span>
        <span className="order_nums">{order.nums}</span>
      </div>
    )
  }
}
