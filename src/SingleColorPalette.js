import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades();
    this.state = {
      format: "hex",
    };
    this.changeColorFormat = this.changeColorFormat.bind(this);
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

  changeColorFormat(newFormat) {
    this.setState({ format: newFormat });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(shade => (
      <ColorBox
        key={shade.name}
        color={shade[format]}
        name={shade.name}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar changeCode={this.changeColorFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          <p className="Palette-name">{paletteName}</p>
          <p className="Palette-emoji">{emoji}</p>
        </footer>
      </div>
    );
  }
}

export default SingleColorPalette;
