import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


import './App.css';
import { Board, Welcome, GameRules, HighScores, GameOver } from './components'

export const App = () => {
  return (
    <Router>
      <Route exact={true} path="/">
        <Welcome />
        <Link to="/game">Start Game!</Link>
        <Link to="/how-to-play">How to Play!</Link>
        <Link to="/high-scores">High Scores!</Link>
        <Link to="/game-over">Games over! Add initials!</Link>
      </Route>
      <Switch>
        <Route path="/game">
          <Board />
        </Route>
        <Route path="/how-to-play">
          <GameRules />
        </Route>
        <Route path="/high-scores">
          <HighScores/>
        </Route>
        <Route path="/game-over">
        <GameOver />
        </Route>
      </Switch>
    </Router>
  );
}
