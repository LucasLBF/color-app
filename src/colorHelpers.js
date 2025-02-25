import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = starterPalette => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    const colorScale = generateScale(color.color, 10).reverse();
    for (let i in colorScale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: colorScale[i],
        rgb: chroma(colorScale[i]).css(),
        rgba: chroma(colorScale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
};

const getRange = hexColor => {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4), hexColor, end];
};

const generateScale = (hexColor, ncolors) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(ncolors);
};

export { generatePalette };
