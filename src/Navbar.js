import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="Navbar-brand">
          <a className="Navbar-brand-name" href="/">
            ReactColorPicker
          </a>
        </div>
        <span>Level: {level}</span>
        <div className="Navbar-palette-slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </header>
    );
  }
}

export default Navbar;
