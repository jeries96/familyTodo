import React, { useState } from 'react';

import './Task.css';

function Task(props) {
    const { elem } = props
    console.log(elem)
    return (
        <div>


            <div className="taskwrapper">
                <div id="user">{elem._id}</div>
                <div id="titles">
                    {
                        elem.tasks.map((task) => {
                            return (<div>{task.taskTitle}</div>)
                        })
                    }
                </div>
                <div id="option">

                </div>
            </div>



        </div>
    );


}



export default Task;

