import React, { Component } from "react";
import classes from "./Announcements.css";
import axios from "../../utils/axios";

class Announcements extends Component {
  state = {
    announcements: [],
  };

  componentDidMount() {
    axios.get("/announcements.json").then((response) => {
      let announcements = response.data;
      if (!announcements) {
        return;
      } else {
        let updatedAnnouncements = Object.values(announcements);
        this.setState({ announcements: updatedAnnouncements });
      }
    });
  }

  render() {
    const announcementsBox = [];

    for (let i = 0; i < this.state.announcements.length; i++) {
      announcementsBox.push(
        <div>
          <div key={this.state.announcements[i].title} className={classes.announcement}>
            {this.state.announcements[i].title}
            <br />
            {this.state.announcements[i].date}
          </div>
          <br />
        </div>
      );
    }

    return (
      <div className={classes.announcements}>
        <h1>Announcements</h1>
        <div>{announcementsBox}</div>
      </div>
    );
  }
}

export default Announcements;
