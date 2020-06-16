import React from 'react';
import classes from "./Header.css";

const Header = (props) => (
    
        <div className={classes.Header}>
                {props.children}
        </div>
    
);

export default Header;