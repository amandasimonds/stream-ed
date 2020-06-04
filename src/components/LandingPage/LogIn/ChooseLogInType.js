import React from "react";
import classes from "../LandingPage.css";
import {Link} from "react-router-dom"

import "../LandingPage.css"

const chooseLogInType = (props) => (
    <div className={classes.background}>

    <div className={[classes.container, classes.types].join(" ")}>
        <Link to="/logIn"><button className={classes.button}>I'm a Teacher</button></Link>
        <Link to="/logIn"><button className={classes.button}>I'm a Student</button></Link>
        <Link to="/logIn"><button className={classes.button}>I'm a Parent</button></Link>
    </div>
    </div>
)

export default chooseLogInType