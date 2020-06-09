import React from "react";
import classes from "./Assignment.css"

const Assignment = (props) => (

    <div className={classes.AssignmentRow}>
            Title: {props.title}
        </div>
    );

    export default Assignment