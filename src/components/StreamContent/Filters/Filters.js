import React from "react"

import classes from "./Filters.css";

const filters = (props) => (
    <div className={classes.Filters}>
    <div className={classes.Classes}>Classes</div>
    <div className={classes.Classes2}>Art</div>
    <div className={classes.Classes}>Math</div>
    <div className={classes.Announcements}>Announcements</div>
    <div className={classes.Classes}>Students</div>
    </div>
);


export default filters