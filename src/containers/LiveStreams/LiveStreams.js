import React, { Component } from 'react';
import axios from "axios";

import Layout from "../../components/layout/Layout"
import classes from "./LiveStreams.css";
import "./LiveStreams.css"

import LiveStreamsGrid from "./LiveStreamsGrid/LiveStreamsGrid"

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

 componentDidMount(){
  axios.get("/liveStreams.json")
  .then(response => {
      let liveStreams = response.data;
      let updatedLiveStreams = Object.values(liveStreams)
      this.setState({ assignments: updatedLiveStreams })
  })
 }

  render() {
    return (
        <Layout>
         <LiveStreamsGrid/>
        </Layout>
    );
  }
}

export default LiveStreams;
