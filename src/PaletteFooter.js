import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
  paletteFooter: {
    height: "5vh",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
  paletteName: {
    fontSize: "1rem",
  },
  paletteEmoji: {
    fontSize: "1.125rem",
    marginLeft: "1rem",
  },
};

const PaletteFooter = props => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      <p className={classes.paletteName}>{paletteName}</p>
      <p className={classes.paletteEmoji}>{emoji}</p>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
