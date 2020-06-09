import React from "react";

import classes from "./StreamPost.css"

const streamPost = (props) => (
    <div onClick={props.clicked}
    className={[classes.StreamPost, classes[props.postType]]
    .join(" ")}>{props.children}</div>
)

export default streamPost