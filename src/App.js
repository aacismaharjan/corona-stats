import React, { Component } from "react";
import Home from "./pages/Home";
import "./App.css";
import { Navbar, Footer } from "./components";
import { fetchData } from "./api";
import { Switch, Route } from "react-router-dom";
import MoreInfo from "./pages/MoreInfo";

export default class App extends Component {
  state = {
    defaultData: {},
    country: "",
    loading: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    if (fetchedData)
      this.setState({ defaultData: fetchedData, loading: false });
  }

  handleCountryChange = async (country) => {
    this.setState({ loading: true });
    const fetchedData = await fetchData(country);
    if (fetchedData)
      this.setState({ defaultData: fetchedData, country, loading: false });
  };

  render() {
    const { defaultData, country, loading } = this.state;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                defaultData={defaultData}
                handleCountryChange={this.handleCountryChange}
                country={country}
                loading={loading}
              />
            )}
          />
          <Route exact path="/more-info" component={MoreInfo} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
