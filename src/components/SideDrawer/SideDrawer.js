import React from 'react';

import classes from "./SideDrawer.css";
import Aux from "../../hoc/Auxiliary";
import Backdrop from "../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(" ")}>
            Announcements
            Calendar
        </div>
        </Aux>
    )
};

export default SideDrawer;