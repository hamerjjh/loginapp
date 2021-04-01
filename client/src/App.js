import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import User from "./components/User";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
