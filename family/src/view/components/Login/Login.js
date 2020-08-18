import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Login.css';

export function Login(props) {

    return (
        
        <div className="wrapper fadeInDown">
        <div id="formContent">
            <h2 className="active" id="signIn"> Sign In </h2>
              <form  onSubmit={handleLogin}>
              <input type="text" id="login" className="fadeInsecond" name="email" placeholder="@Email"/>
              <input type="text" id="login" className="fadeInsecond" name="lastName" placeholder="Lastname"/>
              <input type="password" id="password" className="fadeInthird" name="password" placeholder="password"/>
              <input type="submit" className="fadeIn fourth" value="Log In"></input>
              </form>


              <div id="formFooter">
              <Link to="/Register"><a className="underlineHover" href="#">Register</a></Link>
              </div>

            </div>
         </div>
         
    );

    function handleLogin(e) {
        e.preventDefault();
       
        const email = e.target.elements.email.value;
        const lastname = e.target.elements.lastName.value;
        const password = e.target.elements.password.value;
        
        fetch('/login-user', {
            method: 'POST',
            body: JSON.stringify({ email, lastname , password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { validAdmin , id} = data;
                localStorage.setItem('UserID', id);
                
    
                if (validAdmin == true) {
                 /*<Link to="/toDoPage"/>  */        
                  console.log('Arrived')
                }
                if (validAdmin == false) {
                    // document.getElementById('root').innerText = `Wrong username/password`
                    // document.getElementById('root').style.color = "red";
    
                }
    
            })
    }
}
