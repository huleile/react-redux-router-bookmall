/**
 * @Author: hully
 * @Date:   2017-09-07 17:19:28
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 08:58:39
 */

"use strict";
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums : 0
    }
  }

  render() {
    let {onAddOrderClick, book} = this.props;
    return (
      <div className="book_detail">
        <div className="book_detail_img">
          <img src="" alt={book.name}/>
        </div>
        <div className="book_detail_content">
          <div className="book_detail_name">{book.name}</div>
          <div className="book_detail_author">{book.author}</div>
          <div className="book_detail_store">{book.store}</div>
          <div className="book_detail_nowPrice">{book.nowPrice}</div>
          <div className="book_detail_oriPrice">{book.oriPrice}</div>
        </div>
        <div className="book_detail_button">
          <span className="button_picker">
            <span className="button_picker_btn">
                style={`disable: ${this.state.nums ? false : true}`}
                onClick={e => {e.preventDefault(); this.state.nums ? this.state.nums-- : 0}}
              >-</span>
            <span className="button_picker_cnt">{this.state.nums}</span>
            <span className="button_picker_btn"
               onClick={e=> {e.preventDefault(); this.state.nums--}}>-</span>
          </span>
          <span><button onClick={
            e => {
              e.preventDefault();
              onAddOrderClick(book, this.state.nums);
            }
          }>加入书库</button></span>
        </div>
      </div>
    )
  }
}
