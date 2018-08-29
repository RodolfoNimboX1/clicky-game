import React, { Component } from 'react';
import logo from './portal.png';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer';
import Cards from './components/Cards/Cards';
import Characters from './characters.json';

let topScore = 0;
let score = 0;

class App extends Component {
  state = {
    Characters,
    topScore,
    score
  }

  setClicked = id => {
    const Characters = this.state.Characters;
    const cardClicked = Characters.filter(Characters.id === id);

    if (cardClicked[0].clicked) {
      score = 0;
      alert("BUMP! Start over");

      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }
      this.setState({score});
      this.setState({Characters})
    } else {
      cardClicked[0].clicked = true;

      score = score + 1;

      if (score > topScore) {
        topScore = score;
        this.setState({topScore});
      }
      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({Characters});
      this.setState({score});
    }
  };

  render() {
    return (
      <div className="App">
      <Nav 
      score={this.state.score}
      topScore={this.state.topScore}
      />
      <Jumbotron>
          <img src={logo} className="App-logo" alt="Portal" />
          <h1 className="App-title">Welcome to Clicky Game!</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>
        </Jumbotron>
        {this.state.Characters.map(Characters => (
          <Cards 
          setClicked={this.setClicked}
          id={Characters.id}
          key={Characters.id}
          image={Characters.image}
          name={Characters.name}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
