import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
    <div className="Login">
      <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap" rel="stylesheet"></link>
      <header className="Login-header">
        Login
      </header>
      <form className="login-form">
        <input id="field" className="lastName" placeholder="Last Name" type="text"></input>
        <input id="field" className="password" placeholder="Password" type="password"></input>
        <button id="field" onclick="Tasks()">Login</button>
        <button id="field" onclick="Register()">Register</button>
      </form>
    </div>
    </div>
  );
}

export default App;
