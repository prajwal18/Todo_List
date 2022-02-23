import React from "react";
import AddItem from "./AddItem";
import { useContext } from "react";
import DataContext from "../../context/DataContext";


const Search = () => {
    const {searchTerm, setSearchTerm, handleAddTask} = useContext(DataContext);

    return(
        <div className="SearchOut">
            <div className="SearchIn">
                <AddItem 
                    handleAddTask={handleAddTask}
                />
                <input
                    type="text"
                    placeholder="Search for task..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;