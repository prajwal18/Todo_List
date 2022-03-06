import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ListItem from "./ListItem";


const DisplayBox = () => {
    const {todoList, searchTerm, handleDeleteTask, handleCheck} = useContext(DataContext);
    const newTodoList = todoList.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
        <div className="DisplayList">
            {newTodoList.filter(item => item.checked === false)&&
                <>
                    <h3 style={{margin: "1rem"}}>Remaining:</h3>
                    {newTodoList.map(task => {
                        if(task.checked === false){
                            return(
                                <ListItem 
                                    key={task.id}
                                    task={task}
                                    handleDeleteTask={handleDeleteTask}
                                    handleCheck={handleCheck}
                                />
                            )
                        }
                    })}
                </>
            }
            {newTodoList.filter(item => item.checked === true)&&
                <>
                    <h3 style={{margin: "1rem"}}>Completed:</h3>
                    {newTodoList.map(task => {
                        if(task.checked === true){
                            return(
                                <ListItem 
                                    key={task.id}
                                    task={task}
                                    handleDeleteTask={handleDeleteTask}
                                    handleCheck={handleCheck}
                                />
                            )
                        }
                    })}
                </>
            }
        </div>
    );
}

export default DisplayBox;