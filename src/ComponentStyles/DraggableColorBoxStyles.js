import chroma from "chroma-js";

const styles = {
  draggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    backgroundColor: props => props.color,
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.4)",
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
