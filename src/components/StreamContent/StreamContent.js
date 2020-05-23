import React, { Component } from "react";

import classes from "./StreamContent.css"
import Filters from "./Filters/Filters"

class StreamContent extends Component {

    state = {
        filters: {
            class: 1,
            Announcements: 1,
            Teacher: 2
        }
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
                    filters={this.state.filters} />
            </div>
        )
    }
}

export default StreamContent