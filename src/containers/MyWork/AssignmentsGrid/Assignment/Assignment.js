import React from "react";
import classes from "./Assignment.css"

const Assignment = (props) => (

    <div className={classes.AssignmentRow}>
            Title: {props.title} | Subject: {props.subject}
        </div>
    );

    export default Assignment