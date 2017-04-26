// @flow
import React, { Component } from 'react';
import './Series.global.css';
import SiteMenuBar from './SiteMenuBar';
import SiteNavbar from './SiteNavbar';
import bannerImage from '../images/series-banner.jpg';
import posterImage from '../images/series-poster.jpg';

export default class Series extends Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <div className="page page-series">
          <div className="banner">
            <img src={bannerImage} alt="" />
          </div>
          <div className="series-title">
            <span className="title">Fairy Tail (2014)</span>
            <span className="type">Sequel</span>
          </div>
          <div className="poster">
            <img src={posterImage} alt="" />
          </div>
          <div className="page-content">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
