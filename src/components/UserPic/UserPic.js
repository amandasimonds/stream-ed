import React from "react";

import userPicture from "../../assets/images/userpicture.jpg"
import classes from "./UserPic.css"

const userPic = (props) => (
    <div className={classes.UserPic}>
        <img src={userPicture} alt="userPic"/>
    </div>
);

export default userPic