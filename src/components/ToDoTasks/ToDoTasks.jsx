import styles from './todotasks.module.css'
import { ToDoContext } from '../../context'
import React from 'react'

const deleteIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={styles.deleteIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)
const ToDoTasks = function () {
    const { handleDelete, handleCompleted, searchTasks } = React.useContext(ToDoContext)   

    const CompleteIcon = ({completed}) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
                className={completed ? `${styles.completeIcon} ${styles.completedIconTrue}` : `${styles.completeIcon}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        )
    }

    return (
        <ul className={styles.tasksList}>
            {
                searchTasks.map((tas, index) => {
                    const id = `tas-${index}`
                    return (
                        <li key={id} className={tas.completed ? `${styles.taskTrue} ${styles.task}` : `${styles.task}`}>
                            <span className={styles.taskSpan}></span>
                            <p className={tas.completed ? `${styles.taskPTrue} ${styles.taskP}` : `${styles.taskP}`}>{tas.text}</p>
                            <span 
                                className={styles.taskDeleted} 
                                onClick={() => handleDelete(index)}>{deleteIcon}
                            </span>
                            <span 
                                className={tas.completed ? `${styles.taskCompletedTrue} ${styles.taskCompleted}` : `${styles.taskCompleted}`}
                                onClick={() => handleCompleted(index)}><CompleteIcon completed={tas.completed}/>
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ToDoTasks;