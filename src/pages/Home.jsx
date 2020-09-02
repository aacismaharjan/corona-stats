import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "../components";
import Section from "../components/Section";

import { withDataConsumer } from "../Context";

const Home = ({ context: data }) => {
  return (
    <React.Fragment>
      <Cards data={data} />
      <Section title="Search Country">
        <CountryPicker data={data} />
        <Chart data={data} />
      </Section>
    </React.Fragment>
  );
};

export default withDataConsumer(Home);
