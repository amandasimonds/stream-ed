import React from "react";
import classes from "./LandingPage.css"
import {Link} from "react-router-dom"
import {Route} from "react-router"
import "./LandingPage.css"
import "../../index.css"

import AnimatedBG from "../UI/AnimatedBG/AnimatedBG"
import ChooseLogInType from "./LogIn/ChooseLogInType";
import ChooseSignUpType from "./SignUp/ChooseSignUpType"

const landingPage = (props) => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"100px"
        }}>

        <AnimatedBG/>
        <div className={classes.container}>

      <h1>Stream Ed</h1>
      <p>Streamline learning and teaching, so you can focus on meaningful, engaging education.</p>
      <Link to="/chooselogintype"><button className={classes.button}>Log In</button></Link>
      <Link to="/choosesignuptype"><button className={classes.button}>Sign Up <i class="fab fa-suse"></i></button></Link>
        </div>
    </div>
    )
    }

export default landingPage