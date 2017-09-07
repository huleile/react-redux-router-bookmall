/**
 * @Author: hully
 * @Date:   2017-09-06 15:09:59
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 15:51:39
 */

"use strict";
import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <div className="bm_lefter">
        <div className="left_menu_item"><Link to="/">主页</Link></div>
        <div className="left_menu_item"><Link to="/books">图书列表</Link></div>
        <div className="left_menu_item"><Link to="/bookman">图书管理</Link></div>
        <div className="left_menu_item"><Link to="/orders">我的书库</Link></div>
      </div>
    )
  }
}
