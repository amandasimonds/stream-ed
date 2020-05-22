import React, { Component } from "react";

import classes from "./Layout.css"
import Aux from "../../hoc/Auxiliary"
import Header from "../Header/Header"
import SideDrawer from "../SideDrawer/SideDrawer"

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
        announcement1: "New Zoom Rules"
    }

    render() {
        return (
            <Aux>
                <SideDrawer/>
                <Header
                    name={this.state.user.name}
                    type={this.state.user.type}
                    homeroom={this.state.user.homeroom} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;