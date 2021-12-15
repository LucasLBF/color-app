import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    width: "80%",
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorInput: {
    width: "100%",
  },
};
class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      const { colors } = this.props;
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      const { currentColor } = this.state;
      const { colors } = this.props;
      return colors.every(({ color }) => color !== currentColor);
    });
  }

  handleChangeColor(color) {
    this.setState({ currentColor: color.hex });
  }

  handleAddColor() {
    const { currentColor, newColorName } = this.state;
    this.props.addNewColor(currentColor, newColorName);
    this.setState({ newColorName: "" });
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  render() {
    const { newColorName, currentColor } = this.state;
    const { isPaletteFull, classes } = this.props;
    return (
      <div className={classes.root}>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChangeComplete={this.handleChangeColor}
        />
        <ValidatorForm onSubmit={this.handleAddColor}>
          <TextValidator
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            className={classes.colorInput}
            value={newColorName}
            onChange={this.handleChange}
            name="newColorName"
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter color name",
              "Color name must by unique",
              "Color already used",
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            type="submit"
            disabled={isPaletteFull && true}
            style={{
              backgroundColor: isPaletteFull ? "grey" : currentColor,
            }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
