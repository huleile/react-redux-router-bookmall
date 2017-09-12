/**
 * @Author: hully
 * @Date:   2017-09-06 14:22:54
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 17:12:18
 */

"use strict";
import axios from '../config/axios';
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

const GetUsers = () => (dispatch) => {
  axios.get('/users')
    .then(res => {
      let code = res.data.code;
      dispatch({
        type: "GET_USERS",
        code,
        users: code == 200 ? res.data.data : []
      })
    })
    .catch(err => {
      console.log(err);
    })
}


export {AddBook, AddOrder, RemoveBook, RemoveOrder, ReduceOrder, UpdateBook, GetUsers};
