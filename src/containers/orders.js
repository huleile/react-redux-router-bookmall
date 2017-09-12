/**
 * @Author: hully
 * @Date:   2017-09-08 09:46:46
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 12:20:38
 */

"use strict";
import {connect} from 'react-redux';
import Orders from '../components/orders';

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}


export default connect(mapStateToProps)(Orders);
