import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <Router>
          <Header />
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </Router>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
