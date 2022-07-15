import { ThemeProvider } from "styled-components";
import Landing from "./Components/LandingPage/Landing";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";

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
      <Nav />
      {/* <Landing/> */}
      <ProductPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
