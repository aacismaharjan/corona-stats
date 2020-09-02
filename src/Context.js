import React, { Component } from "react";
import { fetchData } from "./api";
const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    data: {},
    country: "",
    loading: true,
    handleCountryChange: (country) => this.handleCountryChange(country),
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    if (fetchedData) this.setState({ data: fetchedData, loading: false });
  }

  handleCountryChange = async (country) => {
    this.setState({ loading: true });
    const fetchedData = await fetchData(country);
    if (fetchedData)
      this.setState({ data: fetchedData, country, loading: false });
  };

  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export function withDataConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <DataConsumer>
        {(value) => <Component {...props} context={value} />}
      </DataConsumer>
    );
  };
}

export { DataProvider, DataConsumer, DataContext };
