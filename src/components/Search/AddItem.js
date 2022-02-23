import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";


const AddItem = ({ handleAddTask }) => {
    const [task, setTask] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        task && handleAddTask(task);
        setTask('');
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                placeholder="Add new Task..."
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
            >
                <FaPlus />
            </button>
        </form>
    );
}

export default AddItem;