/**
 * @Author: hully
 * @Date:   2017-09-07 13:15:10
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 16:15:20
 */
"use strict";
import React from 'react';
import Order from './order';

export default class extends React.Component {
  render() {
    let {orders} = this.props;
    return (
      <div className="container">
        <div className="order_list">
          <div className="order_title">
            <span className="order_card_img_name">图书信息</span>
            <span className="order_card_price">单价</span>
            <span className="order_card_nums">收藏数量</span>
            <span className="order_card_count">总价值</span>
          </div>
          {
            orders.length ?
            orders.map((o, index) => {
              return (
                <Order key={index} order={o}/>
              )
            })
            : ()=> {return(<div>快去收藏书籍吧~~~~ 书是人类进步的阶梯</div>)}
          }
        </div>
      </div>
    )
  }
}
