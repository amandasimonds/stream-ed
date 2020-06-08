import React, {Component} from "react"
import axios from "../../../axios-assignments"

import classes from "./AssignmentsGrid.css"

import FilterItem from "../../../components/StreamContent/Filters/FilterItem/FilterItem";

class AssignmentsGrid extends Component{

    state={
        assignments:[]
    }

    componentDidMount(){
        axios.get("/assignments.json")
            .then(response =>{
                console.log(response)
                let assignments = response.data;
                let updatedAssignments = Object.keys(assignments).map(assignment => {
                    return {
                        ...assignment
                    }
                })
                this.setState({assignments:updatedAssignments})
                console.log(this.state.assignments)
            })
    }

    render(){
        return(
    <div className={classes.AssignmentsGrid}>
        <div className={classes.firstRow}>
                <h1>{this.props.subjectName}</h1>
                <FilterItem filterType="Classwork">classwork</FilterItem>
                <FilterItem filterType="Tests">Tests</FilterItem>
                <FilterItem filterType="Homework">Homework</FilterItem>
        </div>  
        <div className={classes.assignmentRow}>

        </div>
            </div>
)
        }
    }

export default AssignmentsGrid;