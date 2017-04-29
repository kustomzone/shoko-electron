import React from 'react';
import { ReactMPV } from 'mpv.js';

export default class Player extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mpv = null;
    this.state = { pause: true, 'time-pos': 0 };
  }
  handleMPVReady(mpv) {
    this.mpv = mpv;
    this.mpv.observe('pause');
    this.mpv.observe('time-pos');
    this.mpv.command('loadfile', '/path/to/video.mkv');
  }
  handlePropertyChange(name, value) {
    this.setState({ [name]: value });
  }
  togglePause() {
    this.mpv.property('pause', !this.state.pause);
  }
  render() {
    return (
      <ReactMPV
        className="player"
        onReady={this.handleMPVReady.bind(this)}
        onPropertyChange={this.handlePropertyChange.bind(this)}
        onMouseDown={this.togglePause.bind(this)}
      />
    );
  }
}
