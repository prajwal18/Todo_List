import React from "react";

const CallActionButton = ({ title, handleClick }) => {
    return(
        <button 
            type="button"
            onClick={handleClick}
            aria-label={title}
        >
            {title}
        </button>
    )
}

export default CallActionButton;