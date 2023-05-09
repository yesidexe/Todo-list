const ToDoTasks = function ({ task, setTask }) {

    const handleDelete = (index)=>{
        setTask(task.filter((_,i)=>i!==index))
    }

    return (
        <ul className="taks-list">
            {
                task.map((tas, index) => {
                    const id = `tas-${index}`
                    return (
                        <li key={id} className="task">
                            <span></span>
                            <p>{tas}</p>
                            <span onClick={()=>handleDelete(index)}>✖</span>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ToDoTasks;