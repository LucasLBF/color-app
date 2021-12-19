import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@mui/styles";
import classNames from "classnames";
import ColorBoxStyles from "./ComponentStyles/ColorBoxStyles";

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
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.colorBox}>
          <div
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
          ></div>
          {/* <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}> */}
          <div
            className={classNames(classes.copyMsg, {
              [classes.showMsg]: copied,
            })}
          >
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

export default withStyles(ColorBoxStyles)(ColorBox);
