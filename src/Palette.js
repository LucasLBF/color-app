import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";

const styles = {
  palette: {
    height: "100vh",
  },
  paletteColors: {
    display: "flex",
    flexWrap: "wrap",
    height: "90%",
  },
};
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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeCode={this.changeColorFormat}
          showSlider
        />
        <div className={classes.paletteColors}>
          {colors[level].map(colorObj => (
            <ColorBox
              paletteId={id}
              colorId={colorObj.id}
              key={colorObj.id}
              color={colorObj[format]}
              name={colorObj.name}
              showingFullPalette
            />
          ))}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
