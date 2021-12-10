import React from "react";
import { withStyles } from "@mui/styles";
import PaletteFooterStyles from "./ComponentStyles/PaletteFooterStyles";

const PaletteFooter = props => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      <p className={classes.paletteName}>{paletteName}</p>
      <p className={classes.paletteEmoji}>{emoji}</p>
    </footer>
  );
};

export default withStyles(PaletteFooterStyles)(PaletteFooter);
