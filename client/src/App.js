import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from './components/Search'
import  Cards  from './components/Cards';
import Player from './components/Player';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import Radio from './components/Radio';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component = { Home } />
          <Route path='/search' component = { Search }/>
          <Route path='/music' component = { Cards }/>
          <Route path='/player' component = { Player }/>
          <Route path='/playlist' component = { Playlist }/>
          <Route path='/radio' component = { Radio }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
