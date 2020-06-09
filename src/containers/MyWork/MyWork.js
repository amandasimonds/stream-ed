import React, { Component } from 'react';

import Layout from "../../components/layout/Layout"
import AssignmentsGrid from "./AssignmentsGrid/AssignmentsGrid"

class MyWork extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    user : {
      name: "",
      type: "",
      homeroom: ""
    },
    assignments:{
        subject:{
            subjectName:"Math",
            subjectAssignments:{
                1:{
                    title:"Equations practice",
                    due:"10/4/20",
                    submitted: false
                },
                2:{
                    title:"Addition Classwork",
                    due: "10/10/20",
                    submitted: false
                }
            }
        }
    }
 }

  render() {
    return (
        <Layout>
            <AssignmentsGrid
                subjectName={this.state.assignments.subject.subjectName}
            />
        </Layout>
    );
  }
}

export default MyWork;
