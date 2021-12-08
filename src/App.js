import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

const findPalette = id => seedPalettes.find(p => p.id === id);
function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList paletteList={seedPalettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
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
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
