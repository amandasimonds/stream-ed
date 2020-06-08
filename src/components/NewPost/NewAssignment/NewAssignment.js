import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import classes from "../NewPost.css"

import Layout from "../../layout/Layout"

class NewAssignment extends Component {
    state = {
        title: "",
        content: "",
        author: "",
        type: "assignment",
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
            author: this.state.author
        }
        axios.post("/posts", data)
            .then(response => {
                console.log(response)
                this.setState({ submitted: true })
            })
    }

    render() {
        let redirect = null
        if (this.state.submitted) {
            redirect = <Redirect to="/stream" />
        }
        return (
            <Layout>

                <div className={classes.NewPost}>
                    {redirect}
                    <h1>Create an Assignment</h1>
                    <hr />
                    <input type="text" placeholder="Title" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                    <textarea rows="4" placeholder="Content/Instructions" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                Assignment Due Date:
                <input
                        type="date"
                        value={this.state.date}
                        onChange={(event) => this.setState({ date: event.target.value })} />
                    <hr />
                    <button onClick={this.postDataHandler}>Create Assignment</button>
                </div>

            </Layout>
        )
    }
}

export default NewAssignment;