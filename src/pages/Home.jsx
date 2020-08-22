import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "../components";
import Section from "../components/Section";

export default class Home extends Component {
  render() {
    const { defaultData, handleCountryChange, country, loading } = this.props;
    return (
      <div>
        <Cards defaultData={defaultData} country={country} loading={loading} />
        <Section title="Search Country">
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart
            defaultData={defaultData}
            country={country}
            loading={loading}
          />
        </Section>
      </div>
    );
  }
}
