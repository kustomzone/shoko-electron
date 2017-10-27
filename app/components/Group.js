import React, { Component } from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  position: 'absolute',
  bottom: 0,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  background: '#000',
  opacity: '0.8',
  color: '#fff',
  width: '100%',
};

const thumbStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

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
      <div style={{ height: '14rem', width: '10rem', position: 'relative', margin: '0.5rem', background: '#fff' }}>
        <img src={thumb} alt="" style={thumbStyle} />
        <div style={titleStyle}>{group.name}</div>
      </div>
    );
  }
}
