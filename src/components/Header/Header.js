import React from 'react';
import classes from "./Header.css";
import homeIcon from "../../assets/images/homeicon.png"

const Header = (props) => (
    
        <div className={classes.Header}>
            <div>{props.name}</div>
            <div>{props.type}</div> 
            <div><img src={homeIcon} style={{height:"18px", display:"inline-block"}} alt="home"></img> {props.homeroom}</div>
            <div>Log Out</div>
        </div>
    
);

export default Header;