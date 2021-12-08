import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades();
    this.state = {
      format: "hex",
    };
  }

  getShades() {
    const scales = [];
    const { colors } = this.props.palette;
    for (let scale in colors) {
      const scaleObj = colors[scale].find(c => c.id === this.props.colorId);
      scales.push(scaleObj);
    }
    return scales.slice(1);
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map(shade => (
      <ColorBox
        key={shade.name}
        color={shade[format]}
        name={shade.name}
        showLink={false}
      />
    ));
    return (
      <>
        <h1>Single Color Palette</h1>
        <div className="Palette">
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
      </>
    );
  }
}

export default SingleColorPalette;
