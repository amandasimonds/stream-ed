import React from "react";
import { Link } from "react-router-dom";
import classes from "../LandingPage.css"

function SignUp(props) {
    return (
        <div className={classes.background}>
            <form className={classes.form}>
                <h2>Sign Up as {props.userType}</h2>
                <hr/>
                <input
                    className={classes.inputStyle}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={props.email}
                    onChange={props.handleInputChange} />
                <input
                    className={classes.inputStyle}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={props.password}
                    onChange={props.handleInputChange} />
                <br/>
                <button
                    onClick={props.handleLogin}
                    className={classes.button}><Link to="/stream">Sign Up</Link></button>
                    <br/>
                <Link to="/login">Already have an account? Log in here!</Link>

            </form>
        </div>

    );
}

export default SignUp;
