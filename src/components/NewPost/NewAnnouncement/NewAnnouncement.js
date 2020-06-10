import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import classes from "../NewPost.css"
import Layout from "../../layout/Layout"
import axios from "../../../axios-assignments"

class NewAnnouncement extends Component {
    state = {
        title: "",
        content: "",
        author: "",
        postType: "announcement",
        submitted: false,
        date: ""
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            date: this.state.date,
            postType: "announcement"
        }

        axios.post("/announcements.json", data)
            .then(response => {
                console.log(response)
                this.setState({ submitted: true })
            })
            .catch(error =>console.log(error))
    }

    render() {
        let redirect = null
        if (this.state.submitted) {
            alert(`Your announcement, "${this.state.title}" was posted!`)
            redirect = <Redirect to="/stream" />
        }
        return (
            <Layout>

                <div className={classes.NewPost}>
                    {redirect}
                    <h1>Create an Announcement</h1>
                    <hr />
                    <input
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })} />
                    <textarea
                        rows="4"
                        placeholder="Type your announcement here"
                        value={this.state.content}
                        onChange={(event) => this.setState({ content: event.target.value })} />

                Set a date for this announcement? (Optional)
                <input
                        type="date"
                        value={this.state.date}
                        onChange={(event) => this.setState({ date: event.target.value })} />
                    <hr />
                    <button onClick={this.postDataHandler}>Create Announcement</button>
                </div>

            </Layout>
        )
    }
}

export default NewAnnouncement;