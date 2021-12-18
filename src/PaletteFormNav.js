import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { AddToPhotos } from "@material-ui/icons";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./ComponentStyles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formShowing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { formShowing } = this.state;
    const { classes, open, handleDrawerOpen, palettes, handleSubmit } =
      this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotos />
            </IconButton>
            <Typography
              className={classes.navbarHeader}
              variant="h6"
              color="inherit"
              noWrap
            >
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Button
              className={classes.button}
              onClick={this.showForm}
              variant="contained"
              color="primary"
            >
              Save Palette
            </Button>
            <Link to="/">
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
