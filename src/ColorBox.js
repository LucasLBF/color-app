import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@mui/styles";
import "./ColorBox.css";

const styles = {
  copyText: {
    color: props => (chroma(props.color).luminance() >= 0.6 ? "#000" : "#fff"),
    display: "block",
    fontSize: "1.5rem",
    fontWeight: 100,
  },
  colorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    cursor: "pointer",
    position: "relative",
    textTransform: "uppercase",
    backgroundColor: props => props.color,
    "&:hover button": {
      opacity: 1,
    },
  },
  copyBtn: {
    display: "inline-block",
    opacity: 0,
    border: "none",
    outline: "none",
    padding: "0.5rem 1.5em",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 300ms",
    color: props => (chroma(props.color).luminance() >= 0.8 ? "#000" : "#fff"),
  },
  colorName: {
    color: props => (chroma(props.color).luminance() <= 0.1 ? "#fff" : "#000"),
  },
  copyOverlay: {
    opacity: 0,
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    zIndex: 0,
    transition: "transform 600ms ease-in-out",
    backgroundColor: props => props.color,
  },
  showOverlay: {
    opacity: 1,
    transform: "scale(9)",
    zIndex: 10,
    position: "absolute",
  },
  moreBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: props => (chroma(props.color).luminance() >= 0.6 ? "#000" : "#fff"),
    padding: "0.25rem 0.75rem",
    position: "absolute",
    fontSize: "1rem",
    fontWeight: 500,
    right: 0,
    bottom: 0,
  },
  copyMsg: {
    opacity: 0,
    transform: "scale(0)",
    textAlign: "center",
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
  },
  showMsg: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: 20,
    transition: "all 400ms ease-in-out",
    transitionDelay: "300ms",
  },
  boxContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "10px",
    letterSpacing: "1px",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#000",
  },
  successMsg: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "100%",
    fontWeight: 400,
    textShadow: "1px 2px #777",
    padding: "1rem",
    fontSize: "3.6rem",
    textTransform: "uppercase",
  },
};
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 2000);
    });
  }

  render() {
    const { color, name, colorId, paletteId, showingFullPalette, classes } =
      this.props;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.colorBox}>
          <div
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
          ></div>
          <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
            <h1 className={classes.successMsg}>Copied!</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyBtn}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.moreBtn}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
