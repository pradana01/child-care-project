import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {SignUpPage} from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpPage}/>
      </Switch>
    </Router>
  );
}

export default App;
