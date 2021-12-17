import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import PaletteListStyles from "./ComponentStyles/PaletteListStyles";
import { DialogActions } from "@material-ui/core";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      toBeDeleted: "",
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleClickOpen(paletteId) {
    this.setState({ open: true, toBeDeleted: paletteId });
  }

  handleDelete() {
    this.props.deletePalette(this.state.toBeDeleted);
    this.handleClose();
  }

  handleClose() {
    this.setState({ open: false, toBeDeleted: "" });
  }
  render() {
    const { paletteList, classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleDelete}>Yes</Button>
            <Button onClick={this.handleClose}>No</Button>
          </DialogActions>
        </Dialog>
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
                  openDialog={this.handleClickOpen}
                  handleClick={() => {
                    this.goToPalette(palette.id);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(PaletteListStyles)(PaletteList);
