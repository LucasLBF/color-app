const PaletteListStyles = {
  root: {
    backgroundColor: "blue",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
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
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

export default PaletteListStyles;
