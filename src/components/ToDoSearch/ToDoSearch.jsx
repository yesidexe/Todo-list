import React from "react"
import styles from "./todosearch.module.css"
import { ToDoContext } from "../../context";

const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.searchIcon}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    )
}
function ToDoSearch() {
    const { searchTerm, setSearchTerm } = React.useContext(ToDoContext)
    const [inputValue, setInputValue] = React.useState("")
    
    return (
        <div
        onMouseLeave={() => setSearchTerm('')}
        className={styles.todoInputWrapper}>
            <input
                value={searchTerm}
                placeholder="Search a task"
                className={styles.todoInput}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className={styles.todoInputButton}><SearchIcon/></span>
        </div>
    );
}

export {ToDoSearch};