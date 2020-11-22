import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from './components/Search'
import  Cards  from './components/Cards';
import Player from './components/Player';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' component = { Search } />
          <Route path='/searchMusic' component = { Cards }/>
          <Route path='/player' component = { Player }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
