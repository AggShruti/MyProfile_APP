import React, { Component } from 'react';
import './App.css';
import './image.css'
import ArticleList from './components/Articles.js';

//import Layout from './containers/Layout';

class App extends Component {
  render() {
    return (
   
        <div  >
        <ArticleList />
        </div >
    );
  }
}

export default App;
