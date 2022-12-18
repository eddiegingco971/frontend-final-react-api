// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import EditProduct from "./components/product/edit.component.jsx";
import ProductList from "./components/product/list.component.jsx";
import CreateProduct from "./components/product/create.component.jsx";
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (<Router>
    {/* <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud App
        </Link>
        <Link to={"/"} className="navbar-brand text-white">
         Home
        </Link>
        <Link to={"/products"} className="navbar-brand text-white">
         Products
        </Link>
       
      </Container>
    </Navbar> */}
  
      <Navbar/>
    
    

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/products' element={<ProductList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
