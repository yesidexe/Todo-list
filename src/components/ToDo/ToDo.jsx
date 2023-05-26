import React from "react";
import ToDoTasks from "../ToDoTasks";
import ToDoHeader from "../ToDoHeader/Index";
import { styled } from "styled-components";
import { ToDoContext } from "../../context";
import ToDoTasksLoading from "../ToDoTasksLoading/ToDoTasksLoading";

const ToDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap:30px;

    @media (max-width: 640px) {
        width: 300px;
        gap: 20px;
    }
`
const AlertP = styled.p`
    @import '../../styles/variables.css';

    color: var(--catskill-white-800);

    @media (max-width: 640px) {
        font-size: 12px;
    }
`

const ToDo = function () {
    const { status, tasks } = React.useContext(ToDoContext)

    return ( 
        <ToDoWrapper>
            <ToDoHeader /> 
            {status === 'loading' && <ToDoTasksLoading />}
            {status === 'error' && <AlertP>Error, algo salió mal</AlertP>}
            {(status === 'success' && tasks<=0) && <AlertP>Create your first task!</AlertP> }
            {
                status === 'success' &&
                <>                               
                    <ToDoTasks/>
                </>
            }
            
        </ToDoWrapper>
    );
}

export default ToDo;