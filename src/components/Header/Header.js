import React from 'react';
import classes from "./Header.css";
import homeIcon from "../../assets/images/homeicon.png";
import UserPic from "../UserPic/UserPic"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Header = (props) => (
    
        <div className={classes.Header}>
            <DrawerToggle
                clicked={props.drawerToggleClicked}/>
            <div>{props.name}</div> 
            <div className={classes.UserPic}><UserPic /></div>
            <div>{props.type}</div> 
            <div><img src={homeIcon} style={{height:"18px", display:"inline-block"}} alt="home"></img> {props.homeroom}</div>
            <div>Log Out</div>
        </div>
    
);

export default Header;