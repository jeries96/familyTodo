import React, { useState, useEffect } from 'react';

import './ToDo.css';

function ToDo(props) {
    const [userList, setUserlist] = useState([])
    useEffect(() => {
        let id = localStorage.getItem('UserID');
        fetch('/ToDo')
            .then(res => res.json())
            .then(data => {
                setUserlist(data.docs)
            });
    })
    return (

        <div id="wrapper">
            <div className="header">

                <a className="logo">ToDo</a>

                <div id="tasks">

                </div>

            </div>
        </div>
    )
}




export default ToDo;