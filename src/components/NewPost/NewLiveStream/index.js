import React, { Component } from "react";
import axios from "../../../utils/axios";
import { Redirect } from "react-router-dom";
import classes from "../NewPost.css";

import Layout from "../../layout";

class NewLiveStream extends Component {
  state = {
    postType: "LiveStream",
    title: "",
    content: "",
    author: "",
    date: "",
    time: "",
    subject: "",
    submitted: false,
  };

  componentDidMount() {
    console.log(this.props);
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
      subject: this.state.subject,
      date: this.state.date,
      time: this.state.time,
      postType: "liveStream",
    };
    axios
      .post("/liveStreams.json", data)
      .then((response) => {
        console.log(response);
        this.setState({ submitted: true });
      })
      .catch((error) => console.log(error));
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      alert(`Your Live Stream, "${this.state.title}" was posted!`);
      redirect = <Redirect to="/stream" />;
    }
    return (
      <Layout>
        <div className={classes.NewPost}>
          {redirect}
          <h1>Create a Live Stream</h1>
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
            onChange={(event) => this.setState({ subject: event.target.value })}
          />
          Live Stream Time:
          <input
            type="time"
            id="appt"
            name="appt"
            min="08:00"
            max="18:00"
            required
            onChange={(event) => this.setState({ time: event.target.value })}
          ></input>
          <textarea
            rows="4"
            placeholder="Content/Instructions"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
          Live Stream Date:
          <input
            type="date"
            value={this.state.date}
            onChange={(event) => this.setState({ date: event.target.value })}
          />
          <hr />
          <button onClick={this.postDataHandler}>Create Live Stream</button>
        </div>
      </Layout>
    );
  }
}

export default NewLiveStream;
