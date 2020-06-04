import React, { Component } from 'react';
import {Route} from "react-router"
import Aux from "../../hoc/Auxiliary"
import StreamContent from '../../components/StreamContent/StreamContent';
import LandingPage from "../../components/LandingPage/LandingPage"

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
        <Route path="/" exact component={LandingPage}/>
        <Route path ="/stream" exact component={StreamContent}/>
      </Aux>
    );
  }
}

export default Stream;
