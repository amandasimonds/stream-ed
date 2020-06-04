import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"

import Layout from "./components/layout/Layout";
import Stream from "./containers/Stream/Stream";

class App extends Component {

  state={
    loggedIn: false,
  }

  render() {
    return (
      <HashRouter>
      <div>
    
         <Stream />
       
      </div>
      </HashRouter>
    );
  }
}

export default App;
