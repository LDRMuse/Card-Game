import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


import './App.css';
import { Board, Welcome } from './components'

export const App = () => {
  return (
    <Router>
    <Route exact={true} path="/">
      <Welcome/>
        <Link to="/game">Start Game!</Link>
      </Route>
        <Switch>
          <Route path="/game">
      <Board />
        </Route>
          </Switch>
    </Router>
  );
}
