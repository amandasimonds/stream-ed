import React from 'react';
import {Link} from "react-router-dom";

import classes from "./SideDrawer.css";
import Aux from "../../hoc/Auxiliary";
import Backdrop from "../UI/Backdrop/Backdrop";
import Announcements from "../Announcements/Announcements"
import Button from "../UI/Button/Button"

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(" ")}>
            <Announcements/>
            <Link to="/newassignment"><Button btnType="Success" style={{width:"200px"}}>Create Assignment</Button></Link>
            <Link to="/newannouncement"><Button btnType="Success" style={{width:"200px"}}>Create Announcement</Button></Link>
            <Link to="/newlivestream"><Button btnType="Success" style={{width:"200px"}}>Create a Live Stream</Button></Link>
        </div>
        </Aux>
    )
};

export default SideDrawer;