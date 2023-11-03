import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <Router>
          <Header />
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </Router>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default App;
