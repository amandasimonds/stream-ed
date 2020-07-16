import React, { Component } from "react";

import classes from "./StreamPosts.css";
import StreamPost from "./StreamPost";

class StreamPosts extends Component {
  render() {
    return this.props.posts.map((post, key) => {
      return (
        <div key={key} className={classes.StreamPosts}>
          <StreamPost postType={post.type}>
            <strong>{post.title}</strong>
            {post.text}
          </StreamPost>
        </div>
      );
    });
  }
}

export default StreamPosts;
