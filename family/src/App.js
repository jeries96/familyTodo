import React,{useState} from 'react';
import './App.css';
import Register from './view/components/Register/Register'
import {Login} from './view/components/Login/Login'
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
      <Login></Login>
      {/* <Register /> */}
    </div>

    {/* <Switch>
          <Route path="/Login">
          <Login/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          
         
    </Switch> */}
    </Router>
  )}



export default App;
