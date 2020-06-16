import React, { Component } from "react";

import axios from "../../utils/axios";

import classes from "./StreamContent.css";
import Filters from "./Filters";
import StreamPost from "./StreamPosts/StreamPost";

class StreamContent extends Component {
  state = {
    filters: [
      { type: "LiveStream", text: "live streams" },
      { type: "Announcement", text: "announcements" },
      { type: "Teacher", text: "teacher" },
      { type: "Subject", text: "social studies" },
      { type: "Subject", text: "math" },
      { type: "Subject", text: "language arts" },
    ],
    assignments: [],
    liveStreams: [],
    announcements: [],
  };

  componentDidMount() {
    axios.get("/assignments.json").then((response) => {
      let assignments = response.data;
      if (!assignments) {
        return;
      } else {
        let updatedAssignments = Object.values(assignments);
        this.setState({ assignments: updatedAssignments });
      }
    });

    axios.get("/announcements.json").then((response) => {
      let announcements = response.data;
      if (!announcements) {
        return;
      } else {
        let updatedAnnouncements = Object.values(announcements);
        this.setState({ announcements: updatedAnnouncements });
      }
    });

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
    const posts = [];

    for (let i = 0; i < this.state.assignments.length; i++) {
      posts.push(
        <StreamPost
          // key={}
          postType={this.state.assignments[i].postType}
          title={this.state.assignments[i].title}
          body={this.state.assignments[i].body}
          subject={this.state.assignments[i].subject}
        />
      );
    }

    for (let i = 0; i < this.state.announcements.length; i++) {
      posts.push(
        <StreamPost
          // key={}
          postType={this.state.announcements[i].postType}
          title={this.state.announcements[i].title}
          body={this.state.announcements[i].body}
          subject={this.state.announcements[i].subject}
        />
      );
    }

    for (let i = 0; i < this.state.liveStreams.length; i++) {
      posts.push(
        <StreamPost
          // key={}
          postType={this.state.liveStreams[i].postType}
          title={this.state.liveStreams[i].title}
          body={this.state.liveStreams[i].body}
          subject={this.state.liveStreams[i].subject}
        />
      );
    }

    console.log("updated posts:", this.state.posts);

    return (
      <div className={classes.StreamContent}>
        <div>
          <Filters
            filters={this.state.filters}
            text={this.state.filters.text}
          />
        </div>

        <br />

        <div>{posts}</div>
      </div>
    );
  }
}

export default StreamContent;
