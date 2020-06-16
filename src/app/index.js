import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Layout from "./components/layout/Layout";
import Stream from "../containers/Stream";
import LandingPage from "../components/LandingPage/LandingPage";
import LogIn from "../components/LandingPage/LogIn";
import SignUp from "../components/LandingPage/SignUp";
import NewAnnouncement from "../components/NewPost/NewAnnouncement";
import NewAssignment from "../components/NewPost/NewAssignment";
import NewLiveStream from "../components/NewPost/NewLiveStream";
import MyWork from "../containers/MyWork";
import LiveStreams from "../containers/LiveStreams/";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/stream" component={Stream} />
      <Route path="/newassignment" component={NewAssignment} />
      <Route path="/newannouncement" component={NewAnnouncement} />
      <Route path="/newlivestream" component={NewLiveStream} />
      <Route path="/mywork" component={MyWork} />
      <Route path="/livestreams" component={LiveStreams} />
    </div>
  </Router>
);

export default App;
