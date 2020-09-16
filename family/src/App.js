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
  Link, Redirect,HashRouter 
} from "react-router-dom";
function App() {
  const history = createBrowserHistory();

  /*const [registerInfo,setRegisterInfo] = useState([])*/

  return (
    <HashRouter>
    

      {<Switch>

        <Route path="/oneTask" >
          <OneTask />
        </Route>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route path="/Register" >
          <Register />
        </Route>
        <Route path="/" >
          <Login />
        </Route>

      </Switch>}

    </HashRouter>
  )
}



export default App;
