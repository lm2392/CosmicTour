import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "aframe";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import PS from "./components/ps";
import sky from "./components/sky";

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            crossorigin="anonymous"
          />

          <img id="skyTexture" src="https://raw.githubusercontent.com/lm2392/cosmictour/master/src/1.jpg" />
        </a-assets>

        <PS />

        <a-box position="-1 0.6 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.35 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder
          position="1 0.85 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 .1 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
       
        <a-sky
          animation="property: rotation; to: 0 360 0; dur: 480500; loop:true; easing: linear"
          src="#skyTexture"
          radius="10"
        ></a-sky>

        <a-circle
          src="#groundTexture"
          rotation="-90 0 0"
          radius="32"
        ></a-circle>

        <a-entity hand-controls="hand: left"></a-entity>
        <a-entity hand-controls="hand: right"></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
