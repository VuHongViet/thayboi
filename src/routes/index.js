import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ThayBoi from "../containers/ThayBoi";
function NoMatch({ location }) {
  return (
    <div className="notfound">
      <h2>404!</h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ThayBoi} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
