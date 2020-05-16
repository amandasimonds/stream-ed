import React, { Component } from 'react';

import Layout from "./components/layout/Layout";
import Stream from "./containers/Stream/Stream"

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <Stream />
       </Layout>
      </div>
    );
  }
}

export default App;
