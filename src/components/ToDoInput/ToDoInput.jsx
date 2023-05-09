import React from "react"

const ToDoInput = function ({handleSubmitTask}) {
    const [inputTask, setInputTask] = React.useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleSubmitTask(inputTask)
        setInputTask('')        
    }

    const handleChange = (e)=>{
        setInputTask(e.target.value)
    }

    return (
        <form className="todo-input-wrapper"
            onSubmit={handleSubmit}
        >
            <input
                placeholder="Write a task"
                className="todo-input"
                value={inputTask}
                onChange={handleChange}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default ToDoInput;