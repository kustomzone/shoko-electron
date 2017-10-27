import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Group extends Component {
  static propTypes = {
    group: PropTypes.object,
  };

  render() {
    const { group } = this.props;
    let thumb;
    try {
      thumb = `http://127.0.0.1:8111/${group.art.thumb[0].url}`;
    } catch (ex) {
      thumb = 'noimage';
    }

    return (
      <div className="group">
        <img src={thumb} alt="" />
        <div className="title">
          <div>
            <p>{group.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
