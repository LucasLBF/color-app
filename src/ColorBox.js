import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <p>{this.props.name}</p>
        <span className="ColorBox-more">MORE</span>
      </div>
    );
  }
}

export default ColorBox;
