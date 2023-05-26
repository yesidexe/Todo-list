import React from "react"
import { styled } from 'styled-components';
import { ToDoContext } from '../../context';
import { ToDoSearch } from '../ToDoSearch';
import ToDoInput from '../ToDoInput';

const ToDoHeaderWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    gap: 20px;
`
const Inputs = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`
const TodoCounter = styled.div`
    line-height: 50px;
    position: absolute;
    right: 0;
    color: #314c5b;

    @media (max-width: 640px) {
        line-height: 40px;
    }
`
const PCounter = styled.p`
    @import '../../styles/variables.css';

    color: var(--catskill-white-800);
    font-size: 16px;

    @media (max-width: 640px) {
        font-size: 12px;
    }
`
function ToDoHeader() {
    const { tasks } = React.useContext(ToDoContext)
    const completedTasks = tasks.filter((task) => task.completed)

    return (
        <ToDoHeaderWrapper>
            <Inputs>
                <ToDoInput/>
                <ToDoSearch/>
            </Inputs>
            <TodoCounter className='todo-counter'>
                <PCounter>
                    {
                        completedTasks.length === tasks.length
                        ? `All Completed!`
                        : `${completedTasks.length} of ${tasks.length} tasks completed`                        
                    }     
                </PCounter>
            </TodoCounter>
        </ToDoHeaderWrapper>

    );
}

export default ToDoHeader;