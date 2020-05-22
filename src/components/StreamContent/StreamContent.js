import React from "react";

import classes from "./StreamContent.css"

const streamContent = (props) => (
    <div className={classes.StreamContent}>
    <button className={classes.Category}>Class Stream</button>
    <button className={classes.Category}>My Work</button>
    <button className={classes.Category}>Live Streams</button>
    </div>
);

export default streamContent