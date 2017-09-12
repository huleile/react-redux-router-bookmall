/**
 * @Author: hully
 * @Date:   2017-09-10 13:59:15
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-12 17:22:26
 */

"use strict";
import axios from 'axios';
import CONFIG from './config';

const server = CONFIG.server;
export default axios.create({
  baseURL: `${server.host}:${server.port}`
});
