import React, { useState } from 'react';

import './Register.css';

function Login(props) {

    return (
        <div className='root'>
            <form className='form' onSubmit={handleSubmit}>
            <h2 className="active"> Register </h2>

                <input type='text' placeholder='Email' name='userEmail'></input>
                <br />
                <input type='text' placeholder='First Name' name='firstName'></input>
                <br />
                <input type='text' placeholder='Last Name' name='lastName'></input>
                <br />
                <input type='text' placeholder='Pic URL' name='imgUrl'></input>
                <br />
                <input type='text' placeholder='Password' name='password'></input>
                <br />
                <input type='submit' value="Register" id='button'></input>
            </form>
        </div>
    );

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.elements)
        const email = e.target.elements.userEmail.value;
        const firstname = e.target.elements.firstName.value;
        const lastname = e.target.elements.lastName.value;
        const img = e.target.elements.imgUrl.value;
        const password = e.target.elements.password.value;
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ email, firstname, lastname, img, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        console.log("cats are here")
    }

}



export default Login;

