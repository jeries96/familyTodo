import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import './Task.css';
import checked from './checked.svg'
import Delete from './delete.svg';


function Task(props) {
    let history = useHistory()
    const { elem } = props
    console.log(elem)
    return (
        <div id="wrapper">

            <div id="user">{elem._id}</div>
            <div className="taskwrapper">
                {/* <div id="user">{elem._id}</div> */}
                <div id="titles">
                    {
                        elem.tasks.map((task) => {
                            return (
                                <div id="flexx">
                                    <div>{task.taskTitle}</div>
                                    <div id="option">
                                        <img src={checked} />
                                        <img src={Delete} />
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

            </div>



        </div>
    );

   


}



export default Task;

