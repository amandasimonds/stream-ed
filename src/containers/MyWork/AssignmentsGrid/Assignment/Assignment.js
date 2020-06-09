import React from "react";
import classes from "./Assignment.css"
import Aux from "../../../../hoc/Auxiliary"

const Assignment = (props) => (
    <Aux>
        <div className={classes.subject}>
        {props.subject}
        </div>
        <div className={classes.type}>{props.type}</div>
        <div className={classes.title}>
            {props.title} 
        </div>
        <div className={classes.description}>
        {props.body}
        </div>
    </Aux>
    );

    export default Assignment