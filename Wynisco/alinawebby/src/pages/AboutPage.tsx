import Calculator from "../components/Calculator/Calculator";
import React, { Component } from "react";

export class AboutPage extends Component {
  render() {
    return (
      <>
        <h1>
          Calculator!
          <Calculator />
        </h1>
      </>
    );
  }
}
