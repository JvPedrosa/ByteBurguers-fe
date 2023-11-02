import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
