import React, {Component} from "react";

import classes from "./StreamPost.css"

class StreamPost extends Component {
    
    clickPostHandler = (id) => {
        console.log("streampost", this.props)
    }

render(){
    return(
    <div 
    onClick={this.clickPostHandler}
    className={[classes.StreamPost, classes[this.props.postType]]
    .join(" ")}>
        <strong>{this.props.title}</strong>
        <hr/>
        {this.props.body}
        <div className={classes.TagsContainer}>
            {this.props.tags}
        </div>
        <div className={classes.EditButton}>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
    </div>
    )
}
}

export default StreamPost