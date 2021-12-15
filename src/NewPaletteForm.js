import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormNav from "./PaletteFormNav";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerContainer: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttons: {
    width: "100%",
  },
  button: {
    width: "50%",
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newColorName: "",
      colors: this.props.palettes[0].colors,
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteColorBox = this.handleDeleteColorBox.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  addNewColor(color, colorName) {
    const newColor = {
      color: color,
      name: colorName,
    };
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  handleSubmit(paletteName) {
    const paletteId = paletteName.toLowerCase().replace(/ /g, "-");
    const newPalette = {
      paletteName: paletteName,
      id: paletteId,
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  handleDeleteColorBox(colorName) {
    this.setState({
      colors: this.state.colors.filter(c => c.name !== colorName),
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearPalette() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = this.props.palettes.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography variant="h4" gutterBottom>
              Design your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                onClick={this.clearPalette}
                variant="contained"
                color="secondary"
              >
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                onClick={this.addRandomColor}
                variant="contained"
                color="primary"
                disabled={isPaletteFull && true}
              >
                {isPaletteFull ? "Palette Full" : "Random Color"}
              </Button>
            </div>
            <ColorPickerForm
              colors={colors}
              addNewColor={this.addNewColor}
              isPaletteFull={isPaletteFull}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            onSortEnd={this.onSortEnd}
            colors={colors}
            removeColor={this.handleDeleteColorBox}
            axis="xy"
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
