import React from "react";

import classes from "./FilterItem.css"

const filterItem = (props) => {

    let filterClass = classNames ({
        "filter": true,
        "filter-class": props.filterClassWork,
        "filter-announcement": props.filterAnnouncement,
        "filter-teacher": props.filterTeacher
    })
    return(
    <ul className={classes.FilterItem}>


    </ul>
)}

export default filterItem