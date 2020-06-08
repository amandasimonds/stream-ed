import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

axios.defaults.baseURL = "https://stream-ed.firebaseio.com/";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json"

//logs request configuration
axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config, if you want to such as adding headers
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(request => {
    console.log(request);
    //Edit request config, if you want to such as adding headers
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
