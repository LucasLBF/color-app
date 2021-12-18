import breakpoints from "./mediaQueries";

const NavbarStyles = {
  navbar: {
    height: "5vh",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    paddingRight: "3rem",
    [breakpoints.down("sm")]: {
      padding: "0 2rem",
    },
  },
  navbarBrand: {
    backgroundColor: "#eceff1",
    height: "100%",
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    "&  a": {
      textDecoration: "none",
      fontSize: "1.6rem",
      color: "#444",
    },
    [breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sliderContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },
  slider: {
    width: "240px",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus":
      {
        backgroundColor: "#2f9e44",
        outline: "none",
        border: "2px solid #2f9e44",
        boxShadow: "none",
        marginTop: "-3px",
      },
    [breakpoints.down("xs")]: {
      width: "140px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
  },
};

export default NavbarStyles;
