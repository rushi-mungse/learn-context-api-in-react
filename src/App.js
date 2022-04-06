import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./layouts/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { cartContext } from "./CartContext";

const App = () => {
  return (
    <cartContext.Provider value={"Rushikesh"}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </cartContext.Provider>
  );
};

export default App;
