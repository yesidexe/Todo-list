import React from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({children}){
    /*El use del Local Storage está en la carpeta hooks*/    
    //const [tasks, saveTasks] = React.useState(parsedTasks)
    const [saveTasks, tasks, status] = useLocalStorage('Tasks',[])
    const [searchTerm, setSearchTerm] = React.useState('')
    const [inputTask, setInputTask] = React.useState('')  
    
    console.log(status)

    const searchTasks = tasks.filter((tas) => {
        return (
            tas.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    const handleSubmitTask = (inputTask)=>{
        const validar = tasks.some((task) => task.text === inputTask)
        if(!validar){
            const newTask = {
                text: inputTask,
                completed: false,
            }

            saveTasks([...tasks, newTask])
        }        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleSubmitTask(inputTask)
        setInputTask('')        
    }

    const handleDelete = (index) => {
        saveTasks(tasks.filter((_,i) => index !== i))
    }

    const handleCompleted = (text)=>{
        const newTasks = [...tasks]
        const taskIndex = newTasks.findIndex((tas) => {
            return tas.text === text
        });        
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        saveTasks(newTasks)
    }
    
    return(
        <ToDoContext.Provider value={{
            tasks,
            saveTasks,
            status,
            searchTasks,
            setInputTask,
            handleSubmitTask,
            handleSubmit,
            handleDelete,
            inputTask,
            searchTerm,
            setSearchTerm,
            handleCompleted,

        }}>
            {children}
        </ToDoContext.Provider>
    )
}

export {ToDoContext,ToDoProvider};