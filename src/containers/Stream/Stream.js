import React, { Component } from 'react';
import {Route, Switch} from "react-router"
import Aux from "../../hoc/Auxiliary"

import Layout from "../../components/layout/Layout"
import StreamContent from '../../components/StreamContent/StreamContent';
import NewAssignment from '../../components/NewPost/NewAssignment/NewAssignment';
import NewAnnouncement from '../../components/NewPost/NewAnnouncement/NewAnnouncement';
import MyWork from "../MyWork/MyWork"

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
        <Layout>

        <Switch>
        <Route path ="/stream" component={StreamContent}/>
        <Route path ="/newassignment" component={NewAssignment}/>
        <Route path ="/newannouncement" component={NewAnnouncement}/>
        <Route path ="/mywork" component={MyWork}/>
        </Switch>

        </Layout>
      </Aux>
    );
  }
}

export default Stream;
