import React from "react";
import {Link} from "react-router-dom";

import classes from "./StreamPost.css"

const streamPost = (props) => (
    <div 
    onClick={props.clicked}
    className={[classes.StreamPost, classes[props.postType]]
    .join(" ")}>
        <strong>{props.title}</strong>
        <hr/>
        {props.body}
        <div className={classes.EditButton}>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
    </div>
)

export default streamPost