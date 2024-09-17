import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainWrape from './wrappers/Main-wrape';
import Header from './components/Header';
import Product from './pages/product/product';

function App() {
  return (
    <>
    <MainWrape >
<Header/>
<Product/>
    </MainWrape>
    </>
  );
}

export default App;
