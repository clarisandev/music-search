import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from './components/Search'
import  Cards  from './components/Cards';
import Player from './components/Player';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Artist from './components/Artist';
import Album from './components/Album';

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
          <Route path='/album' component = { Album }/>
          <Route path='/artist' component = { Artist }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
