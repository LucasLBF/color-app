import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "./ColorBox";
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
