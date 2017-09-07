/**
 * @Author: hully
 * @Date:   2017-09-06 14:22:54
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 19:03:11
 */

"use strict";
let nextBook = 0;


const AddBook = (book) => {
  return {
    type: "ADD_BOOK",
    book: Object.assign({}, book, {id: nextBook++})
  }
};

const AddOrder = (book, nums) => {
  return {
    type: "ADD_ORDER",
    book,
    nums
  }
};

const RemoveBook = (id) => {
  return {
    type: "REMOVE_BOOK",
    id
  }
};

const ReduceOrder = (id) => {
  return {
    type: "REDUCE_ORDER",
    id
  }
}

const RemoveOrder = (id) => {
  return {
    type: "REMOVE_ORDER",
    id
  }
};

const UpdateBook = (id, newbook) => {
  return {
    type: "UPDATE_BOOK",
    id,
    newbook
  }
};


export {AddBook, AddOrder, RemoveBook, RemoveOrder, ReduceOrder, UpdateBook};
