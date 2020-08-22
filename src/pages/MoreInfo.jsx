import React, { Component } from "react";
import Section from "../components/Section";

export default class MoreInfo extends Component {
  render() {
    return (
      <Section isShade title="About Me">
        <div className="about-section">
          <p>
            Aashish Maharjan connects online brands to their target audiences
            for the perfect communicating experience. At the Gyanodaya School,
            Aashish learned the importance of applying classic web designing
            ideas to modern brands strategies from experts in the field,
            including his Computer Teacher, Mr. Mannor Shakya.
          </p>
          <br />
          <p>
            Recently, he won the Web Design competition at SXC Computer festival
            2019 and participated in a group project on improving Web Designing.
            Aashish is currently finishing his College in Management Faculty and
            hopes to intern in an online web designing department in the near
            future.
          </p>
        </div>
      </Section>
    );
  }
}
