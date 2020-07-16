import React, {Component} from "react";
import classes from "./TagsInput.css"

class TagsInput extends Component {
    state = {
        tags:[]
    }

    render(){
        
        const addTags = event => {
            if (event.key === "Enter" && event.target.value !== "") {
                this.props.addTags.push(event.target.value);
                event.target.value=""
                console.log(this.state.tags)
            }
        }
        
        const removeTags = index => {
            this.state.tags.filter([(tag => this.state.tags.indexOf(tag) !== index)])
        }
    
        return(
            <div classname={classes.TagsInput}>
                <ul>
                    {this.state.tags.map((tag, index) => (
                        <li key={index}>
                            <span>{this.state.tags}</span>
                            <i 
                                className="material-icons"
                                onClick={()=> removeTags(index)}
                            >close</i>
                        </li>
                    ))}
                </ul>
                <input 
                    type="text"
                    placeholder="add tags here"
                    onKeyUp={selectedTags => this.props.addTagsHandler(selectedTags)}
                />
            </div>
        )
    }
}

export default TagsInput;