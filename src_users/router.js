import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import MainUserComponent from './components/MainUserComponent';


// build the router
const router = (
  <Router history={history}>
    <Route path="/" component={MainUserComponent}>
      
    </Route>
  </Router>
);

// export
export { router }
