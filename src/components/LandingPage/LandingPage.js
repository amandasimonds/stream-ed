import React from "react";
import classes from "./LandingPage.css"
import {Link} from "react-router-dom"
import "./LandingPage.css"
import "../../index.css"
import AnimatedBG from "../UI/AnimatedBG/AnimatedBG"
import animatedBG from "../UI/AnimatedBG/AnimatedBG";

const landingPage = (props) => {
    return(
        <div>

        <AnimatedBG/>
    <div className={classes.background}>
        <div className={classes.container}>

      <h1>Stream Ed</h1>
      <p>Streamline learning and teaching, so we can focus on meaningful, engaging education.</p>
      <button className={classes.button}>Log In</button>
      <button className={classes.button}>Sign Up <i class="fab fa-suse"></i></button>
        </div>
    </div>
        </div>
    )
    }

export default landingPage