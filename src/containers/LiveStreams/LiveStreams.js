import React, { Component } from 'react';

import Layout from "../../components/layout/Layout"
import classes from "./LiveStreams.css";
import "./LiveStreams.css"

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
          <div className={classes.LiveStreams}>
            <h1>Live Streams</h1>
            <table>
              <tr>Hello</tr>
            </table>
          </div>
        </Layout>
    );
  }
}

export default LiveStreams;
