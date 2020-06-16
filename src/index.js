import React from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext } from "./providers";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
