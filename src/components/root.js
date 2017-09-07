/**
 * @Author: hully
 * @Date:   2017-09-06 15:04:41
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-07 18:57:25
 */
"use strict";
import React from 'react';
import Header from './header';
import Lefter from './lefter';
import Footer from './footer';

export default class extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Lefter />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
