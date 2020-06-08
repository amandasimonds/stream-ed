import React, { Component } from 'react';

import Layout from "../../components/layout/Layout"
import classes from "./LiveStreams.css";

class LiveStreams extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    user : {
      name: "Amanda",
      type: "Student",
      homeroom: "Mrs. Wellman"
    },
 }

  render() {
    return (
        <Layout>
            <h1>Live Streams</h1>
        </Layout>
    );
  }
}

export default LiveStreams;
