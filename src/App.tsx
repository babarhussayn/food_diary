import React from 'react';
import logo from './logo.svg';
import '../src/styles/style.scss';
import MainWrape from './wrappers/Main-wrape';

import Product from './pages/products/product';

function App() {
  return (
    <>
    <MainWrape >

<Product/>
    </MainWrape>
    </>
  );
}

export default App;
