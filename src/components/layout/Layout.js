import React, { Component } from "react";

import classes from "./Layout.css"
import Aux from "../../hoc/Auxiliary"
import Header from "../Header/Header"
import SideDrawer from "../SideDrawer/SideDrawer"
import HeaderItems from "../Header/HeaderItems/HeaderItems"
import Nav from "./Nav/Nav"
// import StreamContent from "../StreamContent/StreamContent";
// import NewAnnouncement from "../NewPost/NewAnnouncement/NewAnnouncement"
// import NewAssignment from "../NewPost/NewAssignment/NewAssignment"

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
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    };

    render() {
        return (
            <Aux>
                <SideDrawer
                    open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <Header>
                    <HeaderItems
                        drawerToggleClicked={this.sideDrawerToggleHandler}
                        name={this.state.user.name}
                        type={this.state.user.type}
                        homeroom={this.state.user.homeroom} />
                </Header>

                <Nav/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>
        )
    }
}

export default Layout;