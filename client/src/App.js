// client/src/App.js
import React from 'react';

import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';

const App = () => {
  return (
    <CustomItemContext>
      <Header />
      <ProductList />
    </CustomItemContext>
  );
};

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/