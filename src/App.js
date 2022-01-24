import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Favoritas from './components/Favoritas';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <>
        <Switch>
          <Route path="/" component={NavBar} />
          <Route patch="/" exact component={Peliculas} />
          <Route path='/favoritas' component={Favoritas} />
        </Switch>
    </>
    )
}

export default App;