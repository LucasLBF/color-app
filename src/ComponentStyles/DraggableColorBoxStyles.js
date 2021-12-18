import chroma from "chroma-js";
import breakpoints from "./mediaQueries";

const styles = {
  draggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    textTransform: "uppercase",
    backgroundColor: props => props.color,
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.4)",
    },
    [breakpoints.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [breakpoints.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "10px",
    letterSpacing: "1px",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: props => (chroma(props.color).luminance() <= 0.1 ? "#fff" : "#444"),
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  delete: {
    color: "rgba(0, 0, 0, 0.5)",
    transition: "all 300ms",
  },
};

export default styles;
