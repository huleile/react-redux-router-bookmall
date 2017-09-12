/**
 * @Author: hully
 * @Date:   2017-09-12 12:06:27
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 16:34:50
 */

"use strict";
import {connect} from 'react-redux';
import Users from '../components/users';
import {GetUsers} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(GetUsers())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
