import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./ComponentStyles/PageStyles";

const Page = ({ children, classes }) => {
  return <section className={classes.page}>{children}</section>;
};

export default withStyles(styles)(Page);
