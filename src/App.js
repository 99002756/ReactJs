
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';


function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
    <div>
      <Switch>
        <Route path="/" exact component= {ListUserComponent}></Route>
        <Route path="/employees" component= {ListUserComponent}></Route>
        <Route path="/add-user/:id" component= {CreateUserComponent}></Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
