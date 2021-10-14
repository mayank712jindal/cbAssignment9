import React, { useState } from "react";
import './Task.css'

const Task = () => {

    const [tasks, setTasks] = useState([]);
    const [inp, setInp] = useState('');

    const changeHandler = (e) => {
        setInp(e.currentTarget.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (inp !== "") {
            setTasks([...tasks, inp]);
        }
        setInp("");
    }
    const handleDeleteClick = (idx) => {
        const removeTasks = tasks.filter((task, index) => {
            return index !== idx;
        });
        setTasks(removeTasks);
    };

    const handleEditClick = (todo, idx) => {
        const promptValue = prompt("Update task", todo);
        if (promptValue !== null) {
            const lst = tasks.map((task, index) => {
                return (idx !== index ? task : promptValue);
            });
            setTasks(lst);
        }
    }
    const handleDownClick = (idx) => {
        if (idx + 1 !== tasks.length) {
            const copyTasks = tasks.map((task) => {
                return task;
            })
            const val = copyTasks[idx];
            copyTasks[idx] = copyTasks[idx + 1];
            copyTasks[idx + 1] = val;
            setTasks(copyTasks);
        }
        else {
            console.log("check for error");
        }
    }
    const handleUpClick = (idx) => {
        if (idx - 1 !== -1) {
            const copyTasks = tasks.map((task) => {
                return task;
            })
            const val = copyTasks[idx];
            copyTasks[idx] = copyTasks[idx - 1];
            copyTasks[idx - 1] = val;
            setTasks(copyTasks);
        }
        else {
            console.log("check for error");
        }
    }
    const taskList = tasks.map((todo, idx) => {
        return <li key={idx}>
            <div> {todo}</div>
            <div>
                <button id="edit" onClick={() => handleEditClick(todo, idx)}>&#x270E;</button>
                <button id="del" onClick={() => handleDeleteClick(idx)}>&#x2715;</button>
                <button id="up" onClick={() => handleUpClick(idx)}>&uarr;</button>
                <button id="down" onClick={() => handleDownClick(idx)}>	&darr;</button>
            </div>

        </li>
    })
    return (
        <div id="inputDiv">
            <div>
                <input
                    type="text"
                    value={inp}
                    onChange={changeHandler}
                    placeholder="Enter Your Task" />
                <button id="tskbtn" onClick={submitHandler}>Add Task</button>
            </div>

            <ul>
                {taskList}
            </ul>
        </div >
    );
}

export default Task;