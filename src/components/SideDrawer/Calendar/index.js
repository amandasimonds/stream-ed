import React from "react";

import classes from "./Calendar.css";
import Calendar from "react-calendar";

const calendar = (props) => (
    <div className={classes.Calendar}>
        <Calendar/>
    </div>
);

export default calendar