import React, { Component } from 'react';
import './App.css';
import Header from './navbar';
import SectionA from './SectionA';

import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionA />
        <Footer />
      </div>
    );
  }
}

export default App;
