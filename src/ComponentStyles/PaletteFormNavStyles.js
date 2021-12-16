import { DRAWER_WIDTH } from "../constants";

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
  navBtns: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
