import React, { Component } from 'react';
import Blog from './components/Blog'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog name="Edgar Test" pin="true"></Blog>
        <Blog name="Test" pin="true" time="hece 2hrs aprox"></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
      </div>
    );
  }
}

export default App;
