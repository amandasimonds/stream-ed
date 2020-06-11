<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import { instance } from "../../../axios-assignments";

// import Aux from "../../../hoc/Auxiliary"
import classes from "./AssignmentsGrid.css";
=======
import React, { Component } from "react"
import axios from "../../../axios"

import classes from "./AssignmentsGrid.css"
>>>>>>> fa9f6d46504f3e676566d360eca3b37dd44061a5

import FilterItem from "../../../components/StreamContent/Filters/FilterItem/FilterItem";
import Assignment from "./Assignment/Assignment";

class AssignmentsGrid extends Component {
  state = {
    assignments: [],
  };

  componentDidMount() {
    axios.get("/assignments.json").then((response) => {
      let assignments = response.data;
      let updatedAssignments = Object.values(assignments);
      this.setState({ assignments: updatedAssignments });
    });
  }

  render() {
    const assignmentsBox = [];

    for (let i = 0; i < this.state.assignments.length; i++) {
      console.log(this.state.assignments);
      console.log("assignments loop", this.state.assignments[i].title);
      assignmentsBox.push(
        <Assignment
          title={this.state.assignments[i].title}
          body={this.state.assignments[i].body}
          subject={this.state.assignments[i].subject}
        />
      );
    }

<<<<<<< HEAD
    return (
      <div className={classes.container}>
        <div className={classes.firstRow}>
          <h1>Assignments</h1>
          <FilterItem filterType="Classwork">classwork</FilterItem>
          <FilterItem filterType="Tests">Tests</FilterItem>
          <FilterItem filterType="Homework">Homework</FilterItem>
        </div>
        <div className={classes.AssignmentsGrid}>
          <div className={classes.subject}>Subject</div>
          <div className={classes.type}>Type</div>
          <div className={classes.title}>Title</div>
          <div className={classes.description}>Description</div>
          {assignmentsBox}
        </div>
      </div>
    );
  }
=======
    componentDidMount() {
        axios.get("/assignments.json")
            .then(response => {
                let assignments = response.data;
                if(!assignments){
                    return
                } else {
                let updatedAssignments = Object.values(assignments)
                this.setState({ assignments: updatedAssignments })
                }
            })
    };

    render() {

        const assignmentsBox = []

        for (let i = 0; i < this.state.assignments.length; i++) {
            console.log(this.state.assignments)
            console.log("assignments loop", this.state.assignments[i].title)
            assignmentsBox.push(
                <Assignment
                    title={this.state.assignments[i].title}
                    body={this.state.assignments[i].body}
                    subject={this.state.assignments[i].subject} />
            )
        }

        return (
            <div className={classes.container}>
                <div className={classes.firstRow}>
                    <h1>Assignments</h1>
                    <FilterItem filterType="Classwork">classwork</FilterItem>
                    <FilterItem filterType="Tests">Tests</FilterItem>
                    <FilterItem filterType="Homework">Homework</FilterItem>
                </div>
                <div className={classes.AssignmentsGrid}>
                    <div className={classes.subject}>Subject</div>
                    <div className={classes.type}>Type</div>
                    <div className={classes.title}>Title</div>
                    <div className={classes.description}>Description</div>
                    {assignmentsBox}
                </div>
            </div>
        )
    }
>>>>>>> fa9f6d46504f3e676566d360eca3b37dd44061a5
}

export default AssignmentsGrid;
