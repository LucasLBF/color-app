import React from "react";
import { withStyles } from "@mui/styles";
import MiniPaletteStyles from "./ComponentStyles/MiniPaletteStyles";

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.box}
      onClick={props.handleClick}
      key={color.name}
      style={{ backgroundColor: `${color.color}` }}
    ></div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(MiniPaletteStyles)(MiniPalette);
