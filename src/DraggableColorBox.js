import React from "react";
import { withStyles } from "@mui/styles";

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
  },
};
const DraggableColorBox = props => {
  const { color, name, classes } = props;
  return (
    <div
      className={classes.draggableColorBox}
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
