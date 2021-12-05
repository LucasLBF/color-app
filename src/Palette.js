import React, { Component } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    return (
      <div className="Palette">
        <div className="Palette-slider">
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">
          {colors[this.state.level].map(colorObj => (
            <ColorBox
              key={colorObj.id}
              color={colorObj.hex}
              name={colorObj.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
