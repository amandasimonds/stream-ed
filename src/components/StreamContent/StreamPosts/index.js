import React, { Component } from "react";
import StreamPost from "./StreamPost";

class StreamPosts extends Component {
  render() {
    return this.props.posts.map((post, key) => {
      return (
          <StreamPost 
            key={key}
            postType={post.type}>
            <strong>{post.title}</strong>
            {post.text}
          </StreamPost>
      );
    });
  }
}

export default StreamPosts;
