import React from "react";
import classes from "./Button.css"

const button = (props) => (
    <button
        onClick={props.clicked}
        //dynamically add classes that are conditional
        className={[classes.Button, classes[props.btnType]]
            //join with a space, to put a space between each string that comes back
            .join(" ")}>{props.children}</button>
)

export default button