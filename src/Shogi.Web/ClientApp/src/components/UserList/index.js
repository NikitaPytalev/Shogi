import React from 'react';
import ProfileCard from '../ProfileCard';

const ProfileList = (props) => {
    //return props.players.map((player) => <ProfileCard player={player} />);
    return (
        <div class="card-table">
            <div class="content">
                <table class="table is-fullwidth is-striped">
                    <tbody>
                        props.players.map((player) =>                                           
                        <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                        </tr>);
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileList;