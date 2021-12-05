import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeColorFormat(code) {
    this.setState({ format: code });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeCode={this.changeColorFormat}
        />
        <div className="Palette-colors">
          {colors[level].map(colorObj => (
            <ColorBox
              key={colorObj.id}
              color={colorObj[format]}
              name={colorObj.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
