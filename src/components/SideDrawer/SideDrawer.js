import React from 'react';

import classes from "./SideDrawer.css";
import Aux from "../../hoc/Auxiliary";
import Backdrop from "../UI/Backdrop/Backdrop";
import Calendar from "./Calendar/Calendar";

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(" ")}>
        <Calendar/>
            <div className={classes.Announcements}>   
            
            Announcements
                </div>
        </div>
        </Aux>
    )
};

export default SideDrawer;