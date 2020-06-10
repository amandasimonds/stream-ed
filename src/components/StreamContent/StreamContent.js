import React, { Component } from "react";

import axios from "../../axios"

import classes from "./StreamContent.css"
import Filters from "./Filters/Filters"
import StreamPosts from "./StreamPosts/StreamPosts";

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
        ],
        posts2:[]
    }

    componentDidMount() {
        axios.get("/assignments.json")
            .then(response => {
                let assignments = response.data;
                let updatedAssignments = Object.values(assignments)
                this.setState({ assignments: updatedAssignments })
            })
        
            axios.get("/announcements.json")
            .then(response => {
                let announcements = response.data;
                let updatedAnnouncements = Object.values(announcements)
                this.setState({ assignments: updatedAnnouncements })
            })
        
            axios.get("/liveStreams.json")
            .then(response => {
                let liveStreams = response.data;
                let updatedLiveStreams = Object.values(liveStreams)
                this.setState({ assignments: updatedLiveStreams })
            })
    };


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

            </div>

            

        )
    }
}

export default StreamContent