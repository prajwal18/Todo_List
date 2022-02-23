import React from "react";
import { FaTrashAlt } from "react-icons/fa"

const ListItem = ({ task, handleDeleteTask, handleCheck }) => {
    return(
        <div className="ListItem">
            <input
                className="check"
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheck(task.id)}
            />
            <span>{task.title}</span>
            <FaTrashAlt
                className="trashCan"
                role="button"
                tabIndex="0"
                aria-label={`Delete task: ${task.title}`}
                onClick={() => handleDeleteTask(task.id)}
            />
        </div>
    );
}

export default ListItem;