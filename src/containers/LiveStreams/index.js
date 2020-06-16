import React, { Component } from "react";
import Layout from "../../components/layout";
import "./LiveStreams.css";

import LiveStreamsGrid from "./LiveStreamsGrid";

class LiveStreams extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    user: {
      name: "Amanda",
      type: "Student",
      homeroom: "Mrs. Wellman",
    },
  };

  render() {
    return (
      <Layout>
        <LiveStreamsGrid />
      </Layout>
    );
  }
}

export default LiveStreams;
