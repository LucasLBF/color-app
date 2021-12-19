import { DRAWER_WIDTH } from "../constants";
import breakpoints from "./mediaQueries";

const styles = theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "1rem",
    [breakpoints.down("md")]: {
      paddingRight: "0.5rem",
    },
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  paletteFormArea: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    "& button": {
      marginLeft: "auto",
    },
  },
  navbarHeader: {
    marginLeft: "1rem",
    [breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  navBtns: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      gap: "0.2rem",
      flexWrap: "wrap",
    },
  },
  backLink: {
    textDecoration: "none",
  },
  button: {
    fontSize: "1rem",
    [breakpoints.down("md")]: {
      fontSize: "0.65rem",
    },
    [breakpoints.down("sm")]: {
      padding: "0.25rem 0.5rem",
    },
  },
});

export default styles;
