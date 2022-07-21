import { ThemeProvider } from "styled-components";
import Landing from "./Components/LandingPage/Landing";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/UI/ScrollToTop";

const theme = {
  mens: {
    fontFamily: "Helvetica",
    accent: "#dc0019",
  },
};

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Nav />
        <ScrollToTop/>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
