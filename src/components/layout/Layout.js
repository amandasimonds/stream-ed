import React, { Component } from "react";

import classes from "./Layout.css"
import Aux from "../../hoc/Auxiliary"
import Header from "../Header/Header"
import SideDrawer from "../SideDrawer/SideDrawer"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"
class Layout extends Component {

    state = {
        email: "",
        password: "",
        loggedIn: false,
        user: {
            name: "Amanda",
            type: "Student",
            homeroom: "Mrs. Wellman"
        },
        announcement1: "New Zoom Rules",
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
    } )
};

    render() {
        return (
            <Aux>
                <SideDrawer 
                open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Header
                    name={this.state.user.name}
                    type={this.state.user.type}
                    homeroom={this.state.user.homeroom} 
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;