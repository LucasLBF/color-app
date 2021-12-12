import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedPalettes from "./seedPalettes";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedPalettes,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(p => p.id === id);
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...seedPalettes, newPalette] }, () => {
      console.log(this.state.palettes);
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm {...routeProps} savePalette={this.savePalette} />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList paletteList={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        ></Route>
        <Route
          exact
          path="/palette/:id"
          render={routerProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
