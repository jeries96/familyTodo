import React, { useState } from 'react';
import './App.css';
import Register from './view/components/Register/Register'
import { Login } from './view/components/Login/Login'
import ToDo from './view/components/ToDo/ToDo'
import OneTask from '../src/view/components/Task/Task'
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const history = createBrowserHistory();

  /*const [registerInfo,setRegisterInfo] = useState([])*/

  return (
    <Router>
    

      {<Switch>

        <Route path="/oneTask" history={history}>
          <OneTask />
        </Route>
        <Route path="/todo" history={history}>
          <ToDo />
        </Route>
        <Route path="/Register" history={history}>
          <Register />
        </Route>
        <Route path="/" history={history}>
          <Login />
        </Route>

      </Switch>}

    </Router>
  )
}



export default App;
