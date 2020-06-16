import React from "react";
import classes from "./HeaderItems.css";
import homeIcon from "../../../assets/images/homeicon.png";
import UserPic from "../../UserPic";
import DrawerToggle from "../../SideDrawer/DrawerToggle";
import { Link } from "react-router-dom";

const headerItems = (props) => (
  <div className={classes.HeaderItems}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.DesktopOnly}>{props.name}</div>
    <div className={classes.UserPic}>
      <UserPic />
    </div>
    <div className={classes.DesktopOnly}>{props.type}</div>
    <div className={classes.DesktopOnly}>
      <img
        src={homeIcon}
        style={{ height: "18px", display: "inline-block" }}
        alt="home"
      ></img>{" "}
      {props.homeroom}
    </div>
    <div>
      <Link to="/">Log Out</Link>
    </div>
  </div>
);

export default headerItems;
