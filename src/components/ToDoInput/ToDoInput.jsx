import React from "react"
import styles from "./todoinput.module.css"
import { ToDoContext } from "../../context";

const ToDoInput = function () {
    const { handleSubmit, inputTask, setInputTask } = React.useContext(ToDoContext)
    
    return (
        <form className={styles.todoInputWrapper}
            onSubmit={handleSubmit}
        >
            <input
                placeholder="Write a task"
                className={styles.todoInput}
                value={inputTask}
                onChange={(e)=>setInputTask(e.target.value)}
            />
            <span className={styles.todoInputButton}>+</span>
        </form>
    );
}

export default ToDoInput;