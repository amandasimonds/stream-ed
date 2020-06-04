import React from "react";
import { Link } from "react-router-dom";
import classes from "../LandingPage.css"

function Login(props) {
    return (
        <div className={classes.background}>
            <form className={classes.form}>
                <h2>Log in</h2>
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
                    className={classes.button}><Link to="/stream">Login</Link></button>
                    <br/>
                <Link to="/signup">Dont have an account? Sign up here!</Link>

            </form>
        </div>

    );
}

export default Login;
