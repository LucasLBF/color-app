import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@mui/material/Select";
import { IconButton, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.changeCode(e.target.value);
  }

  closeSnackBar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="Navbar-brand">
          <a className="Navbar-brand-name" href="/">
            ReactColorPicker
          </a>
        </div>
        <span>Level: {level}</span>
        <div className="Navbar-palette-slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
        <div className="Navbar-select-container">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select onChange={this.handleChange} value={format}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Snackbar
          open={open}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          autoHideDuration={2000}
          onClose={this.closeSnackBar}
          message={`Format changed to ${format.toUpperCase()}`}
          contentProps={{
            "aria-describedby": "message-id",
          }}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
