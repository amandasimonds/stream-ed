import React from "react"

import classes from "./AssignmentsGrid.css"

import FilterItem from "../../../components/StreamContent/Filters/FilterItem/FilterItem";

const AssignmentsGrid = (props) => (
    <div className={classes.AssignmentsGrid}>
        <div className={classes.firstRow}>
                <h1>{props.subjectName}</h1>
                <FilterItem filterType="Classwork">classwork</FilterItem>
                <FilterItem filterType="Tests">Tests</FilterItem>
                <FilterItem filterType="Homework">Homework</FilterItem>
        </div>  
        <div className={classes.assignmentRow}>
            
        </div>
            </div>
)

export default AssignmentsGrid;