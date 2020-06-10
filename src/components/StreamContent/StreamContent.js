import React, { Component } from "react";

import axios from "../../axios"

import classes from "./StreamContent.css"
import Filters from "./Filters/Filters"
// import StreamPosts from "./StreamPosts/StreamPosts";
import StreamPost from "./StreamPosts/StreamPost/StreamPost"

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
        posts2: [
            { type: "Assignment", title: "Social Studies Assignment", text: "Complete the world adventures program at this link: www.worldadventures.com" },
            { type: "Announcement", title: "Talent Show", text: "Sign up for the talent show here" },
            { type: "LiveStream", title: "Language Arts Live Seminar", text: "Required: Participation in LA Live Stream May 20" },
            { type: "Assignment", title: "Art Assignment", text: "Sketch 3 thumbnails about your personal narrative project" }
        ],
        posts:[],
        assignments:[],
        liveStreams:[],
        announcements:[]
    }

    componentDidMount() {
        axios.get("/assignments.json")
            .then(response => {
                let assignments = response.data;
                if(!assignments){
                    return
                } else {
                let updatedAssignments = Object.values(assignments)
                this.setState({ assignments: updatedAssignments })
                }
            })
        
            axios.get("/announcements.json")
            .then(response => {
                let announcements = response.data;
                if(!announcements){
                    return
                } else {
                let updatedAnnouncements = Object.values(announcements)
                this.setState({ announcements: updatedAnnouncements })
                }
            })
        
            axios.get("/liveStreams.json")
            .then(response => {
                let liveStreams = response.data;
                if(!liveStreams){
                    return
                } else {
                let updatedLiveStreams = Object.values(liveStreams)
                this.setState({ liveStreams: updatedLiveStreams })
                }
            })
    };

    render() {

        for (let i = 0; i < this.state.assignments.length; i++) {
            this.state.posts.push(
                <StreamPost
                    // key={}
                    postType={this.state.assignments[i].postType}
                    title={this.state.assignments[i].title}
                    body={this.state.assignments[i].body}
                    subject={this.state.assignments[i].subject} />
            )
        }

        for (let i = 0; i < this.state.announcements.length; i++) {
            this.state.posts.push(
                <StreamPost
                    // key={}
                    postType={this.state.announcements[i].postType}
                    title={this.state.announcements[i].title}
                    body={this.state.announcements[i].body}
                    subject={this.state.announcements[i].subject} />
            )
        }

        for (let i = 0; i < this.state.liveStreams.length; i++) {
            this.state.posts.push(
                <StreamPost
                    // key={}
                    postType={this.state.liveStreams[i].postType}
                    title={this.state.liveStreams[i].title}
                    body={this.state.liveStreams[i].body}
                    subject={this.state.liveStreams[i].subject} />
            )
        }

        console.log("updated posts:", this.state.posts)

        return (
            <div className={classes.StreamContent}>
                <div>
                    <Filters
                        filters={this.state.filters}
                        text={this.state.filters.text} />
                </div>

                <br />

                <div>
                    {this.state.posts}
                </div>

            </div>

            

        )
    }
}

export default StreamContent