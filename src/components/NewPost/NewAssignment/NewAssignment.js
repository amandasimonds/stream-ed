import React, { Component } from "react";
import axios from "../../../axios"
import { Redirect } from "react-router-dom"
import classes from "../NewPost.css"

import Layout from "../../layout/Layout"

class NewAssignment extends Component {
    state = {
        title: "",
        content: "",
        author: "",
        postType: "assignment",
        submitted: false,
        date: "",
        subject: "",
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            subject: this.state.subject,
            assignmentType: this.state.assignmentType,
            date: this.state.date,
            postType: "assignment"
        }
        axios.post("/assignments.json", data)
            .then(response => {
                console.log(response)
                this.setState({ submitted: true })
            })
            .catch(error =>console.log(error))
    }

    render() {
        let redirect = null
        if (this.state.submitted) {
            alert(`Your assignment, "${this.state.title}" was posted!`)
            redirect = <Redirect to="/stream" />
        }
        return (
            <Layout>

                <div className={classes.NewPost}>
                    {redirect}
                    <h1>Create an Assignment</h1>
                    <hr />
                    <input type="text" placeholder="Title" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                    <input type="text" placeholder="Subject" value={this.state.subject} onChange={(event) => this.setState({ subject: event.target.value })} />

                    {/* <div>
                    <input type="radio" name="assignmentType" id="Classwork" value={this.state.assignmentType} onChange={(event) => this.setState({ assignmentType: event.target.value })} />
                    <label for="Classwork">Classwork</label>
                    <input type="radio" name="assignmentType" id="Homework" value={this.state.assignmentType} onChange={(event) => this.setState({ assignmentType: event.target.value })} />
                    <label for="Homework">Homework</label>
                    <input type="radio" name="assignmentType" id="Test" value={this.state.assignmentType} onChange={(event) => this.setState({ assignmentType: event.target.value })} />
                    <label for="Test">Test</label>
                    </div> */}

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