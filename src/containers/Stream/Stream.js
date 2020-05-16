import React, { Component } from 'react';

import Aux from "../../hoc/Auxiliary"
import Nav from "../../components/Nav/Nav"
import Announcements from '../../components/Announcements/Announcements';
import Sidebar from '../../components/Sidebar/Sidebar';
import StreamContent from '../../components/StreamContent/StreamContent';

class Stream extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    user : {
      name: "Amanda",
      type: "Student",
      homeroom: "Mrs. Wellman"
    },
    announcement1: "New Zoom Rules"
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      borderRadius: "10px",
      cursor: "pointer"
    };

    return (
      <Aux>
        <Nav 
        name={this.state.user.name}
        type={this.state.user.type}
        homeroom={this.state.user.homeroom}/>
        <h1>Welcome to Stream Ed, {this.state.user.name}!</h1>
        <StreamContent/>
        
      </Aux>
    );
  }
}

export default Stream;
