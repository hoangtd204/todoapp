import FormList from "./formList";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
function TodoList() {
    const myUUID = uuidv4();
    const [todos, setTodos] = useState([
        { id: myUUID, task: "task 1", completed: false },
        { id: myUUID, task: "task 2", completed: true }
    ])

    return (
        <div>
            <h1>
                Todo List <br /> <span>A simple React Todo List App</span>
            </h1>
            <ul></ul>
            <FormList />
        </div>
    )
}
export default TodoList