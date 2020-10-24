import React, { useEffect, useState, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ProfileList from '../UserList';
import Chat from '../Chat';

const Lobby = () => {
  const [connection, setConnection] = useState(null);
  const [players, setPlayers ] = useState([]);
  const latestPlayers = useRef(null);

  latestPlayers.current = players;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
        .withUrl('https://localhost:5001/hubs/lobby')
        .withAutomaticReconnect()
        .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveConnectionsList', players => {
                    const updatedPlayers = players;
                    setPlayers(updatedPlayers);
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  return (
    <div>
      <section>
        <div className="container">
          <p>Lobby</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className = "columns">
            <div className="column">
              <div className="Box">
                <ProfileList players={players} />
              </div>
            </div>
            <div className="column">
              <Chat />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lobby;
