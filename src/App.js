import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
function App() {
  return (
      <div className="App">
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Container>
      </div>
  );
}

export default App;
