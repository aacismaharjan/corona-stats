import React, { Component } from "react";
import Title from "./Title";

export default class Section extends Component {
  getClass = (isShade) => {
    let classes = "main-section";
    if (isShade) classes += " shade";
    return classes;
  };

  render() {
    let loading = true;
    const { children, title, isShade } = this.props;

    let wrapper = (
      <React.Fragment>
        <Title>{title}</Title>
        <div className="row">{children}</div>
      </React.Fragment>
    );

    return (
      <section className={this.getClass(isShade)}>
        <div className="container">{wrapper}</div>
      </section>
    );
  }
}
