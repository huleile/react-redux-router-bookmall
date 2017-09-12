/**
 * @Author: hully
 * @Date:   2017-09-10 17:53:15
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 12:03:43
 */

"use strict";
const axios = require('axios');

let ax = axios.create({
  baseURL: "http://localhost:3088"
})

ax.get('/users')
.then(res => {
  if(res.data.code == 200) {
    let users = res.data.data;
    console.log(users);
  }else {
    console.log(res.data.code);
  }
})
.catch(err => {
  console.log(err);
})
