import React, { Component } from "react";
import { fetchCountries } from "../api";

export default class CountryPicker extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const data = await fetchCountries();
    if (data) {
      this.setState({ countries: data });
    }
  }

  render() {
    const { countries } = this.state;
    const { handleCountryChange } = this.props;

    return (
      <form>
        <select
          name="country"
          className="countrypicker"
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="">Global</option>
          {countries.map((country, index) => {
            return (
              <option value={country} key={index}>
                {country}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}
