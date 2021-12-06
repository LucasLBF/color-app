import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { paletteList } = this.props;
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {paletteList.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
