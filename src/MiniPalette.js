import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import MiniPaletteStyles from "./ComponentStyles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(ev) {
    ev.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.box}
        key={color.name}
        style={{ backgroundColor: `${color.color}` }}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          onClick={this.handleClickDelete}
          className={classes.deleteIcon}
          style={{ transition: "all 300ms" }}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <div className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
