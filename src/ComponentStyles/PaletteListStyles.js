import breakpoints from "./mediaQueries";

const PaletteListStyles = {
  root: {
    backgroundColor: "blue",
    minHeight: "100vh",
    display: "flex",
    paddingBottom: "2rem",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [breakpoints.down("xl")]: {
      width: "70%",
    },
    [breakpoints.down("lg")]: {
      width: "80%",
    },
    [breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    marginBottom: "1.5rem",
    "& a:link, & a:visited": {
      color: "#fff",
      fontWeight: "500",
      textDecoration: "none",
      borderBottom: "1px solid transparent",
      transition: "border-bottom 300ms ease-in-out",
    },
    "& a:hover, & a:active": {
      borderBottom: "1px solid #fff",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2rem",
    [breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: "1rem",
    },
  },
};

export default PaletteListStyles;
