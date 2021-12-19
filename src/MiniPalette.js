import React, { PureComponent } from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import MiniPaletteStyles from "./ComponentStyles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickDelete(ev) {
    ev.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    console.log("RENDERING", paletteName);
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.box}
        key={color.name}
        style={{ backgroundColor: `${color.color}` }}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
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
