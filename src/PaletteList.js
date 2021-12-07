import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

class PaletteList extends Component {
  render() {
    const { paletteList, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {paletteList.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
