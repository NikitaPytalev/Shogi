import React, { Component } from 'react';
import Chat from './Chat';
import Players from './Players';

export class Lobby extends Component {
  static displayName = Lobby.name;

  render () {
    return (
      <div>
        <Players />
        <Chat />
      </div>
    );
  }
}
