import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./ComponentStyles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
  const { name, classes, handleClick } = props;
  return (
    <div className={classes.draggableColorBox}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.delete} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
