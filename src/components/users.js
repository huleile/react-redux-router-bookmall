/**
 * @Author: hully
 * @Date:   2017-09-10 13:19:54
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 17:25:20
 */

"use strict";
import React from 'react';
import CONFIG from '../config/config';
const server = CONFIG.server;

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let {users} = this.props;
    return (
      <div className="container">
        {
          users ?
          users.map((u,index) => {
            return (
              <div key={index}>
                <div>{u.nickName}</div>
                <div>{u.phone}</div>
                <div>{u.sex ? '女' : '男'}</div>
                <div>{u.desc}</div>
                <div>{u.city}</div>
                <div><img src={`${server.host}:${server.port}${u.avatar}`} alt={u.nickName}/></div>
              </div>
            )
          })
          : "学生呢？？？您晓得不"
        }
      </div>

    )
  }
}
