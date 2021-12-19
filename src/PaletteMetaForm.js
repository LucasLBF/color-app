import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
      emoji: "",
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectEmoji = this.handleSelectEmoji.bind(this);
    this.changeStage = this.changeStage.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      const { palettes } = this.props;
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSelectEmoji(emoji) {
    this.setState({ emoji: emoji.native });
  }

  changeStage() {
    const { stage } = this.state;
    this.setState({ stage: stage === "form" ? "emoji" : "form" });
  }

  savePalette() {
    const { newPaletteName, emoji } = this.state;
    const paletteData = {
      paletteName: newPaletteName,
      emoji: emoji,
    };
    this.props.handleSubmit(paletteData);
    this.setState({ stage: "" });
  }

  render() {
    const { hideForm } = this.props;
    const { newPaletteName, stage } = this.state;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">
            Pick an emoji for your new palette!
          </DialogTitle>
          <Picker
            set="apple"
            emoji="art"
            onSelect={this.handleSelectEmoji}
            emojiSize={24}
            title=""
          />
          <DialogActions>
            <Button onClick={this.changeStage} color="primary">
              Go Back
            </Button>
            <Button
              variant="contained"
              onClick={this.savePalette}
              color="primary"
            >
              Save Palette
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.changeStage}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure it's unique!
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
                label="Palette Name"
                name="newPaletteName"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter Palette Name",
                  "Palette name already taken",
                ]}
                fullWidth
                variant="standard"
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" type="submit" color="primary">
                Next
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
