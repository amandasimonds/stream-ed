import React from "react";

import classes from "./StreamPost.css"

const streamPost = (props) => (
    <div 
    onClick={props.clicked}
    className={[classes.StreamPost, classes[props.postType]]
    .join(" ")}>
        <strong>{props.title}</strong>
        {props.body}
    </div>
)

export default streamPost