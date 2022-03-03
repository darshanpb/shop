import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
function App() {
  return (
      <div className="App">
        <NavBar />
        <Container className='w-75 flex-column m-auto p-4'>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='/add' element={<Add/>}/>
          </Routes>
        </Container>
      </div>
  );
}

export default App;
