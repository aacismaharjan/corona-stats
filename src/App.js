import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { PersistentDrawerLeft } from "./components/AppBar";
import { Footer } from "./components/index";
import Home from "./pages/Home";
import MoreInfo from "./pages/MoreInfo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <PersistentDrawerLeft>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/more-info" component={MoreInfo} />
        </Switch>
        <Footer />
      </PersistentDrawerLeft>
    );
  }
}

export default App;
