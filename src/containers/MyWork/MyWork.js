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
