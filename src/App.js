import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer'

// Views
import Posts from './views/Posts'
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Router>
            <NavBar />
            <hr />
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/posts" component={Posts}></Route>
          </Router>
        </div>
        <hr />
        <div className="container-fluid">
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
