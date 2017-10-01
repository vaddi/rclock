import React from 'react';
import Sound from 'react-sound';

// Example of playing Audio in React
// https://www.npmjs.com/package/react-sound
//
// <Audio url="./Sounds/Boing.mp3" />
//

export class Audio extends React.Component {
  render() {
    return (
      <Sound
        url={this.props.url}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }

}
