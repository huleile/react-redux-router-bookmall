/**
 * @Author: hully
 * @Date:   2017-09-07 17:19:28
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-10 13:17:11
 */

"use strict";
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums : 1
    }
  }

  onClickPickerHandle(p) {
    if(p) {
      this.setState({nums: this.state.nums++});
    }else {
      let nums = 1;
      if(this.state.nums > 1) nums = this.state.nums--;
      this.setState({nums});
    }
  }

  getBookById(books, id) {
    let fbs = books.filter(b => {
      return b.book.id == id;
    });
    return fbs.length ? fbs[0].book : {}
  }

  render() {
    let {onAddOrderClick, books, match} = this.props;
    let bid = match.params.id;

    const book = this.getBookById(books, bid);
    return (
      <div className="container">
        <div className="book_detail">
          <div className="book_detail_img">
            <img src="/src/public/images/rd.png" alt={book.name}/>
          </div>
          <div className="book_detail_content">
            <div className="book_detail_text">
              <div className="book_detail_name">{book.name}</div>
              <div className="book_detail_author">{book.author}</div>
              <div className="book_detail_store">{book.store}</div>
              <div className="book_detail_price">
                <span className="book_detail_price_now">￥{book.nowPrice}</span>
                <span className="book_detail_price_origin">￥{book.oriPrice}</span>
              </div>
            </div>

            <div className="book_detail_button">
              <span className="button_picker">
                <span className="button_picker_btn"
                    style = {{disable: this.state.nums ? false : true}}
                    onClick = { e => {
                      e.preventDefault();
                      this.onClickPickerHandle(false);
                    }}
                  >-</span>
                <span className="button_picker_cnt">{this.state.nums}</span>
                <span className="button_picker_btn"
                  onClick = { e => {
                    e.preventDefault();
                    this.onClickPickerHandle(true);
                  }}
                 >+</span>
              </span>
              <span className="btn_add_order"><button onClick={
                e => {
                  e.preventDefault();
                  onAddOrderClick(book, this.state.nums);
                  this.props.history.push('/orders');
                }
              }>加入书库</button></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
