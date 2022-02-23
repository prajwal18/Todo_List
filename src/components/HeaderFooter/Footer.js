import React from "react";
import CallActionButton from "./CallActionButton";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const Footer = () => {
    const {handleClearList, handleResetList} = useContext(DataContext);
    return(
        <footer>
            <CallActionButton
                title="clear list"
                handleClick={handleClearList}
            />
            <CallActionButton
                title="reset list"
                handleClick={handleResetList}
            />
        </footer>
    );
}

export default Footer;