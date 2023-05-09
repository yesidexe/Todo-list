import React from "react";
import ToDoInput from "../ToDoInput";
import ToDoTasks from "../ToDoTasks";

const ToDo = function () {
    const [task, setTask] = React.useState([])

    const handleSubmitTask = (inputTask)=>{
        const newTasks = [...task, inputTask]
        setTask(newTasks)
    }

    return ( 
        <div className="todo-wrapper">
            <ToDoInput handleSubmitTask={handleSubmitTask}/>
            <ToDoTasks task={task} setTask={setTask}/>
        </div>
    );
}

export default ToDo;