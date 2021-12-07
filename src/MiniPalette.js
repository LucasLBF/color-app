import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    width: "100%",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
    height: "150px",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  box: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    fontSize: "1.5rem",
  },
};

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

export default withStyles(styles)(MiniPalette);
