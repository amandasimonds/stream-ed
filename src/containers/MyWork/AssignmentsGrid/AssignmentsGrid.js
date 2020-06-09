import React, { Component } from "react"
import axios from "../../../axios-assignments"

import classes from "./AssignmentsGrid.css"

import FilterItem from "../../../components/StreamContent/Filters/FilterItem/FilterItem";
import Assignment from "./Assignment/Assignment"

class AssignmentsGrid extends Component {

    state = {
        assignments: []
    }

    componentDidMount() {
        axios.get("/assignments.json")
            .then(response => {
                let assignments = response.data;
                let updatedAssignments = Object.values(assignments)
                this.setState({ assignments: updatedAssignments })
            })
    };

    render() {

        let assignmentsBox = null

        return (
            <div className={classes.AssignmentsGrid}>
                <div className={classes.firstRow}>
                    <h1>{this.props.subjectName}</h1>
                    <FilterItem filterType="Classwork">classwork</FilterItem>
                    <FilterItem filterType="Tests">Tests</FilterItem>
                    <FilterItem filterType="Homework">Homework</FilterItem>
                </div>

                {this.state.assignments.map((assignmentsBox, key) => {
                    // let assignmentsBox
                    for (let i = 0; i < this.state.assignments.length; i++) {
                        console.log(this.state.assignments)
                        console.log("assignments loop", this.state.assignments[i].title)
                        assignmentsBox = (
                            <div key={key}>
                                <Assignment
                                    title={this.state.assignments[i].title}
                                    body={this.state.assignments[i].body}
                                    subject={this.state.assignments[i].subject} />
                            </div>
                        )}
                    return assignmentsBox
                })}
                
                {assignmentsBox}
            </div>
        )
    }
}

export default AssignmentsGrid;