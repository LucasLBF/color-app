import React from "react";

const PaletteFooter = props => {
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-footer">
      <p className="Palette-name">{paletteName}</p>
      <p className="Palette-emoji">{emoji}</p>
    </footer>
  );
};

export default PaletteFooter;
