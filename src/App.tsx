import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ProductsProvider } from "./context/ProductsProvider";
import { useState, useEffect } from "react";
import useCart from "./hooks/useCart";

function App() {
  const [viewCart, setViewCart] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    if (totalItems > 0) setViewCart(true);
    else setViewCart(false);
  }, [totalItems]);

  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <Router>
          <Header />
          <div className="content">
            <Routes viewCart={viewCart} />
          </div>
          <Footer />
        </Router>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
