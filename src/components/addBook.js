/**
 * @Author: hully
 * @Date:   2017-09-07 09:55:18
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 09:20:28
 */

"use strict";
import React from 'react';
import {AddBook} from '../actions/index';

const items = [
  {name: "书名", col: "name"},
  {name: "书店", col: "store"},
  {name: "现价", col: "nowPrice"},
  {name: "原价", col: "oriPrice"},
  {name: "作者", col: "author"}
]

export default class extends React.Component {

  render() {
    let {dispatch} = this.props;

    const getFormData = () => {
        let book = {};
        for(let i of items) {
          let value = this[i.col].value.trim();
          book[i.col] = value ? value : "";
        }
        return book;
    };

    const clearFormData = () => {
      for(let i of items) {
        this[i.col].value = "";
      }
    };

    return (
      <div className = "container book_form">
        <form onSubmit = {
          e => {
            e.preventDefault();
            dispatch(AddBook(getFormData()));
            clearFormData();
            alert("添加图书成功");
          }
        }>
          {
            items.map(i => {
              return (
                <div key={i.col} className = "form_row">
                    <span className = "form_span">{`${i.name}:`}</span>
                    <input type="text"
                      ref={ node => {
                        this[i.col] = node
                      }}
                      placeholder={i.name} />
                </div>
              )
            })
          }
          <button type="submit">添加</button>
          <button type="cancel">取消</button>
        </form>
      </div>
    )
  }
}
