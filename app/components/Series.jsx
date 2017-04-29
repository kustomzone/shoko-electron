// @flow
import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './Series.global.css';
import SiteMenuBar from './SiteMenuBar';
import SiteNavbar from './SiteNavbar';
import bannerImage from '../images/series-banner.jpg';
import posterImage from '../images/series-poster.jpg';
import calendarIcon from '../icons/16-Calender-Active.png';
import collectionIcon from '../icons/16-Collection-Active.png';
import starIcon from '../icons/16-My-Lists-Active.png';

const text = <p>Magic is what makes the fictional world of Earth-land go &quot;round, and its
  many mage guilds work together—or sometimes against one another—to bring
  balance to that world. Each guild flaunts unique features in hopes of being
  the best guild on the planet.<br />
  Lucy Heartfilia, a 17-year-old girl, is desperately searching for the perfect
  guild. After running from her father, she wanders the city in search of Gold
  Keys, for they unlock the Celestial Spirits that are so vital for her magic.
  With so many wizards around, it&quot;s a journey that&quot;s very challenging
  and dangerous to go alone. Yet a fateful encounter with Natsu Dragneel
  (a wizard who largely resembles a dragon) leads her to a guild known as
  Fairy Tail, which soon becomes her new home.<br />
  Her happiness amongst new-found friends is overshadowed by the evil powers of
  malicious guilds and the mysterious dark wizard Zeref. Their lives are about
  to take an unexpected turn as they battle evil, fight for their guild, and
  uncover fragments of their past. It will shake the foundations of who they
  are as people, and help explain why Earth-land has fallen into this state
  to begin with.</p>;

export default class Series extends Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <div className="page page-series">
          <PerfectScrollbar>
            <div className="banner">
              <img src={bannerImage} alt="" />
            </div>
            <div className="series-title">
              <span className="title">Fairy Tail (2014)</span>
              <span className="type">Sequel</span>
            </div>
            <div className="series-info">
              <img src={calendarIcon} alt="" />
              <span>March 30 2014 - June 22 2017</span>
              <img src={collectionIcon} alt="" />
              <span>54 Episodes (2 Specials)</span>
              <img src={starIcon} alt="" />
              <span>8.88 (12,343 votes)</span>
            </div>
            <div className="poster">
              <img src={posterImage} alt="" />
            </div>
            <div className="series-content">
              <div className="panel">
                <ol className="breadcrumb breadcrumb-arrow">
                  <li className="breadcrumb-item">Collection</li>
                  <li className="breadcrumb-item">Very Long Series</li>
                  <li className="breadcrumb-item active">Fairy Tail</li>
                  <li className="breadcrumb-item active">Fairy Tail (2014)</li>
                </ol>
                <ul className="nav nav-tabs nav-tabs-line">
                  <li className="nav-item"><a className="nav-link active">Series info</a></li>
                  <li className="nav-item"><a className="nav-link">Episodes</a></li>
                  <li className="nav-item"><a className="nav-link">Characters</a></li>
                  <li className="nav-item"><a className="nav-link">Images</a></li>
                  <li className="nav-item"><a className="nav-link">Related &amp; Similar</a></li>
                  <li className="nav-item"><a className="nav-link">Reviews</a></li>
                  <li className="nav-item"><a className="nav-link">Files</a></li>
                </ul>
              </div>
              <div className="panel panel-dark">
                <div className="panel-heading">
                  <h3 className="panel-title">Series synopsis</h3>
                </div>
                <div className="panel-body">
                  {text}
                </div>
              </div>
              <div className="panel panel-dark">
                <div className="panel-heading">
                  <h3 className="panel-title">Series synopsis</h3>
                </div>
                <div className="panel-body">
                  {text}
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}
