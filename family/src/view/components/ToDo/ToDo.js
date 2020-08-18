import React, { useState, useEffect } from 'react';

import './ToDo.css';
import Task from '../Task/Task'

function ToDo(props) {
    const [userList, setUserlist] = useState([])

    useEffect(() => {
        console.log('go')
        let id = localStorage.getItem('UserID');
        let lastName = localStorage.getItem('lastName');
        console.log(id, lastName)
        fetch('/ToDo', {
            method: 'POST',
            body: JSON.stringify({ id, lastName }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserlist(data)

            });
    }, [])
    return (

        <div id="wrapper">
            <div className="header">

                <a className="logo">ToDo</a>
        </div>
                
                <div id="tasks">
                    {
                        userList.map((elem,index) => {
                            return (<Task key={index} elem = {elem}/>);
                        })
                    }

            </div>
        </div>
    )
}




export default ToDo;