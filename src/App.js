// App.js
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      {/* Ensure Router is wrapping the whole structure */}
      <div className="App">
        <header className="App-header">
          <Navbar /> {/* Navbar should be inside Router */}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


