/**
 * @Author: hully
 * @Date:   2017-09-07 13:15:10
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 14:52:41
 */
"use strict";
import React from 'react';
import Order from './order';

export default class extends React.Component {
  render() {
    let {orders} = this.props;
    return (
      <div className="order_list">
        {
          orders.map(o => {
            return (
              <Order key={o.id} order={o}/>
            )
          })
        }
      </div>
    )
  }
}
