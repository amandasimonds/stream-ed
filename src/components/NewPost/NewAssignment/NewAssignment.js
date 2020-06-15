import React, { Component } from "react";

import axios from "../../../axios";
import { Redirect } from "react-router-dom";
import classes from "../NewPost.css";

import Layout from "../../layout/Layout";
import TagsInput from "../TagsInput.js";

class NewAssignment extends Component {
    state = {
        postType: "Assignment",
        date: "",
        title: "",
        content: "",
        author: "",
        assignmentType: "",
        subject: "",
        submitted: false, 
        tags:[]
    }

    constructor(props){
      super(props)
      this.addTagsHandler = this.addTagsHandler.bind(this)
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
      postType: "assignment",
      tags: this.state.tags
    };
    axios
      .post("/assignments.json", data)
      .then((response) => {
        console.log(response);
        this.setState(
          { submitted: true }
          );
        this.state.tags.push(data.subject, data.postType, data.assignmentType, data.author)
      })
      .catch((error) => console.log(error));
      console.log("assignments state", this.state)
  };

  addTagsHandler(selectedTags){
    this.state.tags.push(selectedTags);
    console.log(this.state.tags)
    }

  render() {

    let redirect = null;
    if (this.state.submitted) {
      alert(`Your assignment, "${this.state.title}" was posted!`);
      redirect = <Redirect to="/stream" />;
    }
    return (
      <Layout>
        <div className={classes.NewPost}>
          {redirect}
          <h1>Create an Assignment</h1>
          <hr />
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            onChange={(event) => {
              this.setState({ subject: event.target.value })
              }
            }
          />
          <br />
          Choose Assignment Type:
          <div>
            <select
              required
              id="assignmentType"
              onChange={(event) => {
                this.setState(
                  { assignmentType: event.target.value }
                );
              }}
            >
              <option></option>
              <option value="Classwork">Classwork</option>
              <option value="Homework">Homework</option>
              <option value="Test">Test</option>
            </select>
          </div>
          <br />
          <textarea
            rows="4"
            placeholder="Content/Instructions"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
          Assignment Due Date:
          <input
            type="date"
            value={this.state.date}
            onChange={(event) => this.setState({ date: event.target.value })}
          />
          {/* <TagsInput 
            addTagsHandler={(event) => this.addTagsHandler(event)}
            /> */}
          <hr />
          <button onClick={this.postDataHandler}>Create Assignment</button>
        </div>
      </Layout>
    );
  }
}

export default NewAssignment;
