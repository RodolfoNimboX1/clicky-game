import React, { Component } from 'react';
import logo from './portal.png';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer';
import Cards from './components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Jumbotron>
          <img src={logo} className="App-logo" alt="Portal" />
          <h1 className="App-title">Welcome to Clicky Game!</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>
        </Jumbotron>
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
