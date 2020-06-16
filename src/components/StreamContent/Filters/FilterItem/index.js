import React from "react";

import classes from "./FilterItem.css"

const filterItem = (props) => (
    <button 
        onClick={props.clicked}
        className={[classes.FilterItem, classes[props.filterType]]
            .join(" ")}>#{props.children}</button>
)

export default filterItem