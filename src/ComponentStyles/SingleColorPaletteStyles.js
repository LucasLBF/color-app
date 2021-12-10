const SingleColorPaletteStyles = {
  singleColorPalette: {
    height: "100vh",
  },
  paletteColors: {
    display: "flex",
    flexWrap: "wrap",
    height: "90%",
  },
  goBackBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    cursor: "pointer",
    position: "relative",
    textTransform: "uppercase",
    backgroundColor: "#000",
  },
  goBackBtn: {
    display: "inline-block",
    border: "none",
    outline: "none",
    padding: "0.5rem 1.5em",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:link": {
      textDecoration: "none",
    },
    "&:visited": {
      textDecoration: "none",
    },
  },
};

export default SingleColorPaletteStyles;
