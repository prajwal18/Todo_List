import React from "react";
import { createContext, useState } from "react";
import useSemiPresistentState from "./useSemiPresistantState";
import data from "./data";


const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [todoList, setTodoList] = useSemiPresistentState('todoList',data);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTask = (task) => {
        const id = todoList.length ? todoList[todoList.length -1].id + 1 : 1;
        setTodoList([...todoList, {id:id, title: task, checked: false}]);
    }
    const handleDeleteTask = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    }

    const handleCheck = (id) => {
        const newList = todoList.map(task => {
            if(task.id === id){
                return {...task, checked: !task.checked}
            }
            return task;
        });
        setTodoList(newList);
    }

    const handleClearList = () => {
        setTodoList([]);
    }
    const handleResetList = () => {
        setTodoList(data);
    }

    return(
        <DataContext.Provider value={{
            todoList, setTodoList,
            searchTerm, setSearchTerm,
            handleAddTask, handleDeleteTask,
            handleCheck,
            handleClearList, handleResetList
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;