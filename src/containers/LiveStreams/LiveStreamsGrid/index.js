import React, { Component } from "react";
import axios from "../../../utils/axios";

import classes from "./LiveStreamsGrid.css";

import FilterItem from "../../../components/StreamContent/Filters/FilterItem";
import LiveStream from "./LiveStream/LiveStream";

class AssignmentsGrid extends Component {
  state = {
    liveStreams: [],
  };

  componentDidMount() {
    axios.get("/liveStreams.json").then((response) => {
      let liveStreams = response.data;
      if (!liveStreams) {
        return;
      } else {
        let updatedLiveStreams = Object.values(liveStreams);
        this.setState({ liveStreams: updatedLiveStreams });
      }
    });
  }

  render() {
    const liveStreamsBox = [];

    for (let i = 0; i < this.state.liveStreams.length; i++) {
      liveStreamsBox.push(
        <LiveStream
          key={[i]}
          title={this.state.liveStreams[i].title}
          body={this.state.liveStreams[i].body}
          subject={this.state.liveStreams[i].subject}
        />
      );
    }

    return (
      <div className={classes.container}>
        <div className={classes.firstRow}>
          <h1>LiveStreams</h1>
          <FilterItem filterType="Subject">Social Studies</FilterItem>
          <FilterItem filterType="Subject">Art</FilterItem>
          <FilterItem filterType="Subject">Math</FilterItem>
        </div>
        <div className={classes.AssignmentsGrid}>
          <div className={classes.subject}>Subject</div>
          <div className={classes.title}>Title</div>
          <div className={classes.description}>Description</div>
          {liveStreamsBox}
        </div>
      </div>
    );
  }
}

export default AssignmentsGrid;
