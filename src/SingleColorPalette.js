import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(shade => (
      <ColorBox
        key={shade.name}
        color={shade[format]}
        name={shade.name}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar changeCode={this.changeColorFormat} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link className="back-btn" to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
