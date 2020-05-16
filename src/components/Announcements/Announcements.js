import React from 'react';
import "./Announcements.css";

const Announcements = (props) => {
    return (
        <div className="announcements">
            <h1>Announcements</h1>
            <p>{props.announcement1}</p>
        </div>
    )
};

export default Announcements;