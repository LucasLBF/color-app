import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import Palette from "../Palette";
import ColorBox from "../ColorBox";

const mockPalette = {
  paletteName: "Material UI Colors",
  id: "material-ui-colors",
  emoji: "🎨",
  colors: [
    { name: "red", color: "#F44336" },
    { name: "pink", color: "#E91E63" },
    { name: "purple", color: "#9C27B0" },
    { name: "deeppurple", color: "#673AB7" },
    { name: "indigo", color: "#3F51B5" },
    { name: "blue", color: "#2196F3" },
    { name: "lightblue", color: "#03A9F4" },
    { name: "cyan", color: "#00BCD4" },
    { name: "teal", color: "#009688" },
    { name: "green", color: "#4CAF50" },
    { name: "lightgreen", color: "#8BC34A" },
    { name: "lime", color: "#CDDC39" },
    { name: "yellow", color: "#FFEB3B" },
    { name: "amber", color: "#FFC107" },
    { name: "orange", color: "#FF9800" },
    { name: "deeporange", color: "#FF5722" },
    { name: "brown", color: "#795548" },
    { name: "grey", color: "#9E9E9E" },
    { name: "bluegrey", color: "#607D8B" },
  ],
};

describe("Rendering components", () => {
  it("Renders App without crashing", () => {
    shallow(<App />);
  });

  it("Renders Palette without crashing", () => {
    shallow(<Palette palette={mockPalette} />);
  });

  it("Renders ColorBox without crashing", () => {
    shallow(<ColorBox />);
  });
});

describe("Components accept props", () => {
  it("Contains palette prop on Palette", () => {
    const wrapper = mount(<Palette palette={mockPalette} />);
    expect(wrapper.props().palette).toEqual(mockPalette);
  });

  it("Contains color and name props on ColorBox", () => {
    const HEX_CODE = "#9C27B0";
    const COLOR_NAME = "purple";
    const wrapper = mount(<ColorBox color={HEX_CODE} name={COLOR_NAME} />);
    expect(wrapper.props().color).toEqual(HEX_CODE);
    expect(wrapper.props().name).toEqual(COLOR_NAME);
  });
});
