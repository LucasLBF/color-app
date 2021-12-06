import Palette from "./Palette";
import PaletteList from "./PaletteList";
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
        render={() => <PaletteList paletteList={seedPalettes} />}
      />
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
