const styles = {
  "@global": {
    ".page-enter": {
      opacity: 0,
    },
    ".page-enter-active": {
      opacity: 1,
    },
    ".page-exit-active": {
      opacity: 0,
    },
  },
  page: {
    minHeight: "100vh",
    width: "100%",
    transition: "opacity 400ms ease-in",
    position: "absolute",
  },
};

export default styles;
