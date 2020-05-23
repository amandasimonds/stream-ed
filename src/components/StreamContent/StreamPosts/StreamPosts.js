import React, {Component} from "react";

import classes from "./StreamPosts.css"
import StreamPost from "./StreamPost/StreamPost"

class StreamPosts extends Component{
    render() {
        return this.props.posts.map((post, index) => {
            return (
                <div className={classes.StreamPosts}>
                    <StreamPost
                        postType={post.type}>
                            <strong>{post.title}</strong>
                            {post.text}
                        </StreamPost>
                </div>
            )
        })

    }
} 

export default StreamPosts