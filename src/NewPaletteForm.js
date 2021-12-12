import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DraggableColorBox from "./DraggableColorBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  Main,
  AppBar,
  DrawerHeader,
} from "./ComponentStyles/NewPaletteFormStyles";

const drawerWidth = 400;
class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    console.log("props:", this.props);
    console.log("theme:", this.theme);
    this.state = {
      open: false,
      currentColor: "teal",
      newName: "",
      colors: [],
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isNameUnique", value => {
      const { colors } = this.state;
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      const { colors, currentColor } = this.state;
      return colors.every(({ color }) => color !== currentColor);
    });
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleChangeColor(color) {
    this.setState({ currentColor: color.hex });
  }

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName,
    };
    this.setState({ colors: [...this.state.colors, newColor], newName: "" });
  }

  handleChange(ev) {
    this.setState({ newName: ev.target.value });
  }

  render() {
    const { open, currentColor, colors } = this.state;
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            Create a Palette
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Typography variant="h4">Design your Palette</Typography>
          <div>
            <Button variant="contained" color="error">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.handleChangeColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={this.state.newName}
              onChange={this.handleChange}
              validators={["required", "isNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter color name",
                "Color name must by unique",
                "Color already used",
              ]}
            />
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: currentColor,
              }}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <Main Main open={open}>
          <DrawerHeader />
          {colors.map(color => (
            <DraggableColorBox color={color.color} name={color.name} />
          ))}
        </Main>
      </Box>
    );
  }
}

export default NewPaletteForm;
