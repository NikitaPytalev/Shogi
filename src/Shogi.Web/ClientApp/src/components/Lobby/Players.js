import React from 'react';

const Players = (props) => {
    return props.players.map((player) => <p>{player}</p>);
};

export default Players;