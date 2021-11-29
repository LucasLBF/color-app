import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        <div class="Palette-colors">
          {this.props.palette.colors.map(colorObj => (
            <ColorBox color={colorObj.color} name={colorObj.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
