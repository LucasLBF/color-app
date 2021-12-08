import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

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
    const { color, name, colorId, paletteId, showLink } = this.props;
    const copied = this.state.copied;
    const isDarkColor = chroma(color).luminance() <= 0.1;
    const isLightColor = chroma(color).luminance() >= 0.6;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          <div
            className={`ColorBox-copy-overlay ${copied && "show"}`}
            style={{ backgroundColor: color }}
          ></div>
          <div className={`ColorBox-copy-message ${copied && "show"}`}>
            <h1 className="ColorBox-copy-success">Copied!</h1>
            <p className={`ColorBox-color-code ${isLightColor && "dark-text"}`}>
              {color}
            </p>
          </div>
          <div className="ColorBox-copy-container">
            <div className="ColorBox-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button
              className={`ColorBox-copy-btn ${isLightColor && "dark-text"}`}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`ColorBox-more ${isLightColor && "dark-text"}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
