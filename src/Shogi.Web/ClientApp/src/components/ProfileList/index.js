import React from 'react';
import ProfileCard from '../ProfileCard';

const ProfileList = (props) => {
    return props.players.map((player) => <ProfileCard player={player} />);
};

export default ProfileList;