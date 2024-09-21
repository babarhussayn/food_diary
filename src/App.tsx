import React from 'react';
import '../src/styles/style.scss';
import MainWrape from './wrappers/Main-wrape';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/products/product';
import Detail from './pages/Detail/Detail';
import foodData from './dataApi.json'
function App() {
  return (
    <MainWrape>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<Detail foodData={foodData}/>} />
      </Routes>
    </MainWrape>
  );
}

export default App;
