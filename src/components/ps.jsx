import React, { Component } from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";

class PS extends Component {
  render() {
    return React.createElement("a-entity", {
      type: "1",
      position: "0 0 0",
      rotation: "90 0 0",
      "particle-system":
        "maxAge:60; dragValue:1; size: .25 ;  positionSpread:100 50 100 ;  color: #ffffff,#ffffff;  accelerationValue: .000000000000000000000000000000000000000000000000000000000000000000000000000001 .000000000000000000000000000000000000000000000000000000000000000000000000000001 .000000000000000000000000000000000000000000000000000000000000000000000000000001;  velocityValue: .0000000000000000000000001 .00000000000000000000000020 .0000000000000000000000001;  randomise: true; "
    });
  }
}

export default PS;
