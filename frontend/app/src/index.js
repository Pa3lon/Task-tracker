import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
