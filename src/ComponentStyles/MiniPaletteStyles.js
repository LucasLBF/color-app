const MiniPaletteStyles = {
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    width: "100%",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
    height: "150px",
    fontSize: 0,
  },
  box: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    fontSize: "1.5rem",
  },
  deleteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
    color: "#fff",
    backgroundColor: "#eb3d30",
    opacity: 0,
  },
};

export default MiniPaletteStyles;
