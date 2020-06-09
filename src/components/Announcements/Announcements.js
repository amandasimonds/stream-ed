import React, {Component} from 'react';
import classes from "./Announcements.css";

class Announcements extends Component {

    state = {
        announcements:[
            "Talent Show 3/12",
            "Social Studies Project due 4/2"
        ]
    }

    render(){  
        let announcements = (this.state.announcements)
            .map(key => {
                return <div className={classes.announcement}>{key}</div>
            })
            console.log("mapped announcements", announcements)

        return (
            <div className={classes.announcements}>
            <h1>Announcements</h1>
            <p>{announcements}</p>
        </div>
    )
}
};

export default Announcements;