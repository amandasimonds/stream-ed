import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom"

// import Layout from "./components/layout/Layout";
import Stream from "./containers/Stream/Stream";
import LandingPage from "./components/LandingPage/LandingPage"
import ChooseLogInType from "./components/LandingPage/LogIn/ChooseLogInType"
import ChooseSignUpType from "./components/LandingPage/SignUp/ChooseSignUpType"
import LogIn from "./components/LandingPage/LogIn/LogIn"
import SignUp from "./components/LandingPage/SignUp/SignUp"
import NewAnnouncement from "./components/NewPost/NewAnnouncement/NewAnnouncement"
import NewAssignment from "./components/NewPost/NewAssignment/NewAssignment"

class App extends Component {

  state={
    loggedIn: false,
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Route path="/" exact component={LandingPage}/>
        <Route path="/chooselogintype" component={ChooseLogInType}/>
        <Route path ="/choosesignuptype" component={ChooseSignUpType}/>
        <Route path ="/login" component={LogIn}/>
        <Route path ="/signup" component={SignUp}/>
         <Route path ="/stream" component={Stream}/>

         <Switch>
         <Route path ="/newassignment" component={NewAssignment}/>
        <Route path ="/newannouncement" component={NewAnnouncement}/>
         </Switch>
       
      </div>
      </HashRouter>
    );
  }
}

export default App;
