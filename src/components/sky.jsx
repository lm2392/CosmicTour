import React, { Component } from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";

class SKY extends Component {
  render() {
    return React.createElement("img", {
      id: "skyTexture",
      src: "1.jpg"
    });
  }
}

export default SKY;
