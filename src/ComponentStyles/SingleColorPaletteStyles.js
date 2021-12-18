import breakpoints from "./mediaQueries";

const SingleColorPaletteStyles = {
  singleColorPalette: {
    height: "100vh",
    overflow: "hidden",
  },
  paletteColors: {
    height: "90%",
    fontSize: 0,
  },
  goBackBox: {
    width: "20%",
    display: "inline-block",
    height: "50%",
    cursor: "pointer",
    position: "relative",
    textTransform: "uppercase",
    backgroundColor: "#000",
    [breakpoints.down("lg")]: {
      width: "25%",
      height: "33.333%",
    },
    [breakpoints.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
      height: "10%",
    },
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
