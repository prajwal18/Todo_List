import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ListItem from "./ListItem";


const DisplayBox = () => {
    const {todoList, searchTerm, handleDeleteTask, handleCheck} = useContext(DataContext);
    console.log(typeof todoList);
    const newTodoList = todoList.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return(
        <div className="DisplayList">
            {
                newTodoList.map(task => {
                    return(
                        <ListItem 
                            key={task.id}
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            handleCheck={handleCheck}
                        />
                    );
                })
            }
        </div>
    );
}

export default DisplayBox;