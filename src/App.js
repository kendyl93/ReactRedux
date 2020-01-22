import React from 'react';
import Products from './Products/Products';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>REACT</h1>
        <Products />
      </div>
    );
  }
}

export default App;
