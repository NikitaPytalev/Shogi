import React from 'react';
import { Route, Switch } from 'react-router';
import Error from './components/Error/Error';
import Lobby from './components/Lobby/Lobby';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/lobby" component={Lobby} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}
export default App;
