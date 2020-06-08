import React from "react";

import { Link } from "react-router-dom"
import classes from "./Nav.css"

const Nav = (props) => (
    <div className={classes.CategoryContainer}>
        <Link to="/stream">
            <button className={classes.Category}>Class Stream</button>
        </Link>

        <Link to="/mywork">
            <button className={classes.Category}>My Work</button>
        </Link>
        
        <Link to="/livestreams">
        <button className={classes.Category}>Live Streams</button>
        </Link>
    </div>
);

export default Nav;

