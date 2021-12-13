import React from "react";
import { withStyles } from "@mui/styles";
import chroma from "chroma-js";
import DeleteIcon from "@mui/icons-material/Delete";

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
const DraggableColorBox = props => {
  const { name, classes, handleClick } = props;
  return (
    <div className={classes.draggableColorBox}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.delete} onClick={handleClick} />
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
