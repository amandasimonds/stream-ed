import React from "react";

import classes from "./FullStreamPost.css"

const fullStreamPost = (props) => (
    <div 
    className={classes.FullStreamPost}>
        <strong>{props.title}</strong>
        {props.body}
    </div>
)

export default fullStreamPost