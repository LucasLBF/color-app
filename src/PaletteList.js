import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import PaletteListStyles from "./ComponentStyles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { paletteList, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link className to="/palette/new">
              Create new palette
            </Link>
          </nav>
          <div className={classes.palettes}>
            {paletteList.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                handleClick={() => {
                  this.goToPalette(palette.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(PaletteListStyles)(PaletteList);
