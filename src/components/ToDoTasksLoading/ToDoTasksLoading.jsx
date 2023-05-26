import styles from "./todotasksloading.module.css"

const deleteIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={styles.deleteIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)
function ToDoTasksLoading() {
    return (
        /*Deberia de buscar una manera de no repetir los tres <li> se ve feo*/
        <ul className={styles.tasksList}>
            <li className={styles.task}>
                <span className={styles.taskSpan}></span>
                <p className={styles.taskP}></p>
                <span className={styles.taskDeleted}></span>
                <span className={styles.taskCompleted}></span>
            </li>  
            <li className={styles.task}>
                <span className={styles.taskSpan}></span>
                <p className={styles.taskP}></p>
                <span className={styles.taskDeleted}></span>
                <span className={styles.taskCompleted}></span>
            </li>  
            <li className={styles.task}>
                <span className={styles.taskSpan}></span>
                <p className={styles.taskP}></p>
                <span className={styles.taskDeleted}></span>
                <span className={styles.taskCompleted}></span>
            </li>     
        </ul>
    );
}

export default ToDoTasksLoading;