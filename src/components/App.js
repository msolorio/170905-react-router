import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/home">
            <div>Go Home</div>
          </Link>
          <Link to="/About">
            <div>Go to About</div>
          </Link>
          <Link to="/contact">
            <div>Go to Contact</div>
          </Link>
          <div className="contentSection">
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
