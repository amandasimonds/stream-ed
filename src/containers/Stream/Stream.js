import React, { Component } from 'react';
import {Route} from "react-router"
import Aux from "../../hoc/Auxiliary"
import StreamContent from '../../components/StreamContent/StreamContent';
import LandingPage from "../../components/LandingPage/LandingPage"
import ChooseLogInType from "../../components/LandingPage/LogIn/ChooseLogInType"
import ChooseSignUpType from "../../components/LandingPage/SignUp/ChooseSignUpType"
import LogIn from "../../components/LandingPage/LogIn/LogIn"
import SignUp from "../../components/LandingPage/SignUp/SignUp"

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
        <Route path="/chooselogintype" component={ChooseLogInType}/>
        <Route path ="/choosesignuptype" component={ChooseSignUpType}/>
        <Route path ="/login" component={LogIn}/>
        <Route path ="/signup" component={SignUp}/>
      </Aux>
    );
  }
}

export default Stream;
