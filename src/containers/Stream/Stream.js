import React, { Component } from 'react';

import Aux from "../../hoc/Auxiliary"
import Nav from "../../components/Header/Header"
import Announcements from '../../components/Announcements/Announcements';
import Sidebar from '../../components/SideDrawer/SideDrawer';
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
    return (
      <Aux>
        <StreamContent/>
      </Aux>
    );
  }
}

export default Stream;
