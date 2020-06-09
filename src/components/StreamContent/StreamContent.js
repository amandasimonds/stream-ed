import React, { Component } from "react";
import {Route} from "react-router-dom"

import classes from "./StreamContent.css"
import Filters from "./Filters/Filters"
import StreamPosts from "./StreamPosts/StreamPosts";
import MyWork from "../../containers/MyWork/MyWork"
// import Layout from "../layout/Layout"

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
        posts: [
            { type: "Assignment", title: "Social Studies Assignment", text: "Complete the world adventures program at this link: www.worldadventures.com" },
            { type: "Announcement", title: "Talent Show", text: "Sign up for the talent show here" },
            { type: "LiveStream", title: "Language Arts Live Seminar", text: "Required: Participation in LA Live Stream May 20" },
            { type: "Assignment", title: "Art Assignment", text: "Sketch 3 thumbnails about your personal narrative project" }
        ]
    }
    render() {
        return (
            <div className={classes.StreamContent}>

                <div>
                    <Filters
                        filters={this.state.filters}
                        text={this.state.filters.text} />
                </div>

                <br />

                <div>
                    <StreamPosts
                        posts={this.state.posts}
                        title={this.state.posts.title}
                        text={this.state.posts.text} />
                </div>

                <Route path="/mywork" component={MyWork}/>

            </div>

            

        )
    }
}

export default StreamContent