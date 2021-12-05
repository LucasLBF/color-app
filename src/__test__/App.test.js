import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import Palette from "../Palette";
import ColorBox from "../ColorBox";
import mockPalette from "./mockPalette";

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
