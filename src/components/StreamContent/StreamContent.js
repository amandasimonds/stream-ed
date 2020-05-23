import React, { Component } from "react";

import classes from "./StreamContent.css"
import Filters from "./Filters/Filters"

class StreamContent extends Component {

    state = {
        filters: [
            {type: "Subject", text: "social studies"},
            {type: "Announcement", text: "announcements"},
            {type: "Teacher", text: "teacher"},
            {type: "Subject", text: "math"},
            {type: "Subject", text: "language arts"},
        ]
    }
    render() {
        return (
            <div className={classes.StreamContent}>
                <div className={classes.CategoryContainer}>
                <button className={classes.Category}>Class Stream</button>
                <button className={classes.Category}>My Work</button>
                <button className={classes.Category}>Live Streams</button>
                </div>
                <Filters
                    filters={this.state.filters}
                    text={this.state.filters.text} />
            </div>
        )
    }
}

export default StreamContent