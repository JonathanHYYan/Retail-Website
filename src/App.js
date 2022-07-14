import { ThemeProvider } from "styled-components";
import Landing from "./Components/LandingPage/Landing";
import { Route, Switch } from "react-router-dom";

const theme = {
  womens: {
    fontFamily: "Helvetica",
    crown: "queen",
  },
  mens: {
    fontFamily: "Helvetica",
    crown: "king",
  },
};

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Landing></Landing>
      </ThemeProvider>
  );
}

export default App;
