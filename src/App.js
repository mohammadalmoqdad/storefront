import './App.css';
import React from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Catigories from "./components/catigories";
import Products from "./components/products";
import Cart from "./components/cart";
function App() {
  return (
    <>
      <Header />
      <Catigories />
      <Products />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
