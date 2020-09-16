import React, { useState } from 'react';
import './App.css';
import Register from './view/components/Register/Register'
import { Login } from './view/components/Login/Login'
import ToDo from './view/components/ToDo/ToDo'
import OneTask from '../src/view/components/Task/Task'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  /*const [registerInfo,setRegisterInfo] = useState([])*/

  return (
    <Router>
      <div>
        {/* /* <Login></Login> */}
        {/* <Register /> */}
        {/* <ToDo/> */}
      </div>

      {<Switch>
        <Route path="/oneTask">
          <OneTask />
        </Route>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>

      </Switch>}
    </Router>
  )
}



export default App;
